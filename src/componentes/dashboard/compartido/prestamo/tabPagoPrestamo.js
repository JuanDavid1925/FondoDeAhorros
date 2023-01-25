import { useCallback, useContext, useEffect, useState } from "react"
import { withRouter } from "next/router"
import { Formik } from 'formik'
import React from "react"
import $ from "jquery"

import Solicitud_retiro_exitoso from "/src/componentes/dashboard/asociado/retiro/modales/solicitud_retiro_exitosa"
import Context from '/src/context/userContext'
import useLoans from "/src/hooks/useLoans"
import useUser from "/src/hooks/useUser"

const TabPagoPrestamo = () => {
  const { userData } = useContext(Context)

  const { solicitarPrestamo } = useLoans()
  const { getProfile } = useUser()

  const [showModal, setShowModal] = useState(false)
  const handleClose = () => { setShowModal(false) }
  const [estado, setEstado] = useState()

  const handleSubmit = useCallback(data => {
    solicitarPrestamo(data, setEstado)
  }, [solicitarPrestamo])

  useEffect(() => {
    if (estado === 1) {
      setShowModal(true)
    }
  }, [estado])

  useEffect(() => {
    if (!userData) {
      getProfile()
    }
    else {
      $("#documento").val(userData.documento)
    }
  }, [userData, getProfile])

  return (
    <Formik
      initialValues=
      {{

      }}

      onSubmit={handleSubmit}

    >
      {
        ({ handleChange, handleSubmit, errors, touched }) => (
          <div className="px-6 pt-6 2xl:container">
            <div>
              <div className="grid sm:px-10 lg:grid-cols-1 ">
                <div className="mt-10 bg-white px-4 pt-8 lg:mt-0">
                  <p className="text-xl font-medium">Detalles del préstamo</p>
                  <p className="text-gray-400">Complete su solicitud rellenando la siguiente información.</p>
                  <label htmlFor="card-holder" className="mt-4 mb-2 block text-md text-sky-600 font-medium">Información personal</label>
                  <div className>
                    <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Documento de identificación</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="documento"
                        name="documento"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Número de documento"
                        disabled
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                      </div>
                    </div>
                    <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo electrónico</label>
                    <div className="relative">
                      <input
                        onChange={handleChange}
                        type="email"
                        id="correo"
                        name="correo"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@gmail.com"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                    </div>
                    <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Dirección</label>
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative flex-shrink-0 sm:w-7/12">
                        <input
                          onChange={handleChange}
                          type="text"
                          id="billing-address"
                          name="billing-address"
                          className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Dirección de residencia"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <img className="h-4 w-4 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" />
                        </div>
                      </div>
                      <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                        <option value="State">Ciudad</option>
                        <option value="State">cali</option>
                        <option value="State">Palmira</option>
                      </select>
                    </div>
                    <label htmlFor="card-holder" className="mt-4 mb-2 block text-md text-sky-600 font-medium">Referencias personales</label>
                    <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Nombre completo</label>
                    <div className="relative">
                      <input
                        onChange={handleChange}
                        type="text"
                        id="card-holder"
                        name="card-holder"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Nombre completo"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                      </div>
                    </div>
                    <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo electrónico</label>
                    <div className="relative">
                      <input
                        onChange={handleChange}
                        type="email"
                        id="correo_referencia_personal"
                        name="correo"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@gmail.com"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium">Dirección</label>
                        <div className="relative flex-shrink-0 sm:w-7/12">
                          <input
                            onChange={handleChange}
                            type="text"
                            id="billing-address"
                            name="billing-address"
                            className="w-full px-4 py-3 pl-11 mt-2 text-gray-700 placeholder-gray-400 outline-none shadow-sm border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-40"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <img className="h-4 w-4 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium">Teléfono</label>
                        <div className="relative flex-shrink-0 sm:w-7/12">
                          <input
                            onChange={handleChange}
                            type="number"
                            id="billing-address"
                            name="billing-address"
                            className="w-full px-4 py-3 pl-11 mt-2 text-gray-700 placeholder-gray-400 outline-none shadow-sm border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-40"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <label htmlFor="card-holder" className="mt-4 mb-2 block text-md text-sky-600 font-medium">Referencias laborales</label>
                    <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Nombre completo</label>
                    <div className="relative">
                      <input
                        onChange={handleChange}
                        type="text"
                        id="nombre_referencia_personal"
                        name="nombre"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Nombre completo"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                      </div>
                    </div>
                    <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo electrónico</label>
                    <div className="relative">
                      <input
                        onChange={handleChange}
                        type="email"
                        id="correo_referencia_laboral"
                        name="correo"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@gmail.com"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium">Dirección</label>
                        <div className="relative flex-shrink-0 sm:w-7/12">
                          <input
                            onChange={handleChange}
                            type="text"
                            id="billing-address"
                            name="billing-address"
                            className="w-full px-4 py-3 pl-11 mt-2 text-gray-700 placeholder-gray-400 outline-none shadow-sm border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-40"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <img className="h-4 w-4 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium">Teléfono</label>
                        <div className="relative flex-shrink-0 sm:w-7/12">
                          <input
                            onChange={handleChange}
                            type="number"
                            id="billing-address"
                            name="billing-address"
                            className="w-full px-4 py-3 pl-11 mt-2 text-gray-700 placeholder-gray-400 outline-none shadow-sm border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-40"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <label htmlFor="cantidad_retirar" className="mt-4 mb-2 block text-sm font-medium">Cantidad a pedir prestada</label>
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative flex-shrink-0 sm:w-7/12">
                        <input
                          onChange={handleChange}
                          type="number"
                          id="cantidad_prestamo"
                          name="cantidad_prestamo"
                          className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder=" "
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="mt-4 mb-8 w-full rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 px-6 py-3 font-medium text-white">Solicitar préstamo</button>
                </div>
                {showModal && <Solicitud_retiro_exitoso onClose={() => handleClose()}></Solicitud_retiro_exitoso>}
              </div>
            </div>
          </div>
        )
      }
    </Formik>
  )
}

export default withRouter(TabPagoPrestamo)