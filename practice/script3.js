function Circle(radious) {
  this.radious = radious;
  this.draw = function () {};
}

const circle = new Circle(10);
circle.color = "red";

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);
