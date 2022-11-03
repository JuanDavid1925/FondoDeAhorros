import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const { documento, contrasena } = JSON.parse(body)
        const query = `SELECT contrasena FROM usuario WHERE documento = '${documento}'`
        const { rows } = await conn.query(query)

        if (rows.length === 0)
          return res.status(404).json({ estado: 404, mensaje: 'Usuario incorrecto' })

        if (contrasena === rows[0].contrasena_usuario)
          return res.status(200).json({ estado: 200, mensaje: 'Correcto' })

        return res.status(400).json({ estado: 400, mensaje: 'Contraseña incorrecta' })


      } catch ({ message }) {
        if (message === "Unexpected end of JSON input") {
          res.status(404).json(`Error 404: Page not found`)
        }
        else {
          res.status(409).json(message)
        }

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break

  }

}