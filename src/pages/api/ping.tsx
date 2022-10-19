import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const response = await conn.query(`SELECT NOW();`)

    res.status(200).json(`Conectado a la base de datos. ${response.rows[0].now}.`)

  } catch (error) {
    res.status(404).json(`La base de datos no responde.`)
  }
}