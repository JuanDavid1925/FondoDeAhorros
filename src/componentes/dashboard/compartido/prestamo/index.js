import { withRouter } from "next/router"
import Link from "next/link"
import React from "react"

import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/dashboard/menuTabs"
import Header_asociado from "/src/componentes/dashboard/compartido/header_asociado"
import TabPagoPrestamo from "./tabPagoPrestamo"
import TabVerPrestamo from "./tabVerPrestamo"

const Formulario_prestamo = ({ router }) => {

    const {
        query: { tab }
    } = router

    const isTabOne = tab === "1" || tab == null
    const isTabTwo = tab === "2"

    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <Header_asociado nombre_seccion="Préstamos" />
            <TabContainer>
                <TabHead>
                    <Tab selected={isTabOne}>
                        <Link href={{ query: { tab: "1" } }}>
                            <a>Solicitar un préstamo</a>
                        </Link>
                    </Tab>
                    {/*<Tab selected={isTabTwo}>
                        <Link href={{ query: { tab: "2" } }}>
                            <a>Mis préstamos</a>
                        </Link>
    </Tab>*/}
                </TabHead>
                <TabBody>
                    {isTabOne &&
                        <TabPagoPrestamo />
                    }

                    {isTabTwo &&
                        <TabVerPrestamo />
                    }
                </TabBody>
            </TabContainer >
        </div >
    )
}

export default withRouter(Formulario_prestamo)