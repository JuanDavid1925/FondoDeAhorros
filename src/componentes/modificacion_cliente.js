import { Fragment, useRef, useState, useCallback, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Formik } from 'formik'
import useUser from "/src/hooks/useUser"
import $ from "jquery"

export default function Modificacion_cliente({ children, onClose, documento }) {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  const { modificacionCliente, getUser } = useUser()
  const [estadoModificacion, setEstadoModificacion] = useState()
  const [estadoCargar, setEstadoCargar] = useState()
  const [cliente, setCliente] = useState()

  useEffect(() => {
    getUser({ documento: documento, tipo: 'Cliente' }, setEstadoCargar, setCliente)
  }, [getUser, documento])

  useEffect(() => {
    if (!cliente)
      return

    $("#documento").val(documento)
    $("#nombres").val(cliente.nombres_usuario)
    $("#apellidos").val(cliente.apellidos_usuario)
    $("#telefono").val(cliente.telefono_usuario)
    $("#activo").prop('checked', cliente.activo_usuario)
    $("#inactivo").prop('checked', !cliente.activo_usuario)
  }, [cliente, documento])

  const handleSubmitCliente = useCallback((data) => {
    data.documento = documento
    data.activo = $("#activo").prop('checked')
    modificacionCliente(data, setEstadoModificacion)
  }, [modificacionCliente, documento])


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop-blur-sm fixed inset-0 bg-opacity-75 transition-opacity bg-no-repeat bg-center bg-cover" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Modificar cliente
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div >
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

                    onSubmit={handleSubmitCliente}

                  >
                    {
                      ({ handleChange, handleSubmit, errors, touched }) => (
                        <div>
                          <div className="px-8 mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                              <div>
                                <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Documento</label>
                                <input
                                  onChange={handleChange}
                                  id="documento"
                                  name="documento"
                                  type="text"
                                  placeholder="Documento del cliente"
                                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  disabled
                                />
                              </div>
                              <div>
                                <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Nombre(s) </label>
                                <input
                                  onChange={handleChange}
                                  id="nombres"
                                  name="nombres"
                                  type="text"
                                  placeholder="Nombre(s)"
                                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>
                              <div>
                                <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Apellido(s)</label>
                                <input
                                  onChange={handleChange}
                                  id="apellidos"
                                  name="apellidos"
                                  type="text"
                                  placeholder="Apellido(s)"
                                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>
                              <div>
                                <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Teléfono</label>
                                <input
                                  onChange={handleChange}
                                  id="telefono"
                                  name="telefono"
                                  type="text"
                                  placeholder="Teléfono"
                                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>
                              <div>
                                <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Estado</label>
                                <div className="mt-5 flex items-start mb-6">
                                  <div className="flex items-center h-5">
                                    <input
                                      id="activo"
                                      name="activo"
                                      onChange={handleChange}
                                      aria-describedby="remember"
                                      type="checkbox"
                                      className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                      required
                                    />
                                  </div>
                                  <div className="text-sm ml-3">
                                    <label htmlFor="remember" className="font-medium text-gray-900">Activo</label>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-10 flex items-start mb-6">
                                <div className="flex items-center h-5">
                                  <input id="inactivo" aria-describedby="remember" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required />
                                </div>
                                <div className="text-sm ml-3">
                                  <label htmlFor="remember" className="font-medium text-gray-900">Inactivo</label>
                                </div>
                              </div>
                              <br></br>
                              {(estadoModificacion === 1) ? <span class="flex items-center font-medium tracking-wide text-green-500 text-md mt-1 ml-1">Cliente modificado con éxito. </span> : <></>}
                            </form>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={handleSubmit}
                            >
                              Modificar datos
                            </button>
                          </div>
                        </div>
                      )
                    }
                  </Formik>
                </div >
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}



