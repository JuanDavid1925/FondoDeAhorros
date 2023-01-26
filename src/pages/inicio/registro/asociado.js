import { useCallback, useEffect, useState } from "react"
import { Formik, ErrorMessage, Field } from "formik"
import { useRouter } from "next/router"
import Head from "next/head"
import * as Yup from "yup"
import $ from "jquery"
import useSaves from '/src/hooks/useSaves'


import Registro_exitoso from "/src/componentes/inicio/modales/registro_exitoso"
import Terminos from "/src/componentes/inicio/modales/terminos_condiciones"
import useUser from "/src/hooks/useUser"

export default function Registro() {
  const router = useRouter()
  const { registroAsociado } = useUser()
  const [estado, setEstado] = useState()
  const [estadoArchivo, setEstadoArchivo] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => { setShowModal(false) }
  const [showModal1, setShowModal1] = useState(false)
  const handleClose1 = () => { setShowModal1(false) }

  useEffect(() => {
    if (estado == 1) {
      setShowModal1(true)
    }
  }, [estado])

  const handleSubmit = useCallback(data => {
    registroAsociado(data, setEstado)
  }, [registroAsociado])

  const mostrarArchivo = useCallback(() => {
    const input = $("#firma").prop('files')[0].name
    return input

  }, [])

  return (
    <section className="bg-white dark:bg-gray-900">
      <Head>
        <link rel="icon" href="/icono_inicio_sesion.png" />
        <title>Registro asociado</title>
        <meta name="description" content={"Registro asociado"} />
      </Head>
      <div className="flex justify-center position:fixed">
        <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: 'url("/asociados3.jpg")' }}>
        </div>
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <a
              onClick={() => {
                router.push('/')
              }}
              className="inline-flex items-center justify-center w-full px-0 py-3 text-base font-medium text-white bg-transparent hover:from-gray-600 hover:to-gray-600 sm:w-auto cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
              Sé parte de nuestros asociados.
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Completa el formulario de registro y empieza a gozar de los beneficios de nuestro fondo de ahorros.
            </p>

            <div>
              <Formik
                initialValues=
                {{
                  documento: "",
                  nombres: "",
                  apellidos: "",
                  telefono: "",
                  contrasena: "",
                  correo: "",
                  fecha_nacimiento: "",
                  ocupacion: "",
                  ciudad: "",
                  direccion: "",
                  cuota_fija_mensual: "",
                  aceptarTerminos: false,
                  firma: ""
                }}

                validationSchema={Yup.object().shape({
                  aceptarTerminos: Yup.bool()
                    .oneOf([true], 'Debe aceptar términos y condiciones')
                })}

                onSubmit={fields => {
                  handleSubmit(fields)//agregar modal de que se logró todo con éxito
                }}

              >
                {
                  ({ handleChange, handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre(s) </label>
                        <input
                          onChange={handleChange}
                          id="nombres"
                          name="nombres"
                          type="text"
                          placeholder="Ingrese su(s) nombre(s)"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -101) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Nombre inválido </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido(s)</label>
                        <input
                          onChange={handleChange}
                          id="apellidos"
                          name="apellidos"
                          type="text"
                          placeholder="Ingrese su(s) apellido(s)"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -102) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Apellido inválido </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Documento de identificación</label>
                        <input
                          onChange={handleChange}
                          id="documento"
                          name="documento"
                          type="text"
                          placeholder="Ingrese su número de documento"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -103) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Documento inválido </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Teléfono</label>
                        <input
                          onChange={handleChange}
                          id="telefono"
                          name="telefono"
                          type="text"
                          placeholder="Ingrese su número de contacto"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -105) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Teléfono inválido </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Correo electrónico</label>
                        <input
                          onChange={handleChange}
                          id="correo"
                          name="correo"
                          type="email"
                          placeholder="Ingrese su correo electrónico"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -104) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Correo inválido </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Ocupación</label>
                        <input
                          onChange={handleChange}
                          id="ocupacion"
                          name="ocupacion"
                          type="text"
                          placeholder="Ingrese su ocupación"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -106) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Ocupación inválida </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Fecha de nacimiento</label>
                        <input
                          onChange={handleChange}
                          id="fecha_nacimiento"
                          name="fecha_nacimiento"
                          type="date"
                          placeholder=""
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -107) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Debes ser mayor de edad. </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Ciudad</label>
                        <input
                          onChange={handleChange}
                          id="ciudad"
                          name="ciudad"
                          type="text"
                          placeholder="Ingrese su ciudad"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -108) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Ciudad inválida </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Dirección de residencia</label>
                        <input
                          onChange={handleChange}
                          id="direccion"
                          name="direccion"
                          type="text"
                          placeholder="Ingrese su dirección"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -109) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Dirección inválida </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                        <input
                          onChange={handleChange}
                          id="contrasena"
                          name="contrasena"
                          type="password"
                          placeholder="Ingrese una contraseña"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -110) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> La contraseña no es segura </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar contraseña</label>
                        <input
                          onChange={handleChange}
                          id="confirContrasena"
                          name="confirContrasena"
                          type="password"
                          placeholder="Ingrese otra vez su contraseña "
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -10) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Las contraseñas no coinciden </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Cuota mensual</label>
                        <input
                          onChange={handleChange}
                          id="cuota_fija_mensual"
                          name="cuota_fija_mensual"
                          type="text"
                          placeholder="Ingrese la cuota que va a pagar"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -111) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> La cuota debe ser mayor o igual a la estipulada </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Subir firma</label>
                        <label className="w-40 flex flex-col items-center px-4 py-6 bg-cyan-200 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                          <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span className="mt-2 text-base leading-normal">Subir archivo</span>
                          <input onChange={evt => { handleChange(evt); console.log(evt); setEstadoArchivo(!evt.cancelable) }} id="firma" accept="image/png" type="file" className="hidden" />
                        </label>
                      </div>

                      <div className=" mt-20 form-group form-check">
                        <Field type="checkbox" name="aceptarTerminos" className={'form-check-input ' + (errors.aceptarTerminos && touched.aceptarTerminos ? ' Inválido' : '')} />
                        <label htmlFor="aceptarTerminos" className="form-check-label mb-2 text-sm text-gray-600 dark:text-gray-200"> Aceptar </label>
                        <a
                          onClick={() => setShowModal(true)}
                          className="text-blue-500 mb-2 text-sm focus:outline-none focus:underline hover:underline cursor-pointer">términos y condiciones
                        </a>.
                        {showModal && <Terminos onClose={() => handleClose()}></Terminos>}
                        {showModal1 && <Registro_exitoso onClose={() => handleClose1()}></Registro_exitoso>}
                        <ErrorMessage name="aceptarTerminos" component="div" className="t-2 text-sm text-red-600 dark:text-red-500" />
                      </div>
                      <label className="block mt-0 text-sm text-gray-600 dark:text-gray-200">{(estadoArchivo) ? mostrarArchivo() : ""}</label>
                      <br></br>
                      <div style={{ paddingTop: 10 }} className="flex items-center justify-end">
                        {
                          (estado === 2)
                            ? <div style={{ borderTopColor: "transparent" }} className="w-10 h-10 border-4 border-blue-200 rounded-full animate-spin"></div>
                            : <></>
                        }
                      </div>
                      <div className="form-group flex justify-center">
                        <button type="submit"
                          onClick={() => useEffect}
                          className="btn-primary flex items-center justify-between w-full px-6 py-5 text-sm tracking-wide bg-blue-400 capitalize rounded-md border-blue-400 border-2 text-white hover:text-white font-semibold hover:shadow-[inset_20rem_0_0_0] hover:shadow-blue-600 duration-[400ms,800ms] transition-[color,box-shadow]">
                          <span><label className="mt-4 text-white-500 white:text-white-400 cursor-pointer">Registrarse</label></span>
                        </button>
                      </div>
                    </form>
                  )
                }
              </Formik>
            </div>
          </div>
        </div>
      </div >
    </section >

  )
}
