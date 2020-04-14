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
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  position varchar(255) NOT NULL,
  supervisor varchar(255) NOT NULL,
  PRIMARY KEY (id)
)`;

// Get every employee
exports.ALL_EMPLOYEES = `SELECT * FROM employees`;

// Get a single employee by id
exports.SINGLE_EMPLOYEE = `SELECT * FROM employees WHERE id = ?`;

/**
 * Insert follows syntax:
 * - INSERT INTO <table_name>(<col_name1>, <col_name3>, <col_name3>, ...)
 *    VALUES(<value1>, <value2>, <value3>, ...)
 *
 * Create a new employee in `employees` table where
 * - column names match the order the are in the table
 * - `?` allow us to use params in our controllers
 */
exports.INSERT_EMPLOYEE = `INSERT INTO employees (name) VALUES (?)`;

/**
 * Update follows syntax:
 * - UPDATE <table_name> SET <colum_name> = '<new_value>' WHERE <colum_name> = '<old_value>'
 *
 * NOTE: omitting `WHERE` will result in updating every existing entry.
 */
exports.UPDATE_EMPLOYEE = `UPDATE employees SET name = ?, position = ? WHERE id = ?`;

// Delete a employee by id
exports.DELETE_EMPLOYEE = `DELETE FROM employees WHERE id = ?`;