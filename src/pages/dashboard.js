import { useContext, useEffect } from "react"
import useUser from "../hooks/useUser"
import Context from "/src/context/userContext"
import { useRouter } from "next/Router"

export default function Dashboard() {
  const router = useRouter()
  const { userData } = useContext(Context)
  const { getProfile } = useUser()

  useEffect(() => {
    console.log(userData);
    if (!userData) {
      getProfile()
    }
    else {
      (userData.tipo === 'Asociado') ?
        router.push('/dashboard_asociado') :
        (userData.tipo === 'Admin') ?
          router.push('/dashboard_admin') :
          router.push('/dashboard_cliente')
    }
  }, [userData, router, getProfile])

  return (<></>)
}