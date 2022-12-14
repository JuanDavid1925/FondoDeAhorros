import React, { useCallback, useState } from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/menuTabs"
import useUser from "/src/hooks/useUser";
import TabUsuarios from "./tabUsuarios";
import TabModiAsociado from "./tabModiAsociado";
import TabModiCliente from "./tabModiCliente";

const PanelModiUsuario = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  const isTabThree = tab === "3"

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
          <Tab selected={isTabThree}>
            <Link href={{ query: { tab: "3" } }}>
              <a>Usuarios registrados</a>
            </Link>
          </Tab>
        </TabHead>
        <TabBody>
          {isTabOne && <TabModiAsociado/>}
          {isTabTwo && <TabModiCliente/>}
          {isTabThree && <TabUsuarios />}
        </TabBody>
      </TabContainer>
    </div>
  )
}

export default withRouter(PanelModiUsuario)