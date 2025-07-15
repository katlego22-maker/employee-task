"use strict";
// Two employees
const emp1 = {
    fullName: ["John", "Doe"],
    age: 30,
    department: "Engineering",
    skills: ["JavaScript", "Python", "C++"],
    isActive: true
};
const emp2 = {
    fullName: ["Jane", "Smith"],
    age: 25,
    department: "Marketing",
    skills: ["SEO", "Social Media", "Content Creation"],
    isActive: false
};
// Function to log employee info
function logEmployee(emp) {
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
