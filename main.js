let person = require('./person.js');

let el = document.getElementById('content');
el.innerHTML = person.firstName + ' ' + person.lastName;
console.log();