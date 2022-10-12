// Import stylesheets
import './style.css';
import { Stack } from './DS/Custom/stack.js';

const stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.peek());
console.log(stack.isEmpty());
