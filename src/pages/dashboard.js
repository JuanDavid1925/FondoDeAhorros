import { useContext, useEffect } from "react"
import useUser from "../hooks/useUser"
import Context from '/src/context/userContext'

export default function Dashboard() {
  const { userData } = useContext(Context)
  const { getProfile } = useUser()

  useEffect(() => {
    console.log(userData);
    if (!userData) {
      getProfile()
    }
  }, [userData, getProfile])

  return (
    (!userData) ?
      <></> :
      (userData.tipo === 'Asociado') ?
        <h1>Página Asociado</h1> :
        (userData.tipo === 'Admin') ?
          <h1>Página Admin</h1> :
          <h1>Página Cliente</h1>
  )
}