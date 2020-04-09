const express = require('express');
const {
  getAllEmployee,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employee.controller');
const canAccess = require('../middleware/auth.middleware');

const employeeRoutes = express.Router();
/**
 * Express routes for Employee.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all employee. Evaluates to `/employee/`.
 */
employeeRoutes.get('/', canAccess, getAllEmployee).post('/', canAccess, createEmployee);

/**
 * Routes for a employee by id. Evalutes to `/employee/:employeeId`.
 */
employeeRoutes
  .get('/:employeeId', canAccess, getEmployee) // GET http://locahost:3001/employee/1
  .put('/:employeeId', canAccess, updateEmployee)
  .delete('/:employeeId', canAccess, deleteEmployee);

module.exports = employeeRoutes;