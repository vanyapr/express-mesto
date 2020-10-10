const varName = 'test';

console.log(varName);

function foo(c) {
  console.log(c);
}

foo(varName);

class Testing {
  constructor(prop) {
    this._test = prop.test;
  }

  doStuff() {
    console.log(this._test);
  }
}

const test = new Testing('Vasiliy');

test.doStuff();
