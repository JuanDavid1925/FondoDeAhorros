import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const query1 = `SELECT * FROM usuarios, asociados WHERE usuarios.documento_usuario = asociados.documento_asociado;`

        const res1 = await conn.query(query1)

        const query2 = `SELECT * FROM usuarios, clientes WHERE usuarios.documento_usuario = clientes.documento_cliente;`

        const res2 = await conn.query(query2)

        if (res1.rows.length + res2.rows.length === 0) {
          res.status(404).json(`Sin usuarios.`)
        }
        else if (res1.rows.length === 0) {
          res.status(200).json(res2.rows)
        }
        else if (res2.rows.length === 0) {
          res.status(200).json(res1.rows)
        }
        else {
          res.status(200).json([res1.rows, res2.rows])
        }

      } catch (error) {
        console.error(error.message)
        res.status(504).json(`La base de datos no responde.`)

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}