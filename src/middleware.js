//import { jwtVerify } from "jose"
import { NextResponse } from "next/server"

export async function middleware(req) {
  if (req.nextUrl.pathname.includes('/api') && req.method === 'GET') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const jwtCookie = req.cookies.get('jwt')

  if (!jwtCookie) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/', req.url))
  }
  /*
   * Páginas que requieran de estar logueado.
    try {
      const { payload } = await jwtVerify(jwtCookie, new TextEncoder().encode('DSII'))
  
      return NextResponse.next()
    } catch (error) {
      console.error(error)
      return NextResponse.redirect(new URL('/', req.url))
    }
  */
}

export const config = {
  matcher: ['/login', '/api/:path*']
}