const connection = require('../db-config');
const {
  ALL_EMPLOYEE,
  SINGLE_EMPLOYEE,
  INSERT_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} = require('../queries/employee.queries');
const query = require('../utils/query');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */

// http://localhost:3001/employee
exports.getAllEmployee = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all employee
  const employee = await query(con, ALL_EMPLOYEE).catch((err) => {
    res.send(err);
  });

  if (employee.length) {
    res.json(employee);
  }
};

// http://localhost:3001/employee/1
exports.getEmployee = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all employee
  const employee = await query(con, SINGLE_EMPLOYEE, [req.params.employeeId]).catch(
    (err) => {
      res.send(err);
    }
  );

  if (employee.length) {
    res.json(employee);
  }
};

// http://localhost:3001/employee
/**
 * POST request -
 * {
 *  name: 'A employee name'
 * }
 */
exports.createEmployee = async (req, res) => {
  // verify valid token
  const decoded = req.user; // {id: 1, iat: wlenfwekl, expiredIn: 9174323 }

  // take result of middleware check
  if (decoded.id) {
    // establish connection
    const con = await connection().catch((err) => {
      throw err;
    });

    // query add employee
    const result = await query(con, INSERT_EMPLOYEE, [req.body.name]).catch(
      (err) => {
        res.send(err);
      }
    );
    console.log(result);

    if (result.affectedRows === 1) {
      res.json({ message: 'Added employee successfully!' });
    }
  }
};

// http://localhost:3001/employee/1
/**
 * PUT request -
 * {
 *  name: 'A employee name',
 *  state: 'completed'
 * }
 */
exports.updateEmployee = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query update employee
  const result = await query(con, UPDATE_EMPLOYEE, [
    req.body.name,
    req.body.status,
    req.params.employeeId,
  ]).catch((err) => {
    res.send(err);
  });

  if (result.affectedRows === 1) {
    res.json(result);
  }
};

// http://localhost:3001/employee/1
exports.deleteEmployee = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query delete employee
  const result = await query(con, DELETE_EMPLOYEE, [req.params.employeeId]).catch(
    (err) => {
      res.send(err);
    }
  );

  if (result.affectedRows === 1) {
    res.json({ message: 'Deleted successfully.' });
  }
};