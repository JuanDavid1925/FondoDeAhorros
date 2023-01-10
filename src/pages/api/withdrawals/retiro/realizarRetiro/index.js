import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const {
    idSolicitud,
    documento,
    saldo
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const query1 = `BEGIN;

        UPDATE solicitudes
        SET
          estado_retiro = 0
        WHERE
          id_retiro = ${idSolicitud}
        RETURNING *;

        INSERT INTO transacciones (
          documento_asociado_transacciones,
          fecha_transacciones,
          descripcion_transacciones,
          monto_transacciones,
          tipo_transacciones
        )
        VALUES (
          '${documento}',
          NOW(),
          'retiro-${idSolicitud}.',
          -${saldo},
          'Retiro'
        )
        RETURNING *;

        COMMIT;`

        const resp = await conn.query(query1)

        if (!resp[0].rowCount || !resp[1].rowCount)
          return res.status(400).json({ estado: 400, mensaje: 'Error al realizar el retiro.' })

        return res.status(201).json({ estado: 201, mensaje: 'Retiro realizado con éxito.' })

      } catch ({ message }) {
        res.status(408).json({ estado: 408, mensaje: message })

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}