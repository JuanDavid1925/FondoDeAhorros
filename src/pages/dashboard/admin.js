import { useRouter } from "next/Router"
import { useCallback, useContext, useEffect, useState } from "react"
import useUser from "/src/hooks/useUser"
import Context from "/src/context/userContext"
import PanelModiUsuario from "../../componentes/panelModiUsuario"
import PanelAux from "../../componentes/panelAux"
import InicioAdmin from "../../componentes/inicioAdmin"

export default function Dashboard_Admin() {
  const router = useRouter()
  const { logout } = useUser()
  const [estado, setEstado] = useState()
  const { userData } = useContext(Context)
  const [panelAMostrar, setUsuarios] = useState(0)


  useEffect(() => {
    if (estado === 1) {
      router.push("/")
    }
  }, [estado, router])

  const handleClick = useCallback(() => {
    logout(setEstado)
  }, [logout])

  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <br></br>
          <br></br>
          <div className="mt-8 text-center">
            <img src="./../ivana.jpg" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
            <h4 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-800">{(!userData) ? 'Ivana Watts' : `${userData.nombres} ${userData.apellidos}`}</h4>
            <span className="mt-3 text-gray-600 dark:text-gray-400">Administrador</span>
          </div>
          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <a href="#" onClick={() => setUsuarios(0)} className={"px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group " + ((panelAMostrar === 0) ? "bg-gradient-to-r from-sky-600 to-cyan-400" : "")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path className={"fill-current group-hover:text-cyan-600 " + ((panelAMostrar === 0) ? "text-white group-hover:text-white" : "")} stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <span
                  onClick={() => setUsuarios(0)}
                  className={"group-hover:text-cyan-600 " + ((panelAMostrar === 0) ? "text-white group-hover:text-white" : "")}>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setUsuarios(1)} className={"px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group " + ((panelAMostrar === 1) ? "bg-gradient-to-r from-sky-600 to-cyan-400" : "")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path className={"fill-current group-hover:text-cyan-600 " + ((panelAMostrar === 1) ? "text-white group-hover:text-white" : "")} stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span
                  onClick={() => setUsuarios(1)}
                  className={"group-hover:text-cyan-600 " + ((panelAMostrar === 1) ? "text-white group-hover:text-white" : "")}>Usuarios</span>
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setUsuarios(2)} className={"px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group " + ((panelAMostrar === 2) ? "bg-gradient-to-r from-sky-600 to-cyan-400" : "")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path className={"fill-current group-hover:text-cyan-600 " + ((panelAMostrar === 2) ? "text-white group-hover:text-white" : "")} stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                <span
                  onClick={() => setUsuarios(2)}
                  className={"group-hover:text-cyan-600 " + ((panelAMostrar === 2) ? "text-white group-hover:text-white" : "")}>Ahorros</span>
              </a>
            </li>
            <li></li>
            <li>
              <a href="#" onClick={() => setUsuarios(3)} className={"px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group " + ((panelAMostrar === 3) ? "bg-gradient-to-r from-sky-600 to-cyan-400" : "")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path className={"fill-current group-hover:text-cyan-600 " + ((panelAMostrar === 3) ? "text-white group-hover:text-white" : "")} strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span
                  onClick={() => setUsuarios(3)}
                  className={"group-hover:text-cyan-600 " + ((panelAMostrar === 3) ? "text-white group-hover:text-white" : "")}>Reuniones</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setUsuarios(4)} className={"px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group " + ((panelAMostrar === 4) ? "bg-gradient-to-r from-sky-600 to-cyan-400" : "")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path className={"fill-current group-hover:text-cyan-600 " + ((panelAMostrar === 4) ? "text-white group-hover:text-white" : "")} fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path className={"fill-current group-hover:text-cyan-300 " + ((panelAMostrar === 4) ? "text-white group-hover:text-white" : "")} d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <span
                  onClick={() => setUsuarios(4)}
                  className={"group-hover:text-cyan-600 " + ((panelAMostrar === 4) ? "text-white group-hover:text-white" : "")}>Reportes</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button
            onClick={handleClick}
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path className="group-hover:text-cyan-600" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="group-hover:text-cyan-600">Cerrar sesión</span>
          </button>
        </div>
      </aside >
      {
        (panelAMostrar === 0) ?
          <InicioAdmin /> :
          (panelAMostrar === 1) ?
            <PanelModiUsuario /> : <PanelAux />
      }
    </div >

  )

}
