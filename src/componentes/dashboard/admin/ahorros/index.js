import React, { useCallback, useEffect, useState } from "react"
import { withRouter } from "next/router"
import { Formik } from "formik"
import Link from "next/link"

import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/dashboard/menuTabs"
import Header_asociado from "/src/componentes/dashboard/compartido/header_asociado"
import useSaves from "/src/hooks/useSaves"

const PanelAhorros = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"

  const [estadoMensual, setEstadoMensual] = useState()
  const [estadoManejo, setEstadoManejo] = useState()
  const [estadoTasa, setEstadoTasa] = useState()

  const { setCuotaMensual, setCuotaManejo, setTasaInteres } = useSaves

  const handleSubmit = useCallback(data => {
    if (data.cuotaMin !== "")
      setCuotaMensual(data.cuotaMin, setEstadoMensual)
    if (data.cuotaManejo !== "")
      setCuotaManejo(data.cuotaManejo, setEstadoManejo)
    if (data.tasaInteres !== "")
      setTasaInteres(data.tasaInteres, setEstadoTasa)
  }, [setCuotaMensual, setCuotaManejo, setTasaInteres])

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <Header_asociado nombre_seccion="Ahorros" />
      <TabContainer>
        <TabHead>
          <Tab selected={isTabOne}>
            <Link href={{ query: { tab: "1" } }}>
              <a>Configurar Ahorros</a>
            </Link>
          </Tab>
          <Tab selected={isTabTwo}>
            <Link href={{ query: { tab: "2" } }}>
              <a>Ahorros activos</a>
            </Link>
          </Tab>
        </TabHead>
        <TabBody>
          {isTabOne &&
            <React.Fragment>
              <div >
                <Formik
                  initialValues=
                  {{
                    cuotaMin: "",
                    cuotaManejo: "",
                    tasaInteres: ""
                  }}

                  onSubmit={handleSubmit}

                >
                  {
                    ({ handleChange, handleSubmit, errors, touched }) => (
                      <div>
                        <div className="px-4">
                          <br></br>
                          <label className="block mb-2 font-size:16 text-gray-600 dark:text-gray-700">Configure las cuotas con la que los asociados deben cumplir para hacer parte de un ahorro.</label>
                          <label className="block mb-2 font-size:16 text-gray-600 dark:text-gray-700">Además, recuerde que puede cambiar el interés de los préstamos de los asociados y clientes a inicios del año.</label>
                          <label className="block mb-2 font-size:16 text-gray-600 dark:text-gray-700">Inicialmente esta tasa es del 2% para el asociado, y del 2.5% para los clientes.</label>

                        </div>
                        <div className="px-4 ml-8 mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Cuota mínima</label>
                              <input
                                onChange={handleChange}
                                id="cuotaMin"
                                name="cuotaMin"
                                type="text"
                                placeholder="Ingrese la cuota mínima"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="form-group flex ">
                              <button type="submit"
                                onClick={() => useEffect}
                                className="btn-primary flex items-center justify-between  px-6 py-5 text-sm tracking-wide bg-gradient-to-r from-sky-600 to-cyan-400 capitalize rounded-md border-blue-300 border-2 text-white font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                <span><label className="ml-2 mt-4 text-white-500 white:text-white-400 cursor-pointer">Enviar</label></span>
                              </button>
                            </div>
                            <div></div>
                            <div></div>
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Cuota de manejo</label>
                              <input
                                onChange={handleChange}
                                id="cuotaManejo"
                                name="cuotaManejo"
                                type="text"
                                placeholder="Ingrese la cuota de manejo"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="form-group flex ">
                              <button type="submit"
                                onClick={() => useEffect}
                                className="btn-primary flex items-center justify-between  px-6 py-5 text-sm tracking-wide bg-gradient-to-r from-sky-600 to-cyan-400 capitalize rounded-md border-blue-300 border-2 text-white font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                <span><label className="ml-2 mt-4 text-white-500 white:text-white-400 cursor-pointer">Enviar</label></span>
                              </button>
                            </div>
                            <div></div>
                            <div></div>
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Tasa de interés</label>
                              <input
                                onChange={handleChange}
                                id="tasaInteres"
                                name="tasaInteres"
                                type="text"
                                placeholder="Ingrese la tasa de interés"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="form-group flex ">
                              <button type="submit"
                                onClick={() => useEffect}
                                className="btn-primary flex items-center justify-between  px-6 py-5 text-sm tracking-wide bg-gradient-to-r from-sky-600 to-cyan-400 capitalize rounded-md border-blue-300 border-2 text-white font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                <span><label className="ml-2 mt-4 text-white-500 white:text-white-400 cursor-pointer">Enviar</label></span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )

                  }
                </Formik>
              </div >
            </React.Fragment>}
          {isTabTwo && <React.Fragment>
            <div >
              <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Documento
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Fecha
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Monto
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            <tr>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      1234567890
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2023-01-01</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  500000
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      1006071857
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2022-12-04</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  200000
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      1006228012
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2022-11-23</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  155000
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      1005726182
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2023-01-04</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  324000
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      1006782594
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2023-01-11</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  612039
                                </p>
                              </td>
                            </tr>
                          </>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div >

          </React.Fragment>}
        </TabBody>
      </TabContainer>
    </div>
  )
}

export default withRouter(PanelAhorros)