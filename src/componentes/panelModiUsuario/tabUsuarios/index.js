import { useEffect, useState } from "react"
import useUser from "/src/hooks/useUser"

export default function TabUsuarios() {
  const { getAllUsers } = useUser()

  const [usuarios, setUsuarios] = useState()
  const [estado, setEstado] = useState()

  useEffect(() => {
    if (!usuarios)
      getAllUsers(setEstado, setUsuarios)
  }, [getAllUsers, usuarios])

  return <>
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Documento
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rol
                  </th>
                </tr>
              </thead>
              <tbody>
                {!!usuarios && usuarios.map(usuario => (
                  <>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {usuario.nombres_usuario + " " + usuario.apellidos_usuario}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{usuario.documento_usuario}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {usuario.telefono_usuario}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {(usuario.tipo_usuario === "Asociado") ? <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-blue-500 opacity-50 rounded-full" />
                          <span className="relative">{usuario.tipo_usuario}</span>
                        </span> : (usuario.tipo_usuario === "Cliente") ? <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-green-500 opacity-50 rounded-full" />
                          <span className="relative">{usuario.tipo_usuario}</span>
                        </span> : (usuario.tipo_usuario === "Admin") ? <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-yellow-500 opacity-50 rounded-full" />
                          <span className="relative">{usuario.tipo_usuario}</span>
                        </span> : <></>}
                      </td>
                    </tr>
                  </>
                ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
}