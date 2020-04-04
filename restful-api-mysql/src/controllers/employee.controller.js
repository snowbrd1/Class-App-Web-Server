const con = require('../db-config');
const queries = require('../queries/employee.queries');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */

exports.getAllEmployee = function(req, res) {
  con.query(queries.ALL_EMPLOYEE, function(err, result, fields) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3001/employee/1
exports.getEmployee = function(req, res) {
  con.query(queries.SINGLE_EMPLOYEE, [req.params.employeeId], function(err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3001/employee/1
/**
 * POST request -
 * {
 *  name: 'An employee name'
 * }
 */
exports.createEmployee = function(req, res) {
  con.query(queries.INSERT_EMPLOYEE, [req.body.name], function(err, result) {
    if (err) {
      res.send(err);
    }
    console.log(result);
    res.json({ message: 'Number of records inserted: ' + result.affectedRows });
  });
};

// http://localhost:3001/employee/1
/**
 * PUT request -
 * {
 *  name: 'An employee name',
 *  state: 'completed'
 * }
 */
exports.updateEmployee = function(req, res) {
  con.query(
    queries.UPDATE_EMPLOYEE,
    [req.body.name, req.body.position, req.params.employeeId],
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

// http://localhost:3001/employee/1
exports.deleteEmployee = function(req, res) {
  con.query(queries.DELETE_EMPLOYEE, [req.params.employeeId], function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Employee is terminated.' });
  });
};