import React from 'react';
import ScrollBaseAnimation from '@comps/core/marquee.tsx';
import { NAME, FULL_TITLE } from '@consts/consts';
function index() {
  return (
    <div className='h-[500px] grid place-content-center'>
      <ScrollBaseAnimation delay={500} baseVelocity={-3} clasname='font-bold text-primary stroke-text tracking-[-0.07em] leading-[90%]' >
        I am {NAME}, I am a Web Developer.
      </ScrollBaseAnimation>
      <ScrollBaseAnimation delay={500} baseVelocity={3} clasname='font-bold text-primary stroke-text tracking-[-0.07em] leading-[90%]' >
        Also Known As {FULL_TITLE}, I Use Arch Btw.
      </ScrollBaseAnimation>
    </div>
  );
}

export default index;
