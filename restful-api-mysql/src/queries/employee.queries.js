exports.CREATE_EMPLOYEE_TABLE = `CREATE TABLE IF NOT EXISTS test(
    id int NOT NULL AUTO_INCREMENT,
    Last Name varchar(255) NOT NULL,
    created_date DATETIME NULL,
    Position VARCHAR(10) NULL DEFAULT "pending",
    PRIMARY KEY (id)
    )`;
  
  exports.ALL_EMPLOYEE = `SELECT * FROM employee`;
  
  exports.SINGLE_EMPLOYEE = `SELECT * FROM employee WHERE id = ?`;
  
  exports.INSERT_EMPLOYEE = `INSERT INTO employee (last name) VALUES (?)`;
  
  exports.UPDATE_EMPLOYEE = `UPDATE employee SET name = ?, status = ? WHERE id = ?`;
  
  exports.DELETE_EMPLOYEE = `DELETE FROM employee WHERE id = ?`;