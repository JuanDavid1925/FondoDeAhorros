import React, { useCallback, useState } from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/menuTabs"
import { Formik } from 'formik';
import { useEffect } from "react"
import useUser from "../hooks/useUser";
import $ from "jquery"

const PanelModiUsuario = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"

  const { modificacionAsociado, modificacionCliente, getUser } = useUser()

  const [estadoModAsociado, setEstadoModAsociado] = useState()
  const [estadoModCliente, setEstadoModCliente] = useState()
  const [user, setUser] = useState()

  const handleSubmitAsociado = useCallback((data) => {
    console.log(data)
    //modificacionAsociado(data, setEstadoModAsociado)
  }, [modificacionAsociado, setEstadoModAsociado])

  const handleSubmitCliente = useCallback((data) => {
    modificacionCliente(data, setEstadoModCliente)
  }, [modificacionCliente, setEstadoModCliente])

  const cargarDatos = useCallback((documento, tipo) => {
    console.log(`documento: ${documento}, tipo: ${tipo}`)
    getUser({documento: documento, tipo: tipo}, setEstadoModCliente, setUser)
  }, [getUser, setUser, setEstadoModCliente])

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <TabContainer>
        <TabHead>
          <Tab selected={isTabOne}>
            <Link href={{ query: { tab: "1" } }}>
              <a>Modificar asociados</a>
            </Link>
          </Tab>
          <Tab selected={isTabTwo}>
            <Link href={{ query: { tab: "2" } }}>
              <a>Modificar clientes</a>
            </Link>
          </Tab>
        </TabHead>
        <TabBody>
          {isTabOne && <>
              <div>
                <Formik
                  initialValues=
                  {{
                    documento: "",
                    nombres: "",
                    apellidos: "",
                    telefono: "",
                    correo: "",
                    ocupacion: "",
                    ciudad: "",
                    direccion: "",
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
                                id="documentoA"
                                name="documento"
                                type="text"
                                placeholder="Ingrese el documento del asociado"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="form-group flex">
                              <div 
                                onClick={ 
                                  () => {
                                    const documento = $("#documentoA").val()
                                    cargarDatos(documento, "Asociado")
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
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Apellido(s)</label>
                              <input
                                onChange={handleChange}
                                id="apellidos"
                                name="apellidos"
                                type="text"
                                placeholder="Ingrese el nuevo apellido"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Teléfono</label>
                              <input
                                onChange={handleChange}
                                id="telefono"
                                name="telefono"
                                type="text"
                                placeholder="Ingrese el nuevo número de contacto"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Correo electrónico</label>
                              <input
                                onChange={handleChange}
                                id="correo"
                                name="correo"
                                type="email"
                                placeholder="Ingrese el nuevo correo electrónico"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Ocupación</label>
                              <input
                                onChange={handleChange}
                                id="ocupacion"
                                name="ocupacion"
                                type="text"
                                placeholder="Ingrese la nueva ocupación"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Ciudad</label>
                              <input
                                onChange={handleChange}
                                id="ciudad"
                                name="ciudad"
                                type="text"
                                placeholder="Ingrese la nueva ciudad"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Dirección de residencia</label>
                              <input
                                onChange={handleChange}
                                id="direccion"
                                name="direccion"
                                type="text"
                                placeholder="Ingrese la nueva dirección"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <br></br>
                            <div className="form-group flex ">
                              <button type="submit"
                                onClick={() => useEffect}
                                className="btn-primary flex items-center justify-between  px-6 py-5 text-sm tracking-wide bg-blue-400 capitalize rounded-md border-blue-400 border-2 text-white font-semibold">
                                <span><label className="mt-4 text-white-500 white:text-white-400 cursor-pointer">Modificar datos</label></span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )

                  }
                </Formik>
              </div >
            </>}
          {isTabTwo && <>
            <div >
              <Formik
                initialValues=
                {{
                  documento: "",
                  nombres: "",
                  apellidos: "",
                  telefono: "",
                  correo: "",
                  ocupacion: "",
                  ciudad: "",
                  direccion: "",
                }}


                onSubmit={handleSubmitCliente}

              >
                {
                  ({ handleChange, handleSubmit, errors, touched }) => (
                    <div>
                      <div className="px-8 mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                          <div>
                            <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Documento a buscar</label>
                            <input
                              onChange={handleChange}
                              id="documentoC"
                              name="documento"
                              type="text"
                              placeholder="Ingrese el documento del cliente"
                              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                          </div>
                          <div className="form-group flex">
                            <div
                              onClick={
                                () => {
                                  const documento = $("#documentoC").val()
                                  cargarDatos(documento, "Cliente")
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
                              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                          </div>
                          <div>
                            <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Apellido(s)</label>
                            <input
                              onChange={handleChange}
                              id="apellidos"
                              name="apellidos"
                              type="text"
                              placeholder="Ingrese el nuevo apellido"
                              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                          </div>
                          <div>
                            <label className="block font-medium mb-2 text-sm text-gray-600 dark:text-gray-700">Teléfono</label>
                            <input
                              onChange={handleChange}
                              id="telefono"
                              name="telefono"
                              type="text"
                              placeholder="Ingrese el nuevo número de contacto"
                              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                          </div>

                          <br></br>
                          <div className="form-group flex ">
                            <button type="submit"
                              onClick={() => useEffect}
                              className="btn-primary flex items-center justify-between  px-6 py-5 text-sm tracking-wide bg-blue-400 capitalize rounded-md border-blue-400 border-2 text-white font-semibold">
                              <span><label className="mt-4 text-white-500 white:text-white-400 cursor-pointer">Modificar datos</label></span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )

                }
              </Formik>
            </div >

          </>}
        </TabBody>
      </TabContainer>
    </div>
  )
}

export default withRouter(PanelModiUsuario)