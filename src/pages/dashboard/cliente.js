import { useCallback, useContext, useEffect, useState } from "react"
import { useRouter } from "next/Router"
import Head from "next/head"

import Formulario_prestamo from "/src/componentes/dashboard/compartido/prestamo"
import PanelAbonos from "/src/componentes/dashboard/compartido/panelAbonos"
import Inicio_cliente from "/src/componentes/dashboard/cliente/inicio"
import Context from "/src/context/userContext"
import useUser from "/src/hooks/useUser"


export default function Dashboard() {
	const router = useRouter()
	const { logout } = useUser()
	const [estado, setEstado] = useState()
	const { userData } = useContext(Context)
	const [mostrar_pagina, setEstadoPagina] = useState(1)

	useEffect(() => {
		if (estado === 1) {
			router.push("/")
		}
	}, [estado, router])

	const handleClick = useCallback(() => {
		logout(setEstado)
	}, [logout])

	const mostrarPagina = (numeroPagina) => {
		switch (numeroPagina) {
			case 1:
				return <Inicio_cliente />
			case 2:
				return <PanelAbonos />
			case 3:
				return <Formulario_prestamo />
			default:
				return <></>
		}
	}

	return (
		<div>
			<Head>
				<link rel="icon" href="/usuario.png" />
				<title>{(!userData) ? 'John Snow' : `${userData.nombres} ${userData.apellidos}`} </title>
				<meta name="description" content={"Dashboard cliente"} />
			</Head>
			<aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
				<div>
					<br></br>
					<br></br>
					<div className="mt-8 text-center">
						<img src="./../cliente_aliv1.jpg" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
						<h4 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-700">{(!userData) ? 'John Snow' : `${userData.nombres} ${userData.apellidos}`}</h4>
						<span className="mt-3 text-gray-400 dark:text-gray-400">Cliente</span>
					</div>
					<ul className="space-y-2 tracking-wide mt-8">
						<li>
							<a href="#" onClick={() => setEstadoPagina(1)} className={"px-4 py-3 flex items-center space-x-4 rounded-xl group " + ((mostrar_pagina === 1) ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : "text-gray-600")}>
								<svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
									<path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600" />
									<path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300" />
									<path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300" />
								</svg>
								<span
									onClick={() =>
										setEstadoPagina(1)}
									className={"group-hover:text-cyan-600" + ((mostrar_pagina === 1) ? "text-white group-hover:text-white" : "")}>Inicio</span>
							</a>
						</li>
						<li>
							<a href="#" onClick={() => setEstadoPagina(2)} className={"px-4 py-3 flex items-center space-x-4 rounded-xl group " + ((mostrar_pagina === 2) ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : "text-gray-600")}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
									<path className={"group-hover:text-cyan-600" + ((mostrar_pagina === 2) ? "text-white group-hover:text-white" : "")} strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span
									onClick={() =>
										setEstadoPagina(2)}
									className={"group-hover:text-cyan-600" + ((mostrar_pagina === 2) ? "text-white group-hover:text-white" : "")}>Pagos</span>
							</a>
						</li>
						<li>
							<a href="#" onClick={() => setEstadoPagina(3)} className={"px-4 py-3 flex items-center space-x-4 rounded-xl group " + ((mostrar_pagina === 3) ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : "text-gray-600")}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
									<path className={"group-hover:text-cyan-600" + ((mostrar_pagina === 3) ? "text-white group-hover:text-white" : "")} strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
								</svg>
								<span
									onClick={() =>
										setEstadoPagina(3)}
									className={"group-hover:text-cyan-600" + ((mostrar_pagina === 3) ? "text-white group-hover:text-white" : "")}>Préstamos</span>
							</a>
						</li>
						<li>
							<a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path className="fill-current text-gray-600 group-hover:text-cyan-600" fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
									<path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
								</svg>
								<span className="group-hover:text-cyan-600">Reportes</span>
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
			</aside>
			{
				mostrarPagina(mostrar_pagina)
			}
		</div>

	)

}
