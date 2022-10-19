import { Pool, Client } from 'pg'

let conn

if (!conn) {
  conn = new Pool({
    user: '',
    password: '',
    host: '',
    port: 5432,
    database: '',
    ssl: {
      rejectUnauthorized: false
    }
  })
}

export { conn }