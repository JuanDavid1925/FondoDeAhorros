export default function Registro() {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")' }}>
                </div>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                            Sé parte de nuestros asociados.
                        </h2>
                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            Completa el formulario de registro y empieza a gozar de los beneficios de nuestro fondo de ahorros.
                        </p>

                        <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre(s) </label>
                                <input type="text" placeholder="Ingrese su(s) nombre(s)" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido(s)</label>
                                <input type="text" placeholder="Ingrese su(s) apellido(s)" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Documento de identificación</label>
                                <input type="text" placeholder="Ingrese tu documento" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Teléfono</label>
                                <input type="text" placeholder="Ingrese su número de contacto" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Correo electrónico</label>
                                <input type="email" placeholder="Ingrese su correo electrónico" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Ocupación</label>
                                <input type="text" placeholder="Ingrese su ocupación" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Fecha de nacimiento</label>
                                <input type="date" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Ciudad</label>
                                <input type="text" placeholder="Ingrese la ciudad en la que se encuentra" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Dirección de residencia</label>
                                <input type="text" placeholder="Ingrese su dirección" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                                <input type="password" placeholder="Ingrese una contraseña" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar contraseña</label>
                                <input type="password" placeholder="Ingrese nuevamente su contraseña" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide bg-blue-200 capitalize rounded-md border-blue-400 border-2 text-blue-600 hover:text-white font-semibold hover:shadow-[inset_20rem_0_0_0] hover:shadow-blue-400 duration-[400ms,800ms] transition-[color,box-shadow]">
                                <span><label className="mt-4 text-white-500 white:text-white-400">Registrarse</label></span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
