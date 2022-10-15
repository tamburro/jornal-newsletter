import React from 'react'
import Mais from '../assets/mais.png'
import App from '../assets/app.png'


const Cards = () => {
  return (
    <div id='cards' className='w-full py-[10rem] px-10 bg-gray-100'>
        <div className='text-black'>
        <div className='mt-[-96px] w-full mx-auto text-center flex flex-col justify-center pb-20'>
       
        <div className='flex justify-center items-center'>
        <p className='md:text-2xl text-xl font-bold text-black marcatexto uppercase'>Conheça outras opções de assinatura</p>
            
        </div>
        
        </div>
    </div>
      <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
          <div className='w-[70%] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 gap-4 border mx-auto bg-gray-200'>
          <h2 className='text-2xl font-bold text-center py-8 uppercase'>Globo Digital</h2>
              <img className='w-full h-auto mx-auto bg-gray-200' src={App} alt="/" />
              
              <p className='text-center text-3xl'>R$<span className='text-7xl font-bold'>1</span><sup className='text-3xl font-bold'>,90</sup><br /></p>
              <p className='text-center font-bold'>Nos 3 primeiros meses<br /><span className='font-normal'>Depois, pague R$24,90/mês</span></p>
              <button className='bg-[#fff300] w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-[#080250] uppercase'>Assine agora</button>
              <div className='text-left font-medium'>
              <p className='py-2 border-b border-b-gray-300 mx-8 mt-4'> Acesso ilimitado ao site e app</p>
                  <p className='py-2 border-b border-b-gray-300 mx-8'>Os melhores colunistas do Brasil</p>
                  <p className='py-2 border-b border-b-gray-300 mx-8'>Acervo digital, com notícias desde 1925</p>
                  <p className='py-2 border-b mx-8'>Clube O Globo com descontos em mais de 500 parceiros</p>
              </div>
              
          </div>
          <div className='w-[70%] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 gap-4 border mx-auto bg-gray-200'>
          <h2 className='text-2xl font-bold text-center py-8 uppercase'>Globo Mais</h2>
              <img className='w-full h-auto  bg-gray-200' src={Mais} alt="/" />
              
              <p className='text-center text-3xl'>R$<span className='text-7xl font-bold'>3</span><sup className='text-3xl font-bold'>,90</sup><br /></p>
              <p className='text-center font-bold'>Nos 3 primeiros meses<br /><span className='font-normal'>Depois, pague R$34,90/mês</span></p>
              <button className='bg-[#fff300] w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3 text-[#080250] uppercase'>Assine agora</button>
            
              <div className='text-left font-medium'>
              <p className='py-2 border-b border-b-gray-300 mx-8 mt-4'> Acesso ilimitado ao site e app</p>
                  <p className='py-2 border-b border-b-gray-300 mx-8'>Os melhores colunistas do Brasil</p>
                  <p className='py-2 border-b border-b-gray-300 mx-8'>Acervo digital, com notícias desde 1925</p>
                  <p className='py-2 border-b border-b-gray-300 mx-8'>Clube O Globo com descontos em mais de 500 parceiros</p>
                  <p className='py-2 border-b mx-8'>Acesso às revistas da Editora Globo: Época, Época Negócios, GQ, Autoesporte, Marie Claire, Galileu, entre outras, no app Globo Mais</p>
                  

              </div>
              
          </div>
          
      </div>
    </div>
  );
};

export default Cards