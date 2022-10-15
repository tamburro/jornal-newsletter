import React from 'react'
import Acesso from '../assets/acesso.png'
import Colunistas from '../assets/colunistas.png'
import Clube from '../assets/clube.png'


const Benefits = () => {
  return (
    <div id='benefits' className='w-full  px-4 bg-white'>
      <div className='text-black'>
        <div className='mt-[-96px] w-full mx-auto text-center flex flex-col justify-center py-20'>
       
        <div className='flex justify-center items-center'>
        <p className='md:text-2xl text-xl font-bold text-black marcatexto uppercase'>Vantagens da assinatura O Globo</p>
            
        </div>
        
        </div>
    </div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6'>
    <div className='w-full flex flex-col p-4 my-4'>
            <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Acesso} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Acesso ilimitado ao site e app</h2>
            
            <div className='text-center font-medium'>
                <p className='py-1 mx-8'>Acesso ao Site, Jornal Digital, app O Globo Notícias, além do acervo digitalizado do Globo desde 1925.</p>
            </div>
            
        </div>
        <div className='w-full flex flex-col p-4 my-4'>
        <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Colunistas} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Os melhores colunistas do Brasil</h2>
            
            <div className='text-center font-medium'>
                <p className='py-1 mx-8'>Descubra, em primeira mão, o que só os nossos colunistas sabem.</p>
            </div>
            
        </div>
        <div className='w-full flex flex-col p-4 my-4'>
        <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Clube} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Clube O Globo com descontos</h2>
            
            <div className='text-center font-medium'>
                <p className='py-1 mx-8'>Até 50% de desconto em mais de 500 parceiros. Aproveite as vantagens exclusivas em gastronomia, entretenimento e bem-estar.</p>
            </div>
           
        </div>
    </div>
  </div>
    
    
  )
}

export default Benefits