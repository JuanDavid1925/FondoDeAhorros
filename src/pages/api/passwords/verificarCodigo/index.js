import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const { codigo, documento, url } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const query = `
          SELECT contrasena_usuario
          FROM usuarios 
          WHERE documento_usuario = '${documento}' AND activo_usuario = true;`
        const res1 = await conn.query(query)

        if (!res1.rowCount)
          return res.status(404).json({ estado: 404, mensaje: 'Documento incorrecto.' })

        const bcryptjs = require('bcryptjs')

        if (bcryptjs.compareSync((codigo + res1.rows[0].contrasena_usuario), url)) {
          return res.status(200).json({ estado: 200, mensaje: 'Código verificado.' })
        }

        return res.status(400).json({ estado: 400, mensaje: 'Código incorrecto.' })

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