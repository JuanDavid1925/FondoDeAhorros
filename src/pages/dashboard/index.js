import { useContext, useEffect } from "react"
import { useRouter } from "next/Router"

import Context from "/src/context/userContext"
import useUser from "/src/hooks/useUser"

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