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
        const query1 = `SELECT * FROM usuario, asociado WHERE usuario.documento = cliente.documento;`
        const query2 = `SELECT * FROM usuario, cliente WHERE usuario.documento = cliente.documento;`

        const { rows1 } = await conn.query(query1)
        const { rows2 } = await conn.query(query2)

        if (rows1.length + rows2.length === 0) {
          res.status(404).json(`Sin usuarios.`)
        }
        else {
          res.status(200).json(`${rows1}/n${rows2}`)
        }

      } catch (error) {
        console.error(error)
        res.status(504).json(`La base de datos no responde.`)

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}