import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div id='hero' className='text-white hero'>
        <div className='max-w-[800px] mt-[-96px] w-full h-[600px] mx-auto text-center flex flex-col justify-center'>
        
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-4'>JORNAL O GLOBO</h1>
        <div className='flex justify-center items-center'>
            <h2 className='md:text-5xl text-3xl font-bold py-4'>Pra você</h2>
            <Typed
            className='md:text-5xl text-3xl font-bold md:pl-4 pl-2 text-[#fff300]'
            strings={['ler.', 'refletir.', 'decidir.']} typeSpeed={100}
            backSpeed={140}
            loop
            />
        </div>
        <p className='text-xl font-bold text-white'>Apenas R$ 1,90/mês nos 3 primeiros meses.<br/> <span className='font-normal'>Depois, pague R$24,90/mês.</span></p>
        <button className='bg-[#fff300] w-[200px] rounded-md font-medium mt-6 mb-1 mx-auto py-3 text-[#080250] uppercase'>Assine agora</button>
        <p className='text-white'>*Cancele quando quiser.</p>
        </div>
        
    </div>
  )
}

export default Hero