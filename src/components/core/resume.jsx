const ButtonHover2 = () => {
  return (
    <a href="/myResume.pdf" download className='group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-transparent hover:bg-gradient-to-l hover:from-primary hover:to-secondary font-medium text-white transition-all duration-500 hover:w-56 border-2 border-primary'>
        <div className='flex flex-row gap-2 font-bold whitespace-nowrap opacity-0 transition-all duration-400 group-hover:-translate-x-e group-hover:opacity-100'>
          Download My Resume  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path fill="currentColor" fillOpacity="0" strokeDasharray="20" strokeDashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"/><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/></path><path strokeDasharray="14" strokeDashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"/></path></g></svg>
        </div>
        <div className='absolute group-hover:hidden transition-all duration-700'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-primary">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path fill="currentColor" fillOpacity="0" strokeDasharray="20" strokeDashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5">
                <animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"/>
                <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"/>
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/>
              </path>
              <path strokeDasharray="14" strokeDashoffset="14" d="M6 19h12">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"/>
                </path>
            </g>
          </svg>
        </div>
    </a>
  );
};

export default ButtonHover2;
