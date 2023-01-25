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
    case 'POST':
      try {
        const query1 = `BEGIN;

        SELECT 
          id_reunion,
          fecha_reunion,
          hora_reunion,
          tipo_reunion,
          enlace_virtual
        FROM 
          reunion JOIN virtual
        ON 
          reunion.id_reunion = virtual.id_reunion_virtual
        ORDER BY 
          fecha_reunion ASC, 
          hora_reunion ASC, 
          tipo_reunion ASC,
          id_reunion ASC;

        SELECT 
          id_reunion,
          fecha_reunion,
          hora_reunion,
          tipo_reunion,
          lugar_presencial
        FROM 
          reunion JOIN presencial
        ON 
          reunion.id_reunion = presencial.id_reunion_presencial
        ORDER BY 
          fecha_reunion ASC, 
          hora_reunion ASC, 
          tipo_reunion ASC,
          id_reunion ASC;

        COMMIT;`

        const res1 = await conn.query(query1)

        console.log(res1[0])
        //console.log(res1[1])

        if (!res1[1].rowCount && !res1[2].rowCount) {
          return res.status(404).json({ estado: 404, mensaje: `Sin reuniones.` })
        }
        else if (!res1[1].rowCount) {
          return res.status(201).json({ estado: 201, mensaje: 'Reuniones encontradas.', datos: res1[2].rows })
        }
        if (!res1[2].rowCount) {
          return res.status(201).json({ estado: 201, mensaje: 'Reuniones encontradas.', datos: res1[1].rows })
        }
        else {
          return res.status(201).json({ estado: 201, mensaje: 'Reuniones encontradas.', datos: res1[1].rows.concat(res1[2].rows) })
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