import Head from "next/head"

import Seccion_prestamos from '/src/componentes/inicio/secciones/prestamos'
import Seccion_asociados from '/src/componentes/inicio/secciones/asociados'
import Seccion_clientes from '/src/componentes/inicio/Secciones/clientes'
import Seccion_ahorros from '/src/componentes/inicio/secciones/ahorros'
import Footer from '/src/componentes/inicio/Footer'
import Header from '/src/componentes/inicio/header'


export default function Home() {

  return (

    <div className="static overflow-hidden bg-white">
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>Fondo de ahorros y préstamos</title>
        <meta name="description" content={"Fondo de ahorros y préstamos"} />
      </Head>

      {/*Sección del header*/}
      <Header />


      {/*Seccion de asociados */}
      <Seccion_asociados />


      {/*Sección clientes*/}
      <Seccion_clientes />


      {/*Sección de ahorros */}
      <Seccion_ahorros />

      {/* Sección de préstamos*/}
      <Seccion_prestamos />


      {/*Sección del footer*/}
      <Footer />

    </div>
  )
}





