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
name	Employee name (non-unique)
created_date	Employee's created date (non-unique)
status	Employee's status as pending or completed
Example:

+----+--------------------------------+---------------------+-----------+
| id | name                           | created_date        | status    |
+----+--------------------------------+---------------------+-----------+
|  1 | I'm the first employee!            | 2020-03-23 23:09:49 | completed |
|  3 | I'm replacing the second employee! | 2020-03-23 23:15:45 | pending   |
|  4 | I'm the third employee!            | 2020-03-23 23:20:04 | pending   |
|  6 | Make sure to post videos later | 2020-03-24 14:16:22 | pending   |
+----+--------------------------------+---------------------+-----------+