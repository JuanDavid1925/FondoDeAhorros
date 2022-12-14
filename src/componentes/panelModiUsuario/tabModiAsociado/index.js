import { useCallback, useEffect, useState } from 'react'
import useUser from "/src/hooks/useUser"
import { Formik } from 'formik'
import $ from "jquery"

export default function TabModiAsociado() {
  const { modificacionAsociado, getUser } = useUser()

  const [estado, setEstado] = useState()
  const [asociado, setAsociado] = useState()

  const handleSubmitAsociado = useCallback((data) => {
    modificacionAsociado(data, setEstado)
  }, [modificacionAsociado])

  const cargarDatos = useCallback((documento) => {
    console.log(`documento: ${documento}, tipo: Asociado`)
    getUser({ documento: documento, tipo: 'Asociado' }, setEstado, setAsociado)
  }, [getUser])

  useEffect(() => {
    if (!asociado)
      return

    $("#nombres").val(asociado.nombres_usuario)
    $("#apellidos").val(asociado.apellidos_usuario)
    $("#telefono").val(asociado.telefono_usuario)
    $("#correo").val(asociado.correo_asociado)
    $("#ocupacion").val(asociado.ocupacion_asociado)
    $("#ciudad").val(asociado.ciudad_asociado)
    $("#direccion").val(asociado.direccion_asociado)
  }, [asociado])

  return <>
    <div>
      <Formik
        initialValues=
        {{
          documento: undefined,
          nombres: undefined,
          apellidos: undefined,
          telefono: undefined,
          correo: undefined,
          ocupacion: undefined,
          ciudad: undefined,
          direccion: undefined
        }}


        onSubmit={handleSubmitAsociado}

      >
        {
          ({ handleChange, handleSubmit, errors, touched }) => (
            <div>
              <div className="px-8 ml-28 mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Documento a buscar</label>
                    <input
                      onChange={handleChange}
                      id="documento"
                      name="documento"
                      type="text"
                      placeholder="Ingrese el documento del asociado"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div className="form-group flex">
                    <div
                      onClick={
                        () => {
                          cargarDatos($("#documento").val())
                        }
                      }
                      className="btn-primary flex items-center justify-between  px-6 py-5 text-sm tracking-wide bg-blue-400 capitalize rounded-md border-blue-400 border-2 text-white font-semibold"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><label className="mt-4 text-white-500 white:text-white-400 cursor-pointer"> Buscar</label></span>
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Nombre(s) </label>
                    <input
                      onChange={handleChange}
                      id="nombres"
                      name="nombres"
                      type="text"
                      placeholder="Ingrese el nuevo nombre"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Apellido(s)</label>
                    <input
                      onChange={handleChange}
                      id="apellidos"
                      name="apellidos"
                      type="text"
                      placeholder="Ingrese el nuevo apellido"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Teléfono</label>
                    <input
                      onChange={handleChange}
                      id="telefono"
                      name="telefono"
                      type="text"
                      placeholder="Ingrese el nuevo número de contacto"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Correo electrónico</label>
                    <input
                      onChange={handleChange}
                      id="correo"
                      name="correo"
                      type="email"
                      placeholder="Ingrese el nuevo correo electrónico"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Ocupación</label>
                    <input
                      onChange={handleChange}
                      id="ocupacion"
                      name="ocupacion"
                      type="text"
                      placeholder="Ingrese la nueva ocupación"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Ciudad</label>
                    <input
                      onChange={handleChange}
                      id="ciudad"
                      name="ciudad"
                      type="text"
                      placeholder="Ingrese la nueva ciudad"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Dirección de residencia</label>
                    <input
                      onChange={handleChange}
                      id="direccion"
                      name="direccion"
                      type="text"
                      placeholder="Ingrese la nueva dirección"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <br></br>
                  <div className="form-group flex ">
                    <button type="submit"
                      onClick={() => useEffect}
                      className="btn-primary flex items-center justify-between  px-6 py-5 text-sm tracking-wide bg-blue-400 capitalize rounded-md border-blue-400 border-2 text-white font-semibold">
                      <span><label className="mt-4 text-white-500 white:text-white-400 cursor-pointer">Modificar datos</label></span>
                    </button>
                  </div>
                  {(estado === 1) ? <span class="flex items-center font-medium tracking-wide text-green-500 text-md mt-1 ml-1">Asociado modificado con éxito. </span> : <></>}
                </form>
              </div>
            </div>
          )
        }
      </Formik>
    </div >
  </>
}