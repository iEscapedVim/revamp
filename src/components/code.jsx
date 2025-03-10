import React, { useState, useEffect } from 'react';
import ScrollBaseAnimation from '@comps/core/marquee.tsx';

const codeSnippets = [
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

function Index() { // Capitalized component name for React conventions
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");

  useEffect(() => {
    const getRandomCode = () => {  // Moved the function inside useEffect
      const randomIndex = Math.floor(Math.random() * codeSnippets.length);
      return codeSnippets[randomIndex];
    };

    setCode1(getRandomCode());
    setCode2(getRandomCode());
  }, []);

  if (!code1 || !code2) { // Handle loading state
    return <div>Loading...</div>; // Important for hydration!
  }
  return (
    <div className='grid place-content-center absolute md:mt-20 -mt-[550px]'>
      <ScrollBaseAnimation delay={500} baseVelocity={-3} clasname='unselectable font-bold text-primary stroke-text tracking-[-0.07em] leading-[90%] my-3'>
        {code1}
      </ScrollBaseAnimation>
      <ScrollBaseAnimation delay={500} baseVelocity={3} clasname='unselectable font-bold text-primary stroke-text tracking-[-0.07em] leading-[90%] my-3' >
        {code2}
      </ScrollBaseAnimation>
    </div>
  );
}

export default Index;
