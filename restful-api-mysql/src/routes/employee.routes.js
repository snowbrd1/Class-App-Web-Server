const controllers = require('../controllers/employee.controller');
const express = require('express');

const employeeRoutes = express.Router();
/**
 * Express routes for Employee.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all employee. Evaluates to `/employee/`.
 */
employeeRoutes.get('/', controllers.getAllEmployee).post('/', controllers.createEmployee);

/**
 * Routes for a employee by id. Evalutes to `/employee/:employeeId`.
 */
employeeRoutes
  .get('/:employeeId', controllers.getEmployee) // GET http://locahost:3001/tasks/1
  .put('/:employeeId', controllers.updateEmployee)
  .delete('/:employeeId', controllers.deleteemployee);

module.exports = employeeRoutes;