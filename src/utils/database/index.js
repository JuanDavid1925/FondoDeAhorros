import { Pool, Client } from 'pg'

let conn

if (!conn) {
  conn = new Pool({
    user: 'btjdzrigxksxak',
    password: '9f9126610f76c25f08509b0ca3310080bfde22f56ce8c73b9477c29f698b9b46',
    host: 'ec2-54-173-237-110.compute-1.amazonaws.com',
    port: 5432,
    database: 'd89po3vila55fs',
    ssl: {
      rejectUnauthorized: false
    }
  })
}

export { conn }