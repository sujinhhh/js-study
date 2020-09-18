const text = document.querySelector("#text");
const intfloat = () => {
  let login = name === "kevin" ? "love you" : "Sorry";
  text.innerHTML = `<h1>${login}<h1>`;
};

intfloat();

function func(x) {
  x = "";
  x.name = "kevin";
}
let me = { name: "sujin" };
func(me);
console.log(me);

let i = 10;

i = i++;

console.log(i);

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

const array = [1, 2, 3, 4, 5];
const result = array.splice(0, 2);
console.log(result);
console.log(array);

const a = [1, 2, 3, 4, 5];
const b = a.slice(2, 5);
console.log(a);
console.log(b);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 40, false, 30),
  new Student("C", 23, true, 80),
  new Student("D", 26, false, 95),
  new Student("E", 77, true, 40),
];

const result2 = students.find((student) => student.score === 95);
const result3 = students.filter((student) => student.score < 50);
const result4 = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
const result6 = students.some((student) => student.score);
const result1 = students.sort(students.score);
const result7 = students.every((student) => student.score < 50);

const result5 = students.includes(students.score < 50) ? true : false;

const avg = students.reduce(
  (pre, curr) => pre + curr.score / students.length,
  0
);
console.log(avg);
setTimeout(() => console.log(result4), 2000);

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "deborah" && password === "1234") ||
          (id === "sujin" && password === "1234")
        ) {
          resolve(id);
        } else {
          reject(new Error("error"));
        }
      }, 2000);
    });
  }
  getRole(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "deborah") {
          resolve({ name: "deborah", role: "admin" });
        } else {
          reject(new Error("no access")), 1000;
        }
      });
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your Id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRole)
  .then((user) => alert(`hello ${user.name} ${user.role} `))
  .catch(console.log);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("devorah");
    reject(new Error("no name"));
  }, 2000);
});
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }).then((num) => console.log(num));
  });

const getSujin = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Sujin`), 1000);
  });
const getLove = (love) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${love} Loves`)), 1000);
  });
const getKevin = (kevin) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(` ${kevin} Kevin`), 1000);
  });

getSujin() //
  .then(getLove)
  .catch((error) => {
    return "like";
  })

  .then(getKevin)
  .then(console.log);
