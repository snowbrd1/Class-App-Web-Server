const express = require('express');
const {
  getAllEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employees.controller');
const canAccess = require('../middleware/auth.middleware');

const employeesRoutes = express.Router();
/**
 * Express routes for Employees.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all employees. Evaluates to `/employees/`.
 */
employeesRoutes.get('/', canAccess, getAllEmployees).post('/', canAccess, createEmployee);

/**
 * Routes for an employee by id. Evalutes to `/employees/:employeeId`.
 */
employeesRoutes
  .get('/:employeeId', canAccess, getEmployee) // GET http://locahost:3001/employees/1
  .put('/:employeeId', canAccess, updateEmployee)
  .delete('/:employeeId', canAccess, deleteEmployee);

module.exports = employeesRoutes;