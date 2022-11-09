import { useRouter } from 'next/router'

export default function aviso() {
    const router = useRouter()
    return (

        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(./inicio_captura.png)' }} id="modal-id">
            <div className="absolute bg-black opacity-80 inset-0 z-0" />
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                {/*content*/}
                <div className>
                    {/*body*/}
                    <div className="text-center p-10 flex-auto justify-center">
                        <img
                            src="./icono_usuario.png"
                            alt=""
                            className="ml-40 h-20 w-20 object-cover object-center"
                        />
                        <h2 className="text-xl font-bold py-4 ">¿Cómo deseas registrarte?</h2>
                        <p className="text-sm text-gray-500 px-8">Elige si quieres registrarte como asociado o como cliente</p>
                    </div>
                    {/*footer*/}
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button
                            onClick={() => router.push('/registro_asociado')}
                            className="mb-2 md:mb-0 bg-indigo-500 border border-transparent-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-indigo-200">Asociado</button>
                        <button
                            onClick={() => router.push('/registro_cliente')}
                            className="mb-2 md:mb-0 bg-indigo-500 border border-transparent-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-indigo-200">Cliente</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

