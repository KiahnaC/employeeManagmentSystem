
var mysql= require('mysql')
var inquire = require('inquirer')
const connection = require('./Db/connection')



function start() {
  inquire.prompt([
    {
      type: "list",
      Message: "What are we doing?",
      name: 'userChoice',
      choices: [
        "View Employees",
        "Add Employee",
        "Add Role",
        "View All Employee Roles",
        "View All Departments",
        "Add Department",
        "Quit",
      ]
    
    }
  ])


.then(function(answers){
  console.log(answers)
 
 if(answers.userChoice === "View Employees"){
    viewEmployee();
    
  }
  else if(answers.userChoice === "View All Employee Roles"){
    viewAllRoles();

  }
  
  else if(answers.userChoice==="Update Employee Role") {
   
  }
  else if(answers.userChoice==="Add Department") {
   addDepartment();
  }
  else if(answers.userChoice === "View All Departments"){
  viewDepartments();

  }
  
  else if(answers.userChoice==="Add Employee"){
    addEmployee();

  }
  else if(answers.userChoice==="Add Role"){
    addRole();

  }
  else if(answers.userChoice==="Update Employee Role"){
    updateEmployeeRole();

  }
  else if(answers.userChoice ==="Quit") {
    connection.end();
    return
  }
});
};

  function addEmployee(){
    var employerOptions = [
      {
          type: "input",
          message: "What is the Employees Name",
          name: "firstName",
      },
      {
          type: "input",
          message: "What is the Employees Last Name?",
          name: "lastName",
      },
      {
          type: "input",
          message: "What is the Employees role id?",
          name: "roleId",
      },
    
      ];
      inquire.prompt(employerOptions)
      .then((answers)=>{
console.log(answers)
connection.query(`INSERT INTO employees.employee (first_name,last_name,role_id) VALUES ('${answers.firstName}','${answers.lastName}',${answers.roleId})`, function(error, results,fields){
start()
  })
    
      })
    
    
  }
  


function viewEmployee(){
  connection.query('SELECT * FROM employees.employee', function (error, results, fields){
console.table(results);
start()
  })
}
  start()

  function addRole(){
    var employerRoleOptions = [
      {
          type: "input",
          message: "What is the Employees' role",
          name: "role",
      },
      {
        type: "input",
        message: "What is the Employees' salary?",
        name: "roleSalary",
    },
    {
      type: "input",
      message: "What department does this role belong to?",
      name: "roleDepartment",
  },
    
    
      ];
      inquire.prompt(employerRoleOptions)
      .then((answers)=>{
console.log(answers)
connection.query(`    "SELECT role.title, role.salary, department.name FROM role, department WHERE department.id = role.department_id;('${answers.role}'`, function(error, results,fields){
start()
  })
    
      })
  }

  function viewAllRoles(){
    connection.query(`SELECT * FROM employees.role`, function (error, results, fields){
      console.table(results);
      start()
        })
      }

  function addDepartment(){
    var employerDepartmentOptions = [
      {
          type: "input",
          message: "What is the name of the Department?",
          name: "departmentName",
      },
    ]
    inquire.prompt(employerDepartmentOptions)
      .then((answers)=>{
console.log(answers)
connection.query(`INSERT INTO employees.department(title) VALUES ('${answers.departmentName}'`, function(error, results,fields){
start()
})
      });
  }
  function viewDepartments(){
    connection.query(`SELECT * FROM employees.department ORDER BY id asc`, function (error, results, fields){
      console.table(results);
      start()
        })
  }
