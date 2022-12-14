import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/menuTabs"
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useCallback, useContext, useEffect, useState } from "react"

const PanelTarjeta = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <h5 className="px-6 py-2 text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl md:text-4xl">Pagos</h5>
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
              <div >
                <Formik
                  initialValues=
                  {{

                  }}

                  onSubmit={fields => {
                    handleSubmit(fields)
                  }}

                >
                  {
                    ({ handleChange, handleSubmit, errors, touched }) => (
                      <div>

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
      </TabContainer>
    </div>
  )
}

export default withRouter(PanelTarjeta)