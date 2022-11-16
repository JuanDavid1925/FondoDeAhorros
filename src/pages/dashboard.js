import { useContext, useEffect } from "react"
import Dashboard_Asociado from "../componentes/Dashboard_Asociado"
import Dashboard_Admin from "../componentes/dashboard_admin"
import useUser from "../hooks/useUser"
import Context from "/src/context/userContext"

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
        <Dashboard_Asociado /> :
        (userData.tipo === 'Admin') ?
          <Dashboard_Admin /> :
          <h1>Página Cliente</h1>
  )
}