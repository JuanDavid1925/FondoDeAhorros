export default function Registro() {
    return (

        <div className="bg-white dark:bg-gray-900" >
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: 'url(https://www.hoydinero.com/__export/1638494441194/sites/elimparcial/img/2021/12/02/fondo_de_ahorro_y_caja_de_ahorro_que_es_y_las_fiferencias_1.jpg_1345759582.jpg' }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">Fondo de Ahorros y Préstamos</h2>
                            <p className="max-w-x1 mt-3 text-gray-300">Gracias por formar parte de nuestro fondo. </p>
                            <p className="max-w-xl mt-3 text-gray-300">Es un placer poder brindarle lo mejor de nosotros.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">FAP</h2>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Ingrese a su cuenta</p>
                        </div>
                        <div className="mt-8">
                            <form>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Documento de identificación</label>
                                    <input type="email" name="email" id="email" placeholder="Ingrese su documento" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                                        <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">¿Olvidó su contraseña?</a>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Ingresar
                                    </button>
                                </div>
                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">¿No tiene una cuenta? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Regístrese</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
