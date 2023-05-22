// In this challenge, you will be taking a nested JSON object and formatting it into a more readable format.

// Consider the following data from an API having usernames, emails, passwords, date last logged in, first name, last name, age, password hint, and security question, and security answer:

const data = [
  {
    credentials: {
      username: 'johndoe',
      email: 'johndoe@gmail',
      password: 'password',
    },
    dateLastLoggedIn: '01/01/2020',
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    age: 30,
    security: {
    passwordHint: 'wordpass',
    securityQuestion: 'What is your favorite color?',
    securityAnswer: 'blue',
        },
    },
  {
    credentials: {
      username: 'janedoe',
      email: 'janedoe@gmail',
      password: 'midnight',
    },
    dateLastLoggedIn: '03/01/2020',
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    age: 31,
    security: {
    passwordHint: 'twelve',
    securityQuestion: 'What is your favorite color?',
    securityAnswer: 'purple',
        },
    },
  {
    credentials: {
      username: 'larrydavid',
      email: 'larrydavid@gmail',
      password: 'curb',
    },
    dateLastLoggedIn: '02/01/2020',
    name: {
      firstName: 'Larry',
      lastName: 'David',
    },
    age: 70,
    security: {
    passwordHint: 'hbo',
    securityQuestion: 'What is your favorite color?',
    securityAnswer: 'green',
        },
    },
  {
    credentials: {
      username: 'jerryseinfeld',
      email: 'jerryseinfeld@gmail',
      password: 'comedian',
    },
    dateLastLoggedIn: '01/01/2020',
    name: {
      firstName: 'Jerry',
      lastName: 'Seinfeld',
    },
    age: 65,
    security: {
    passwordHint: 'me',
    securityQuestion: 'What is your favorite color?',
    securityAnswer: 'blue',
        },
    },
  {
    credentials: {
      username: 'patrickstewart',
      email: 'patrickstewart@gmail',
      password: 'startrek',
    },
    dateLastLoggedIn: '01/01/2020',
    name: {
      firstName: 'Patrick',
      lastName: 'Stewart',
    },
    age: 80,
    security: {
    passwordHint: 'tng',
    securityQuestion: 'What is your favorite color?',
    securityAnswer: 'red',
        },
    },
];

// Write a function that takes in the data and returns a string with the following format:

// 'Hello John Doe, your username is johndoe, your email is johndoe@gmail, you last logged in on 01/01/2020.'

function dataParser(data) {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const {
      name: { firstName, lastName },
      credentials: { username, email },
      dateLastLoggedIn,
    } = data[i];
    result += `Hello ${firstName} ${lastName}, your username is ${username}, your email is ${email}, you last logged in on ${dateLastLoggedIn}. `;
  }
  return result;
}

console.log(dataParser(data))

