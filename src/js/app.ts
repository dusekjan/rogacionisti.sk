import greet from './utils.js';

interface Example {
    id: number;
    name?: any;
}

const a: Example = {
    id: 1
};

console.log(a.id, a.name?.first);

console.log(greet('World'));
