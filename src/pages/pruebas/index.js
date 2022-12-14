import { useCallback } from "react"
import useSaves from "../../hooks/useSaves"

export default function Home() {
  const { prueba } = useSaves()

  const handleClick = useCallback(() => {
    console.log("Click")
    prueba()
  }, [prueba])

  return (
    <>
      <button onClick={handleClick}>Hi</button>
    </>
  )
}