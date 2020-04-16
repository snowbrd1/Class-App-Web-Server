MySQL Database Schema
Tables for our database follow the example schemas below. Each table represents a dataset by which we can access via our API.

Note: not every table we create for an API needs to be exposed.

User Table Schema
Auth queries peform employee against the user table.

The user table will be represented by the following Schema:

Column	Description
id	Unique identifier for our user besides their name.
user_name	User's name
password	User's password (non-unique)
Example:

+----+-----------+----------+
| id | user_name | password |
+----+-----------+----------+
|  1 | admin     | 123456   |
|  2 | mworrell  | derp     |
+----+-----------+----------+
Employee Table Schema
The employee table will be represented by the following Schema:

Column	Description
id	Unique identifier for a user's employee.
name	Employee name 
position Employee Position
supervisor	Employee Supervisor
Example:

+----+--------------------------------+---------------------+-----------+
| id | name                           | position       | supervisor    |
+----+--------------------------------+---------------------+-----------+
|  1 | John                           |sales           | Jane          |
|  2 | Rich                           |sales           | Jane          |
|  3 | Dave                           |sales           | Jane          |
|  4 | Bill                           |manager|        | Bob           |
+----+--------------------------------+---------------------+-----------+