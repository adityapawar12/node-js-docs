type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: "Justine",
  age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine);

// Display errors using typescript
// const justine: User = {
//   name: "Justine",
//   age: "Secret!",
// };
// const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");

console.log(`Is justine an adult : ${isJustineAnAdult}`);
