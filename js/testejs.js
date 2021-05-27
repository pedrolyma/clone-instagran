//  rest operator ...  //
//  ... array   arguments object
// nao funciona com arrow function

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

const sum = (a, b, ...rest) => {
    console.log(a, b, rest)  // 5 5 rest = 5 2 3
}

// spread operator  array para parametro da funcao//
// para string, arrays, objects e obj iteraveis e literal
// concat para concatenar 2 ou mais obj ou array  arr.concat(arr2)
// const arr3 = [...arr2, ...arr1, 1, 2, 3]
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);    
}
console.log(sum(5, 5, 5, 2, 3))

// destructuring //
var arr = [{ name: 'Apple', type: 'Fruit'}];
var [{ name }] = arr;
console.log(name);

function sum(arr) {
    return arr[0] + arr[1];
}
function sum([a, b] = []) {
    return a + b;
}
console.log(sum([5,5]));

// symbols é um identificador unico
const uniqueId = Symbol('Hello')
const arr = [1, 2, 3, 4];
for (let value of arr) {
    console.log(value)
}

const arr = [1, 2, 3, 4];
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {  // *[Symbol.iterator()]
        let i = 0;
        return {
            next: () => {
                i++
                return {
                    value: this.values[i -1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() { 
        for (var i = 0; i< this.values.length; i++) {
          yield this.values[i]
        }
    }
};

for (let value of obj) {
    console.log(value);
}
const arr2 = [...obj]

// generators   * na fun e yield pausa em cada execucao //
function* hello() {
    console.log('hello');
    yield 1;
    console.log('from');
    yield;
    console.log('function');
    yield;
}
const it = hello();
console.log(it.next());

// callbacks e promises //
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resulve('First data');
    }, 1000);
});

const doOtherTringPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resulve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => { 
    console.log(data);
    return doOtherTringPromise;
})
    .then(data2 => console.log(data2.split('')))  
    .catch(err => console.log("Ops", err));

    // promise em paralelo   race a tiver menor time executa//
Promise.all([doSomethingPromise(), doOtherTringPromise()]).then(data => { 
    console.log(data[0].split(''))
    console.log(data[1])
}).catch(err => { console.log(err);});

// fetch  request //
fetch('http://localhost:8080/data.json')
.then(responseStream => {
    if (responseStream.status === 200) {
        return responseStream.json();
    } else {
        throw new Error('Request error');
    }
})
.then(data => {
    console.log(data);
}).catch(err => { console.log('Erro ', err);
});

// async / await //
const asynctimer = () =>
new Promise((resulve, reject) => {
    setTimeout(() => {
        resulve(12345);
    }, 1000);
});
// promise ja resulvida //
const simpleFunc = async () => {
    const data = await asynctimer();
    return data;
}
simpleFunc()
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});

//eventemitter importar//

const EventEmitter = require('events');
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}
const users = new Users();
users.on('User logged', data => {
    console.log(data);
});
Users.userLogged({ user: 'Pedro Lima' });

// TDD //
// escrita do teste - escrita do codigo - refatoracao //

// BDD //
// integrar regras de negocios com linguagem de programacao //

// mocha //
// npm init - y - inicia //
// npm i --save-dev mocha - instala //
// emacs package.json // ira criar um script //

// chai //
// npm i --save-dev chai //

// sinon //
// npm i --save-dev sinon //
// ver se funcoes foram invocadas  inspionar a funcao //

// tratamentos de erros //
// precisa inicializar as const e let antes de 
try {
    console.log(name);
    const name = 'Pedro Lima';
    const myError = new Error('Custom message');  // mensagem customizada //
    throw myError; // dispara o erro //
} catch(err) {
    console.log('Error: ', err);
} finally {
    console.log('Keep going'); // continue //
}

// console - log warn error trace //
// console table array e objetos //
// console assert - condicao verdadeira //