/*-------------Завдання №1-------------*/
// let usersName = ['Mike','Bob','Nikola'];
// let users = {};

// console.log(usersName);

// [users.mike, users.bob, users.nikola] = usersName;
// console.log(users);

/*-------------Завдання №2-------------*/
// let salaries = {
//     "Mike": 1500,
//     "Bob": 1800,
//     "Nikola": 1700
// };

// function maxSalary(salaries) {
//     let salaryMax = 0;
//     let nameMax = '';
  
//     for (const [name, salary] of Object.entries(salaries)) {
//         if (salary > salaryMax) {
//             salaryMax = salary;
//             nameMax = name;
//         }
//     }
//     return nameMax;
// }

// console.log(maxSalary(salaries));

/*-------------Завдання №3-------------*/
let users = {mike: 'Mike', bob: 'Bob', nikola: 'Nikola'};

let {mike: userMike} = users;
let {bob: userBob} = users;
let {nikola: userNikola} = users;

console.log(userMike);
console.log(userBob);
console.log(userNikola);