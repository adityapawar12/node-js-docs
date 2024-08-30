function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: "Justine",
    age: 23,
};
var isJustineAnAdult = isAdult(justine);
// Display errors using typescript
// const justine: User = {
//   name: "Justine",
//   age: "Secret!",
// };
// const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");
console.log("Is justine an adult : ".concat(isJustineAnAdult));
