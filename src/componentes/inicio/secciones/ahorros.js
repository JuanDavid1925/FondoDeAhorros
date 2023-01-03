import { useRouter } from "next/router"

export default function Seccion_ahorros() {
  const router = useRouter()

  return (
    < div className="relative overflow-hidden bg-white" >
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empieza a ahorrar y asegura tu futuro
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Realiza tus ahorros de forma segura a través de nuestra página web o acercándote a nuestros puntos autorizados.
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
                  <div className="flex items-center space-x-0 lg:space-x-0">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-45 w-90 overflow-hidden rounded-lg">
                        <img
                          src="./ahorro2.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                onClick={() => {
                  router.push('/inicio/info/ahorros')
                }}
                className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
              >
                Consulta más información sobre ahorros.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
