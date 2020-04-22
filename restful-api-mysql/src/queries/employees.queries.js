/**
 * Tables follow syntax:
 * - CREATE TABLE <table_name>(<column_name> <data_type> <options>, ...)
 *
 * Create a table called `employees` (case-insensitive), with
 * - id as an integer/number that can't have null values, auto-increment it
 * - name with a max of 255 characters, cannot have null values
 * - position with a max of 255 characters, cannot have null values
 * - supervisor with a max of 255 characters, cannot have null values
 *
 * NOTE: order is important.
 * - columns can have multiple options attached (take `id` column for example)
 * - id is always first (helps with inserting)
 * - defaults always specifed last (helps with inserting)
 */
exports.CREATE_EMPLOYEES_TABLE = `CREATE TABLE IF NOT EXISTS employees(
  employee_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  employee_name varchar(255) NOT NULL,
  position varchar(255) NOT NULL,
  supervisor varchar(255) NOT NULL,
  PRIMARY KEY (employee_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
)`;

// Get every employee
exports.ALL_EMPLOYEES = (userId) => `SELECT * FROM employees WHERE user_id = ${userId}`;

// Get a single employee by id
exports.SINGLE_EMPLOYEE = (userId, employeeId) =>
  `SELECT * FROM employees WHERE user_id = ${userId} AND employee_id = ${employeeId}`;

/**
 * Insert follows syntax:
 * - INSERT INTO <table_name>(<col_name1>, <col_name3>, <col_name3>, ...)
 *    VALUES(<value1>, <value2>, <value3>, ...)
 *
 * Create a new employee in `employees` table where
 * - column names match the order that are in the table
 * - `?` allow us to use params in our controllers
 */
exports.INSERT_EMPLOYEE = (userId, employeeName, position, supervisor) =>
  `INSERT INTO employees (user_id, employee_name, position, supervisor) VALUES (${userId}, ${employeeName}, ${position}, ${supervisor})`;

/**
 * Update follows syntax:
 * - UPDATE <table_name> SET <colum_name> = '<new_value>' WHERE <colum_name> = '<old_value>'
 *
 * NOTE: omitting `WHERE` will result in updating every existing entry.
 */
exports.UPDATE_EMPLOYEE = (userId, employeeId, newValues) =>
  `UPDATE employees SET ${newValues} WHERE user_id = ${userId} AND employee_id = ${employeeId}`;

// Delete a employee by id
exports.DELETE_EMPLOYEE = (userId, employeeId) =>
  `DELETE FROM employees WHERE user_id = ${userId} AND employee_id = ${employeeId}`;