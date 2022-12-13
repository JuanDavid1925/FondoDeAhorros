import "tailwindcss/tailwind.css"
import { UserContextProvider } from '/src/context/userContext'
import "/src/styles/Home.module.css"

function MyApp({ Component, pageProps }) {
  return <> <UserContextProvider> <Component {...pageProps} /> </UserContextProvider> </>
}


export default MyApp
