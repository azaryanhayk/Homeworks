//task1
class Author {
    constructor(name, email, gender) {
      this.name = name;
      this.email = email;
      this.gender = gender
    }
    get email() {
      return this._email
    }
    set email(val) {
      this._email = val
    }
    toString() {
      return `fchghkjnj ${this.name} gfchhgjhj ${this.name}fdxgfcghjjh  ${this.gender}`
    }
  }
  class Book {
    constructor(author, title, price, quantity) {
      this.author = author;
      this.title = title;
      this.price = price;
      this.quantity = quantity;
    }
    get title() {
      return this._title;
    }
    set title(val) {
      this._title = val
    }
    getProfit() {
      return this.price * this.quantity;
    }
    toString() {
      return `fyguj ${this.price} ftcfyuguihhoiijnojk ${this.quantity}`
    }
  }
  //task2
  class Account {
    constructor(id, name, balance) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
    get id() {
      return this._id
    }
    get name() {
      return this._name
    }
    get balance() {
      return this._balance
    }
    set name(name1) {
      this._name = name1
    }
    set balance(newBalance) {
      this._balance = newBalance
    }
    credit(amount) {
      this.balance += amount;
      return this.balance;
    }
    debit(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        return "Amount exceeded balance";
      }
    }
    transferTo(anotherAcc, amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        anotherAcc.balance += amount;
      } else {
        return "Amount exceeded balance";
      }
    }
    static IdentifyAccounts(firstAcc, secondAcc) {
      let result = false
      for (let key in firstAcc) {
        if (Object.keys(firstAcc).length !== Object.keys(secondAcc).length) {
          return result
        }
        if (firstAcc[key] === secondAcc[key]) {
          result = true
        } else {
          result = false
        }
      }
      return result
    }
  }
  //task3
  class Person {
    constructor(firstName, lastName, gender, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.age = age;
    }
    get firstName() {
      return this._firstName;
    }
  
    set firstName(value) {
      this._firstName = value;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    set lastName(value) {
      this._lastName = value;
    }
    get gender() {
      return this._gender;
    }
  
    set gender(value) {
      this._gender = value;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      this._age = value;
    }
    toString() {
      return `gfxcgychg ${this.name} ewdwguwvbwid ${this.lastname} `
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
      super(firstName, lastName, gender, age);
      this.program = program;
      this.year = year;
      this.fee = fee;
      this.exams = {};
    }
    get year() {
      return this._year;
    }
  
    set year(value) {
      this._year = value;
    }
  
    get fee() {
      return this._fee;
    }
  
    set fee(value) {
      this._fee = value;
    }
  
    get program() {
      return this._program;
    }
    toString() {
      return `cyukkihhoi ${this.year} yfwuwihodpwkkdpkwdk`
    }
  }
  class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
      super(firstName, lastName, age, gender);
      this.program = program;
      this.pay = pay;
    }
  
    get pay() {
      return this._pay;
    }
  
    set pay(value) {
      this._pay = value;
    }
  
    get program() {
      return this._program;
    }
  
    set program(value) {
      if (typeof value === "string") this._program = value;
    }
  
    toString() {
      return `asdasdasdasd ${this.pay}`
    }
  }