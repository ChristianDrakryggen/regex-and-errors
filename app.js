//regular expressions

const lowerCase = /Hello/gi;

const message = "Hello I like to say hello Hello";

console.log(message.match(lowerCase));

const displayMessage = (username) => {
  const message = "Welcome my friend";
  if (!username) {
    console.log(message);
  } else {
    console.log(message.replace(/my friend/, username));
  }
};

displayMessage("Christian");

// regexp test method

const aRegExp = /Hello/;

const aString = "hello there!";

console.log(aRegExp.test(aString));

const testEmail = (email) => {
  if (/@/.test(email)) {
    alert("Valid");
  } else {
    alert("Not valid");
  }
};

testEmail("ilsdj@gidsjg");

//Errors

const checkSomething = (something) => {
  try {
    console.log(something);
  } catch (error) {
    console.log(error);
  }
};

checkSomething(1234);

const onlyNumbers = (number) => {
  try {
    if (typeof number !== "number") {
      throw "Inte ett nummer";
    } else {
      console.log("That's a number");
    }
  } catch (error) {
    console.log(error);
  }
};

onlyNumbers("blabla bla");

const isAnEmail = (email) => {
  const myExpression = /\S+@\S+\./;
  try {
    if (myExpression.test(email)) {
      alert("Your email is valid!");
    } else {
      throw "Not a valid email!";
    }
  } catch (kaffe) {
    alert(kaffe);
  }
};

isAnEmail("test@testtest");

//Scope

//global
const globalVariable = "Global";

//local
const logLocalVar = () => {
  const localVariable = "Local";
  console.log(localVariable);
  console.log(globalVariable);
};

//block
for (let i = 0; i < 5; i++) {
  //var blockVariable = "Block";
  const blockVariable = "Block";
  console.log(blockVariable);
  //console.log(localVariable);
}

//console.log(blockVariable);

//logLocalVar();

//Timing

//Run code once after a specified time in milliseconds

/*setTimeout(function () {
  alert("It has gone three seconds");
}, 3000);*/

//Run code over and over again with an interval set in milliseconds

/*
let myInterval = setInterval(() => {
  alert("Hello!");
}, 10000);

const stopInterval = () => {
  clearInterval(myInterval);
};
*/

let myInterval = setInterval(() => {
  alert("Hello!");
}, 1);

clearInterval(myInterval);
