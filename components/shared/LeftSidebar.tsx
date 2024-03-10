'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import HouseIcon from '@/assets/HouseIcon'
import { sidebarLinks } from '@/constants'

function LeftSidebar() {
  const [activeLink, setActiveLink] = React.useState('Home');

  return (
    <div className='leftsidebar'>
        <div className='flex flex-col'>
            <Link href={'/'} className='flex items-center gap-2'>
                <img
                    src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
                    width={54}
                    height={54} 
                    alt='avatar'
                    className='rouded-full object-cover w-[42px] h-[42px] md:w-[54px] md:h-[54px]'
                />
                <div className='hidden md:block'>
                    <h2 className='text-lg font-bold mb-'>Valentyn Pron</h2>
                    <h3 className='text-sm opacity-60'>Full stack developer</h3>
                </div>
            </Link>

            <nav className='flex flex-col gap-1 mt-10'>
                {
                    sidebarLinks.map((link) => (
                        <Link className={`flex px-3 justify-center md:justify-start selectButton ${link.label === activeLink && 'selectButtonActive'}`} href={link.route} key={link.label} onClick={() => setActiveLink(link.label)}>
                            <div className='w-[20px] h-[20px] md:w-[28px] md:h-[28px]'>
                                {link.icon}
                            </div>
                            <p className='text-lg font-semibold hidden md:block'>{link.label}</p>
                        </Link>
                    ))
                }
            </nav>
        </div>
    </div>
  )
}

export default LeftSidebar