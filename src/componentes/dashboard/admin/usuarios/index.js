import { withRouter } from "next/router"
import Link from "next/link"
import React from "react"

import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/dashboard/menuTabs"
import TabModiAsociado from "/src/componentes/dashboard/admin/usuarios/tabs/modiAsociado"
import TabModiCliente from "/src/componentes/dashboard/admin/usuarios/tabs/modiCliente"
import TabUsuarios from "/src/componentes/dashboard/admin/usuarios/tabs/tabUsuarios"
import Header_asociado from "/src/componentes/dashboard/compartido/header_asociado"

const PanelModiUsuario = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  const isTabThree = tab === "3"

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <Header_asociado nombre_seccion="Usuarios" />
      <TabContainer>
        {/*<TabHead>
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
          <Tab selected={isTabThree}>
            <Link href={{ query: { tab: "3" } }}>
              <a>Usuarios registrados</a>
            </Link>
          </Tab>
        </TabHead>*/}
        {/*
        <TabBody>
          {isTabOne && <TabModiAsociado />}
          {isTabTwo && <TabModiCliente />}
          {isTabThree && <TabUsuarios />}
        </TabBody>*/}
        <TabUsuarios />
      </TabContainer>
    </div>
  )
}

export default withRouter(PanelModiUsuario)