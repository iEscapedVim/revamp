import React from 'react';
import ScrollBaseAnimation from '@comps/core/marquee.tsx';

const randomCodeSnippets = [
  "const greet = (name) => console.log(`Hello, ${name}!`);",
  "function multiply(x, y) { return x * y; }",
  "const fibonacci = n => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));",
  "let index = 0; do { index++; } while (index < 3);",
  "const E = 2.71828; const x = 2; const exp = Math.pow(E, x);",
  "const isEven = num => num % 2 === 0;",
  "const randomBoolean = () => Math.random() >= 0.5;",
  "const helloWorld = () => console.log('Hello, world!');",
  "function sum(a, b) { return a + b; }",
  "const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));",
  "let count = 0; while (count < 5) { count++; }",
  "const PI = 3.14159; const radius = 5; const area = PI * radius * radius;",
];

function getRandomCode() {
  const randomIndex = Math.floor(Math.random() * randomCodeSnippets.length);
  return randomCodeSnippets[randomIndex];
}
function index() {
  return (
      <div className='grid place-content-center absolute mt-20'>
        <ScrollBaseAnimation delay={500} baseVelocity={-3} clasname='unselectable font-bold text-primary stroke-text tracking-[-0.07em] leading-[90%] my-3'>
          {getRandomCode()}
        </ScrollBaseAnimation>
        <ScrollBaseAnimation delay={500} baseVelocity={3} clasname='unselectable font-bold text-primary stroke-text tracking-[-0.07em] leading-[90%] my-3' >
          {getRandomCode()}        
        </ScrollBaseAnimation>
      </div>
  );
}

export default index;
