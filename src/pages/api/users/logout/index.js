import { serialize } from 'cookie'
import { verify } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { jwt } = req.cookies

  try {
    if (!jwt) {
      return res.status(404).json({ estado: 404, mensaje: 'No está logueado.' })
    }

    verify(jwt, 'DSII')

    const jwtCookie = serialize('jwt', null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })

    res.setHeader('Set-Cookie', jwtCookie)

    return res.status(200).json({ estado: 200, mensaje: 'Logout.' })
  } catch ({ message }) {
    return res.status(401).json({ estado: 401, mensaje: message })
  }
}