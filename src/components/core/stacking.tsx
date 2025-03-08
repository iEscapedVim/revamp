'use client';
import { ReactLenis } from 'lenis/react';
export default function index(): JSX.Element {
  return (
    <ReactLenis root>

        <section className='text-white w-full'>
          <div className='flex justify-between px-16 relative'>
            <div className='grid justify-between gap-52 w-4/6'>

                <figure className='sticky top-32 h-48 place-content-center w-full py-6 grid gird-cols-1 md:grid-cols-9 mx-auto border-b-4 border-secondary bg-gradient-to-r from-primary to-secondary rounded-2xl px-8 gap-2 md:gap-8 hover:cursor-pointer'>
                    <div className="relative justify-center items-center flex px-0 w-fit h-full col-span-2">
                        <h3 className='text-5xl font-bold tracking-tight text-white'>
                          2016<br />2017
                        </h3>
                    </div>
                    <div className="relative text-start px-0 w-fit h-full col-span-6">
                        <h3 className='text-3xl font-bold tracking-tight text-white'>
                          Web Design Bootcamp
                        </h3>
                        <p className='text-base pt-2  text-gray-300 capitalize'>
                          Completed a comprehensive web design crash course at TNA, gaining proficiency in HTML, CSS, JavaScript, and the conversion of PSD designs into HTML.
                        </p>
                    </div>
                </figure>

                <figure className='sticky top-32 h-48 place-content-center w-full py-6 grid gird-cols-1 md:grid-cols-9 mx-auto border-b-4 border-secondary bg-gradient-to-r from-primary to-secondary rounded-2xl px-8 gap-2 md:gap-8 hover:cursor-pointer'>
                    <div className="relative justify-center items-center flex px-0 w-fit h-full col-span-2">
                        <h3 className='text-5xl font-bold tracking-tight text-white'>
                          2019<br />2021
                        </h3>
                    </div>
                    <div className="relative text-start px-0 w-fit h-full col-span-6">
                        <h3 className='text-3xl font-bold tracking-tight text-white'>
                          High School Degree
                        </h3>
                        <p className='text-base pt-2  text-gray-300 capitalize'>
                          Completed High School From AIOU Pakistan.
                        </p>
                    </div>
                </figure>

                <figure className='sticky top-32 h-48 place-content-center w-full py-6 grid gird-cols-1 md:grid-cols-9 mx-auto border-b-4 border-secondary bg-gradient-to-r from-primary to-secondary rounded-2xl px-8 gap-2 md:gap-8 hover:cursor-pointer'>
                    <div className="relative justify-center items-center flex px-0 w-fit h-full col-span-2">
                        <h3 className='text-5xl font-bold tracking-tight text-white'>
                          2020<br />2024
                        </h3>
                    </div>
                    <div className="relative text-start px-0 w-fit h-full col-span-6">
                        <h3 className='text-3xl font-bold tracking-tight text-white'>
                          Project Manager/Senior Web Developer
                        </h3>
                        <p className='text-base pt-2  text-gray-300 capitalize'>
                          Led project execution at Arox Technologies, assigning tasks to team members and monitoring progress to ensure successful delivery.
                        </p>
                    </div>
                </figure>

                <figure className='sticky top-32 h-48 place-content-center w-full py-6 grid gird-cols-1 md:grid-cols-9 mx-auto border-b-4 border-secondary bg-gradient-to-r from-primary to-secondary rounded-2xl px-8 gap-2 md:gap-8 hover:cursor-pointer'>
                    <div className="relative justify-center items-center flex px-0 w-fit h-full col-span-2">
                        <h3 className='text-5xl font-bold tracking-tight text-white'>
                          2017<br />Present
                        </h3>
                    </div>
                    <div className="relative text-start px-0 w-fit h-full col-span-6 ms-6">
                        <h3 className='text-3xl font-bold tracking-tight text-white'>
                          Freelance Web Developer
                        </h3>
                        <p className='text-base pt-2  text-gray-300 capitalize'>
                          Leveraged freelance platforms and direct client relationships to deliver web design solutions to a diverse range of clientele.
                        </p>
                    </div>
                </figure>

            </div>
            <div className="ms-8 sticky top-0 h-screen grid place-content-center">
              <h3 className='text-4xl md:text-5xl lg:text-6xl text-neutral font-outfit font-bold'>My Story <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">So Far</span></h3>
            </div>
          </div>
        </section>

    </ReactLenis>
);}