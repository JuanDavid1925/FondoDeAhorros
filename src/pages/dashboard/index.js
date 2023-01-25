import { useContext, useEffect } from "react"
import useUser from "../../hooks/useUser"
import Context from "/src/context/userContext"
import { useRouter } from "next/router"

export default function Dashboard() {
  const router = useRouter()
  const { userData } = useContext(Context)
  const { getProfile } = useUser()

  useEffect(() => {
    if (!userData) {
      getProfile()
    }
    else {
      (userData.tipo === 'Asociado') ?
        router.push('/dashboard/asociado') :
        (userData.tipo === 'Admin') ?
          router.push('/dashboard/admin') :
          router.push('/dashboard/cliente')
    }
  }, [userData, router, getProfile])

  return (<></>)
}