import React from 'react';
import ScrollBaseAnimation from '@comps/core/marquee.tsx';
import { NAME, FULL_TITLE } from '@consts/consts';
function index() {
  return (
      <div className='grid place-content-center'>
        <ScrollBaseAnimation delay={500} baseVelocity={-3} clasname='unselectable font-bold text-primary stroke-text tracking-[-0.07em] leading-[90%]' >
          I am {NAME}, I am also known as {FULL_TITLE}.
        </ScrollBaseAnimation>
        <ScrollBaseAnimation delay={500} baseVelocity={3} clasname='unselectable font-bold text-primary stroke-text tracking-[-0.07em] leading-[90%]' >
          I am a Web Developer, I make websites & stuff.
        </ScrollBaseAnimation>
      </div>
  );
}

export default index;
