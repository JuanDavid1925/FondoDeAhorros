import { jwtVerify } from "jose"
import { NextResponse } from "next/server"

export async function middleware(req) {
  if (req.nextUrl.pathname.includes('/api') && req.method === 'GET') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const jwtCookie = req.cookies.get('jwt')
  if (jwtCookie) {
    try {
      const { payload } = await jwtVerify(jwtCookie, new TextEncoder().encode('DSII'))

      if (req.nextUrl.pathname.includes('/')) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
      if (req.nextUrl.pathname.includes('/login')) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
      if (req.nextUrl.pathname.includes('/registro_asociado')) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
      if (req.nextUrl.pathname.includes('/registro_cliente')) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
      return NextResponse.next()

    } catch (error) {
      console.error(error)

      if (req.nextUrl.pathname.includes('/')) {
        return NextResponse.next()
      }
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
  /*
   * Páginas que requieran de estar logueado.
   */
  else {
    console.log(`Unlogged: ${jwtCookie}`);
    if (req.nextUrl.pathname.includes('/dashboard')) {
      return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/login', '/', '/registro_asociado', '/registro_cliente', '/api/:path*']
}