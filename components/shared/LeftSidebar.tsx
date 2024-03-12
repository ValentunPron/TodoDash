'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '@/assets/todo.svg';
import { sidebarLinks } from '@/constants'

function LeftSidebar() {
  const [activeLink, setActiveLink] = React.useState('Home');

  return (
    <div className='leftsidebar'>
        <div className='flex flex-col h-full'>
            <Link href='/' className='flex items-center gap-2 pb-12'>
                <Image 
                    src={Logo}
                    alt='logo'
                    width={42} height={42}
                />
                <h2 className='text-2xl font-bold hidden lg:block'>Todo Dash</h2>
            </Link>
            
            <nav className='flex flex-col gap-1'>
                {
                    sidebarLinks.map((link) => (
                        <Link className={`flex px-3 justify-center lg:justify-start selectButton ${link.label === activeLink && 'selectButtonActive'}`} href={link.route} key={link.label} onClick={() => setActiveLink(link.label)}>
                            <div className='w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]'>
                                {link.icon}
                            </div>
                            <p className='text-lg font-semibold hidden lg:block'>{link.label}</p>
                        </Link>
                    ))
                }
            </nav>

            <Link href={'/'} className='flex mt-auto items-center gap-2 pt-10'>
                <img
                    src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
                    width={54}
                    height={54} 
                    alt='avatar'
                    className='rouded-full object-cover w-[42px] h-[42px] lg:w-[54px] lg:h-[54px]'
                />
                <div className='hidden lg:block'>
                    <h2 className='text-lg font-bold mb-'>Valentyn Pron</h2>
                    <h3 className='text-sm opacity-60'>Full stack developer</h3>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default LeftSidebar