import React from 'react';
import ScrollBaseAnimation from '@comps/core/marquee.tsx';
import { NAME, FULL_TITLE } from '@consts/consts';

const randomCodeSnippets = [
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
