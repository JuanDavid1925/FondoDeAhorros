import Head from "next/head";
import Footer from '../componentes/footer'
import Seccion_prestamos from '../componentes/seccion_prestamos'
import Seccion_ahorros from '../componentes/seccion_ahorros'
import Seccion_clientes from '../componentes/Seccion_clientes'
import Seccion_asociados from '../componentes/seccion_asociados'
import Header from '../componentes/header'


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





