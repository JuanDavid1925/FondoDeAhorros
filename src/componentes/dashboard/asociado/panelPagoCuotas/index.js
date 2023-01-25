import { useCallback, useEffect, useState } from "react"
import { withRouter } from "next/router"
import Link from "next/link"
import React from "react"
import $ from "jquery"

import Header_asociado from "/src/componentes/dashboard/compartido/header_asociado"
import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/dashboard/menuTabs"
import TabCuotaMensual from "./tabCuotaMensual"
import TabCuotaManejo from "./tabCuotaManejo"
import useSaves from "/src/hooks/useSaves"

const PanelPagoCuotas = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

      <Header_asociado nombre_seccion="Pagos" />
      <TabContainer>
        <TabHead>
          <Tab selected={isTabOne}>
            <Link href={{ query: { tab: "1" } }}>
              <a>Pago de cuota mínima</a>
            </Link>
          </Tab>
          <Tab selected={isTabTwo}>
            <Link href={{ query: { tab: "2" } }}>
              <a>Pago de cuota de manejo</a>
            </Link>
          </Tab>
        </TabHead>
        <TabBody>
          {isTabOne &&
            <React.Fragment>
              <TabCuotaMensual />
            </React.Fragment>}
          {isTabTwo && <React.Fragment>
            <TabCuotaManejo />
          </React.Fragment>}
        </TabBody>
      </TabContainer >
    </div >
  )
}

export default withRouter(PanelPagoCuotas)
