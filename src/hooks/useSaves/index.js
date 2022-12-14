import { useCallback, useContext } from 'react'
import Context from '/src/context/userContext'

export default function useSaves() {
  const cargarDatosRetiro = useCallback(() => {
    const url = '/api/withdrawals/solicitudes'

    fetch(
      url,
      {
        method: 'POST'
      }
    )
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })

  }, [])

  const solicitarRetiro = useCallback((data, setEstado) => {
    const url = '/api/withdrawals/solicitudes'

    fetch(
      url,
      {
        method: 'GET'
      }
    )
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })

  }, [])

  const prueba = useCallback(() => {
    const url = '/api/pruebas/ping'

    fetch(
      url,
      {
        method: 'GET'
      }
    )
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })
  }, [])

  return { solicitarRetiro, prueba }
}