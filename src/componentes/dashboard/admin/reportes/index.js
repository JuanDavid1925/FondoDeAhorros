import Header_asociado from "/src/componentes/dashboard/compartido/header_asociado"
import React from 'react'
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab, Div } from "/src/componentes/dashboard/menuTabs"
import Link from "next/link"
import ReactDOM from 'react-dom'
import AnyChart from 'anychart-react'

const PanelReportes = ({ router }) => {

  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"

  const complexSettings = {
    width: 700,
    height: 450,
    type: 'column',
    data: "Ene,1\nFeb,3\nMar,4\nAbril,2\nMay,1\nJun,2\nJul,5\nAgos,2\nSep,3\nOctu,2\nNovi,5\nDici,1\n",/* Aquí se ingresan los datos del gráfico */
    title: 'Meses con más registros de asociados:'
  };

  const complexSettingsClientes = {
    width: 700,
    height: 450,
    type: 'column',
    data: "Ene,3\nFeb,1\nMar,1\nAbril,2\nMay,4\nJun,2\nJul,7\nAgos,2\nSep,3\nOctu,4\nNovi,1\nDici,2\n", /* Aquí se ingresan los datos del gráfico */
    title: 'Meses con más registros de clientes:'
  };

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <Header_asociado nombre_seccion="Reportes" />
      <TabContainer>
        <TabHead>
          <Tab selected={isTabOne}>
            <Link href={{ query: { tab: "1" } }}>
              <a>Reportes Asociados</a>
            </Link>
          </Tab>
          <Tab selected={isTabTwo}>
            <Link href={{ query: { tab: "2" } }}>
              <a>Reportes Clientes</a>
            </Link>
          </Tab>
        </TabHead>
        <TabBody>
          {isTabOne &&
            <React.Fragment>
              <div className="mt-10 bg-white px-12 pt-8 lg:mt-0 border-color-gray-600">
                <p className="text-xl font-medium">Reportes sobre los asociados</p>
                <p className="text-gray-400">Puede apreciar en los gráficos la información más importante sobre los asociados.</p>
                <br></br>
                <div>
                  <AnyChart
                    {...complexSettings}

                  />
                </div>
              </div >
            </React.Fragment>}
          {isTabTwo &&
            <React.Fragment>
              <div className="mt-10 bg-white px-12 pt-8 lg:mt-0 border-color-gray-600">
                <p className="text-xl font-medium">Reportes sobre los clientes</p>
                <p className="text-gray-400">Puede apreciar en los gráficos la información más importante sobre los clientes.</p>
                <br></br>
                <div>
                  <AnyChart
                    {...complexSettingsClientes}

                  />
                </div>
              </div >
            </React.Fragment>}
        </TabBody>
      </TabContainer>


    </div >

  )

}

export default withRouter(PanelReportes)