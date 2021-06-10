const Pool = require('pg').Pool
const pool = new Pool({
  user: 'nxdlimaoofkkmu',
  host: 'ec2-52-6-77-239.compute-1.amazonaws.com',
  database: 'dam6liqvdcltn5',
  password: 'f417629cf3a820f23100dc37e5d227be51c90ca56730bcd684c49afa86b66350',
  port: 5432,
})
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'Base1',
//     password: 'luks2018',
//     port: 5432,
// })

const getUsers = (request, response) => {
  try {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).json(results.rows)
    })
  } catch (error) {
    response.status(400).json(error)
  }
}

  module.exports = {
    getUsers,
  }