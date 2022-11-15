import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const bcryptjs = require('bcryptjs')

  switch (method) {
    case 'POST':
      try {
        const { documento, contrasena } = JSON.parse(body)
        const query = `SELECT nombres_usuario, apellidos_usuario, tipo_usuario, contrasena_usuario FROM usuarios WHERE documento_usuario = '${documento}';`
        const { rows } = await conn.query(query)

        if (rows.length === 0)
          return res.status(404).json({ estado: 404, mensaje: 'Documento incorrecto.' })

        if (bcryptjs.compareSync(contrasena, rows[0].contrasena_usuario)) {
          const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            nombres: rows[0].nombres_usuario,
            apellidos: rows[0].apellidos_usuario,
            tipo: rows[0].tipo_usuario
          }, 'DSII')

          const jwtCookie = serialize('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60,
            path: '/'
          })

          res.setHeader('Set-Cookie', jwtCookie)
          return res.status(200).json({ estado: 200, mensaje: 'Logueado.' })
        }

        return res.status(400).json({ estado: 400, mensaje: 'Contraseña incorrecta.' })

      } catch ({ message }) {
        if (message === "Unexpected end of JSON input") {
          res.status(404).json({ mensaje: `Error 404: Page not found.` })
        }
        else {
          res.status(409).json({ estado: 409, mensaje: message })
        }

      } finally {
        break
      }

    default:
      res.status(405).json({ estado: 405, mensaje: 'Método inválido.' })
      break

  }

}