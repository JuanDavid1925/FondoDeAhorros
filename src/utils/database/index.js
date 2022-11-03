import { Pool, Client } from 'pg'

let conn

if (!conn) {
  conn = new Pool({
    user: 'cuatroymedia',
    password: 'uDbiyne8rGMP7Fi1pBp9c2a4qTnweHpz',
    host: 'dpg-cdi19sirrk06v9t4omkg-a.ohio-postgres.render.com',
    port: 5432,
    database: 'fap',
    ssl: {
      rejectUnauthorized: false
    }
  })
}

export { conn }
