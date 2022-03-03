use employees;

INSERT INTO department
    (name)
VALUES
    ('Development'), ('Quality Assurance'), ('Human Resources'), ('Operations');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Development Lead', 150000, 1), ('Developer', 100000, 1),
    ('Lead Test Engineer', 150000, 2), ('Test Engineer', 100000, 2),
    ('HR Manager', 110000, 3), ('HR Representive', 80000, 3),
    ('Operations Lead', 140000, 4), ('Operations Engineer', 90000, 4);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Kevin', 'Devin', 1, NULL), ('Jena', 'Raymond', 2, 1), ('John', 'Johnas', 3, NULL),
    ('Drake', 'Khalid', 4, 3), ('Mary', 'Amy', 5, NULL), ('Rocko', 'Tina', 6, 5),
    ('David', 'Navi', 7, NULL), ('Taylor', 'Marrisa', 8, 7);