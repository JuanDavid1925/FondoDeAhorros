//import { jwtVerify } from "jose"
import { NextResponse } from "next/server"

export async function middleware(req) {
  if (req.nextUrl.pathname.includes('/api') && req.method === 'GET') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const jwtCookie = req.cookies.get('jwt')
  if (jwtCookie) {
    if (req.nextUrl.pathname.includes('/login')) {
      console.log(`Entra: ${jwtCookie}`);
      return NextResponse.redirect(new URL('/', req.url))
    }
    if (req.nextUrl.pathname.includes('/registro_asociado')) {
      console.log(`Entra: ${jwtCookie}`);
      return NextResponse.redirect(new URL('/', req.url))
    }
    if (req.nextUrl.pathname.includes('/registro_cliente')) {
      console.log(`Entra: ${jwtCookie}`);
      return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
  }
  /*
   * Páginas que requieran de estar logueado.
  else {
    if (req.nextUrl.pathname.includes('/dashboard')) {
      try {
        const { payload } = await jwtVerify(jwtCookie, new TextEncoder().encode('DSII'))

        return NextResponse.next()
      } catch (error) {
        console.error(error)
        return NextResponse.redirect(new URL('/', req.url))
      }
    }
  }
*/
  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/registro_asociado', '/registro_cliente', '/api/:path*']
}