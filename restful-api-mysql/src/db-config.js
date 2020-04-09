const mysql = require('mysql');
const { CREATE_USER_TABLE } = require('./queries/user.queries');
const { CREATE_EMPLOYEE_TABLE } = require('./queries/employee.queries');
const query = require('./utils/query');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || '';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'test';

// Create the connection with required details
module.exports = async () =>
  new Promise(async (resolve, reject) => {
    const con = mysql.createConnection({
      host,
      user,
      password,
      database,
    });

    const userTableCreated = await query(con, CREATE_USER_TABLE).catch(
      (err) => {
        reject(err);
      }
    );

    const employeeTableCreated = await query(con, CREATE_EMPLOYEE_TABLE).catch(
      (err) => {
        reject(err);
      }
    );

    if (!!userTableCreated && !!employeeTableCreated) {
      resolve(con);
    }
  });