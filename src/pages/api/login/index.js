import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from 'src/utils/database/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const { documento, contrasena } = JSON.parse(body)

  switch (method) {
    case 'GET':
      try {
        const query = `SELECT contrasena FROM usuario WHERE documento = '${documento}'`
        const { rows } = await conn.query(query)

        if (rows.length === 0)
          return res.status(404).json({ estado: 404, mensaje: 'Usuario incorrecto' })

        if (contrasena === rows[0].contrasena_usuario)
          return res.status(200).json({ estado: 200, mensaje: 'Correcto' })

        return res.status(400).json({ estado: 400, mensaje: 'Contraseña incorrecta' })


      } catch (error) {
        res.status(409).json(error)

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break

  }

}