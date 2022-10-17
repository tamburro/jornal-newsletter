import Logo from'../assets/logo_topo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    

    
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        
        <img className='w-[25%] md:w-[20%] lg:w-[15%] h-auto' src={Logo} alt="/" />
        <ul className='flex'>
            
            
            <li className='p-4 hover:text-[#fff300] cursor-pointer'><Link to="benefits" spy={true} smooth={true} offset={50} duration={500}>Vantagens</Link></li>
            <li className='p-4 hover:text-[#fff300] cursor-pointer'><Link to="cards" spy={true} smooth={true} offset={50} duration={500}>Planos</Link></li>
            
            
        </ul>
       
    </div>
  )
}

export default Navbar