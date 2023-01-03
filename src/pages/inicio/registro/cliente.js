import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Formik } from "formik"
import Head from "next/head"

import Registro_exitoso from "/src/componentes/inicio/modales/registro_exitoso"
import useUser from "/src/hooks/useUser"

export default function Registro_cliente() {
  const router = useRouter()
  const { registroCliente } = useUser()
  const [estado, setEstado] = useState()
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => { setShowModal(false) }

  useEffect(() => {
    if (estado == 1) {
      setShowModal(true)
    }
  }, [estado])

  const handleSubmit = useCallback(data => {
    registroCliente(data, setEstado)
  }, [registroCliente])

  return (

    <section className="bg-white dark:bg-gray-900">
      <Head>
        <link rel="icon" href="/icono_inicio_sesion.png" />
        <title>Registro cliente</title>
        <meta name="description" content={"Registro cliente"} />
      </Head>
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: 'url("/clientes3.jpg")' }}>
        </div>
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <a
              onClick={() => {
                router.push('/')
              }}
              className="inline-flex items-center justify-center w-full px-0 py-3 text-base font-medium text-white bg-transparent hover:from-gray-600 hover:to-gray-600 sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
              Forma parte de nuestros clientes
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Regístrate como cliente y contacta a un asociado para empezar a disfrutar de nuestros servicios.
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
                  confirContrasena: "",
                  documento_asociado: ""
                }}
                onSubmit={handleSubmit}
              >
                {
                  ({ handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre (s) </label>
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
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido (s)</label>
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
                          placeholder="Ingrese tu documento"
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
                        {(estado === -104) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Teléfono inválido </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Identificación del asociado a vincular</label>
                        <input
                          onChange={handleChange}
                          id="documento_asociado"
                          name="documento_asociado"
                          type="text"
                          placeholder="Ingrese el número del asociado"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -105) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> El asociado ingresado no existe </span> : <></>}
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
                        {(estado === -106) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> La contraseña no es segura </span> : <></>}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar contraseña</label>
                        <input
                          onChange={handleChange}
                          id="confirContrasena"
                          name="confirContrasena"
                          type="password"
                          placeholder="Ingrese nuevamente su contraseña"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {(estado === -6) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> Las contraseñas no coinciden </span> : <></>}
                      </div>
                      {showModal && <Registro_exitoso onClose={() => handleClose()}></Registro_exitoso>}
                      <div></div>
                      <div style={{ paddingTop: 10 }} className="flex items-center justify-end">
                        {
                          (estado === 2)
                            ? <div style={{ borderTopColor: "transparent" }} className="w-10 h-10 border-4 border-blue-200 rounded-full animate-spin"></div>
                            : <></>
                        }
                      </div>
                      <button type="submit" className="flex items-center justify-between w-full  px-6 py-6 text-sm tracking-wide bg-blue-400 capitalize rounded-md border-blue-400 border-2 text-white hover:text-white font-semibold hover:shadow-[inset_20rem_0_0_0] hover:shadow-blue-600 duration-[400ms,800ms] transition-[color,box-shadow]">
                        <span><label className="mt-4 text-white-500 white:text-white-400 cursor-pointer">Registrarse</label></span>
                      </button>
                    </form>
                  )
                }
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

