exports.CREATE_EMPLOYEE_TABLE = `CREATE TABLE IF NOT EXISTS test(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    hired DATETIME NULL,
    Position VARCHAR(20) NULL DEFAULT "pending",
    PRIMARY KEY (id)
    )`;
  
  exports.ALL_EMPLOYEE = `SELECT * FROM employee`;
  
  exports.SINGLE_EMPLOYEE = `SELECT * FROM employee WHERE id = ?`;
  
  exports.INSERT_EMPLOYEE = `INSERT INTO employee (name) VALUES (?)`;
  
  exports.UPDATE_EMPLOYEE = `UPDATE employee SET name = ?, position = ? WHERE id = ?`;
  
  exports.DELETE_EMPLOYEE = `DELETE FROM employee WHERE id = ?`;