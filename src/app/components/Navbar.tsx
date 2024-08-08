import Image from 'next/image'
import Logo from '../../../public/assets/Logo.svg'
import User from '../../../public/assets/User.svg'
import Menu from '../../../public/assets/Menu.svg'

const navLinks = [
    {name: 'Feature'},
    {name: 'Pricing'},
    {name: 'Enterprise'},
    {name: 'Careers'}
];

export function Navbar(){
    return(
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg: mx-auto">
            <div className='flex items-center'>
                <Image src={Logo} alt="logo"/>

                <div className='hidden lg:flex pl-[72px] gap-x-[56px]'>
                    {navLinks.map((item, index) => (
                        <p className='text-violet-900 font-medium' key={index}>{item.name}</p>
                    ))}
                </div>
            </div>

            <div className='flex gap-x-5'>
                <p className='hidden lg:block font-medium text-violet-900 pr-[56px]'>Open an Account</p>
                <div className='flex items-center gap-x-2'>
                    <Image src={User} alt="User Profile"/>
                    <span className='hidden font-medium text-violet-800 lg:block'>Sign in</span>
                </div>
                <Image src={Menu} alt="Menu" className='lg:hidden'/>
            </div>
        </nav>
    )
}