import cowsay from "cowsay";

const output = cowsay.say({
  text: "I'm a cowpiler plugin!"
});

console.log(`\n${output}`);
