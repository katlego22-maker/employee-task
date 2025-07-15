// Define the type
type Employee = {
  fullName: [string, string];
  age: number;
  department: string;
  skills: string[];
  isActive: boolean;
};

// Two employees
const emp1: Employee = {
  fullName: ["John", "Doe"],
  age: 30,
  department: "Engineering",
  skills: ["JavaScript", "Python", "C++"],
  isActive: true
};

const emp2: Employee = {
  fullName: ["Jane", "Smith"],
  age: 25,
  department: "Marketing",
  skills: ["SEO", "Social Media", "Content Creation"],
  isActive: false
};

// Function to log employee info
function logEmployee(emp: Employee) {
  console.log("--- Employee Details ---");
  console.log(`Name: ${emp.fullName[0]} ${emp.fullName[1]}`);
  console.log(`Age: ${emp.age}`);
  console.log(`Department: ${emp.department}`);
  console.log(`Skills: ${emp.skills.join(", ")}`);
  console.log(`Active: ${emp.isActive ? "Yes" : "No"}`);
  console.log("------------------------");
}

// Call the function
logEmployee(emp1);
logEmployee(emp2);
