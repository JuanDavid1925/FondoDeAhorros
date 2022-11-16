import { useRouter } from "next/Router"
import { useCallback, useContext, useEffect, useState } from "react"
import useUser from "../hooks/useUser"
import Context from '/src/context/userContext'

export default function Dashboard() {
  const { userData } = useContext(Context)
  const { getProfile } = useUser()
  const router = useRouter()

  useEffect(() => {
    console.log(userData);
    if (!userData) {
      getProfile()
    }
  }, [userData, getProfile])

  return (<></>)
}