type Person = {
  firstName: string;
  lastName: string;
};

let employee: Person = { firstName: "Ariella", lastName: "Faber" };
let boss: Person = { firstName: "Boss", lastName: "Man" };

console.log(`${employee.firstName} ${employee.lastName} works for ${boss.firstName} ${boss.lastName}`);
