
DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;



Create Table department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);



Create Table role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) References department(id) on delete cascade
);


Create Table employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) UNIQUE NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
        CONSTRAINT fk_role FOREIGN KEY (role_id) References role(id),
    manager_id INT,
    CONSTRAINT fk_employee FOREIGN KEY (manager_id) References employee(id) on delete set null
);


