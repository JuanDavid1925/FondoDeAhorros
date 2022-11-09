import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  return <> <UserContextProvider> <Component {...pageProps} /> </UserContextProvider> </>
}

export default MyApp
