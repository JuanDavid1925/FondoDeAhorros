import Header_asociado from "./header_asociado"

export default function Inicio_cliente() {
    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <Header_asociado nombre_seccion="Inicio" />
            <div className="px-6 pt-6 2xl:container">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                            <img src="./../saldo.jpg" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-40 lg:h-40" />
                            <div>
                                <h5 className="text-gray-600 dark:text-gray-300 text-center text-xl">Saldo pendiente</h5>
                                <div className="mt-2 flex justify-center gap-4">
                                    <h3 className="text-3xl font-bold text-gray-700">$3'658.923</h3>
                                </div>
                                <span className="block text-center text-gray-500">Comparado al mes pasado $4'132.753</span>
                            </div>
                            <table className="mt-6 -mb-2 w-full text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-2">Cuotas por pagar</td>
                                        <td className="text-gray-500">8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
