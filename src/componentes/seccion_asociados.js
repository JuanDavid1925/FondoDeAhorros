import { useRouter } from 'next/router'

export default function Seccion_asociados() {
    const router = useRouter()
    return (
        <div className="top-25 relative overflow-hidden bg-white">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Sé parte de nuestros asociados
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Registrate y conoce los beneficios que tenemos para nuestros afiliados y su grupo familiar, a través de nuestro completo portafolio de servicios.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-8 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-60 w-80 overflow-hidden rounded-lg">
                                                <img
                                                    src="./asociados1.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-41 overflow-hidden rounded-lg">
                                                <img
                                                    src="./asociados2.jpg"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                onClick={() => router.push('/registro_asociado')}
                                className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 cursor-pointer"
                            >
                                Registrarse
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}