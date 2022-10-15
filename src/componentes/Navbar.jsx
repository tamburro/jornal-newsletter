import Logo from'../assets/logo_topo.png'

const Navbar = () => {
    

    
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        
        <img className='w-[25%] md:w-[20%] lg:w-[15%] h-auto' src={Logo} alt="/" />
        <ul className='flex'>
            
            
            <li className='p-4 hover:text-[#fff300]'><a href="#benefits">Vantagens</a></li>
            <li className='p-4 hover:text-[#fff300]'><a href="#cards">Planos</a></li>
            <li className='p-4'><button className='bg-[#fff300] rounded-md font-medium mx-auto px-2  text-[#080250] uppercase hover:brightness-125'><a href="https://jornaldigital.oglobo.globo.com/">Assine</a></button></li>
            
        </ul>
       
    </div>
  )
}

export default Navbar