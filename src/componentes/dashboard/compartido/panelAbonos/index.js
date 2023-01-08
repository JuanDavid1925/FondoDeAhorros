import React, { useCallback, useEffect, useState } from "react"
import { withRouter } from "next/router"
import { Formik } from "formik"
import Link from "next/link"
import $ from "jquery"

import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/dashboard/menuTabs"
import Header_asociado from "/src/componentes/dashboard/compartido/header_asociado"
import useSaves from "/src/hooks/useSaves"
import PagoCuotaMensualExitoso from "./modalCuota"





const PanelAbonos = ({ router }) => {
  const { pagoMensual } = useSaves()
  const [showModal, setShowModal] = useState(false)
  const [estado] = useState()

  const handleClose = useCallback(() => { setShowModal(false) }, [])

  useEffect(() => {
    if (estado == 1) {
      setShowModal(true)
    }
  }, [estado])

  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"

  const handleSubmit = useCallback(() => {
    pagoMensual($("#cantidadPagar").val(), setEstado)
  }, [pagoMensual])

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <Header_asociado nombre_seccion="Pagos" />
      <TabContainer>
        <TabHead>
          <Tab selected={isTabOne}>
            <Link href={{ query: { tab: "1" } }}>
              <a>Pago de cuotas</a>
            </Link>
          </Tab>
          {/*<Tab selected={isTabTwo}>
            <Link href={{ query: { tab: "2" } }}>
              <a>Pago</a>
            </Link>
          </Tab>*/}
        </TabHead>
        <TabBody>
          {isTabOne &&
            <React.Fragment>
              <div >
                <Formik
                  initialValues=
                  {{
                    cardholder: "",
                    cardNo: "",
                    fechaDeExpiración: "",
                    code: "",
                    cantidadPagar: "",
                  }}

                  onSubmit={handleSubmit}

                >
                  {
                    ({ handleChange, handleSubmit, errors, touched }) => (
                      <div>
                        <div className="px-6 pt-6 2xl:container">
                          <div>
                            <div className="grid sm:px-10 lg:grid-cols-1 ">
                              <br></br>
                              <p className="text-gray-700 sm:text-xl">Aquí puede realizar el pago de la cuota mensual de su préstamo.</p>
                              <p className="text-gray-400">Complete el pago llenando la información de su método de pago.</p>
                              <label htmlFor="cardholder" className="mt-4 mb-2 block text-sm font-medium">Titular de la tarjeta</label>
                              <div className="relative">
                                <input type="text" id="cardholder" name="cardholder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Nombre completo del titular" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                  </svg>
                                </div>
                              </div>
                              <label htmlFor="cardNo" className="mt-4 mb-2 block text-sm font-medium">Número de tarjeta</label>
                              <div className="relative w-7/12 flex-shrink-0">
                                <input type="text" id="cardNo" name="cardNo" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                  <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                  </svg>
                                </div>
                              </div>
                              <label htmlFor="fechaDeExpiración" className="mt-4 mb-2 block text-sm font-medium">Fecha de expiración</label>
                              <input
                                id="fechaDeExpiración"
                                name="fechaDeExpiración"
                                type="date"
                                placeholder=""
                                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                              <label htmlFor="code" className="mt-4 mb-2 block text-sm font-medium">Código de seguridad</label>
                              <div className="relative">
                                <input type="text" id="code" name="code" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Ingrese el código de seguridad de su tarjeta" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                  </svg>
                                </div>
                              </div>
                              <label htmlFor="cantidadPagar" className="mt-4 mb-2 block text-sm font-medium">Cantidad a pagar</label>
                              <div className="flex flex-col sm:flex-row">
                                <div className="relative flex-shrink-0 sm:w-7/12">
                                  <input
                                    onChange={handleChange}
                                    type="text"
                                    id="cantidadPagar"
                                    name="cantidadPagar"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder=" "
                                    disabled
                                  />
                                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={
                                  setShowModal(true)
                                }
                                className="mt-4 mb-8 w- rounded-md bg-blue-500 px-6 py-3 font-medium text-white">Pagar</button>

                            </div>
                            {/*showModal && <PagoCuotaMensualExitoso onClose={() => handleClose()}></PagoCuotaMensualExitoso>*/}
                          </div>
                        </div>
                      </div>
                    )
                  }
                </Formik>
              </div >
            </React.Fragment>}
          {isTabTwo && <React.Fragment>
            <div >


            </div >

          </React.Fragment>}
        </TabBody>
      </TabContainer >
    </div >
  )
}

export default withRouter(PanelAbonos)