import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '@/assets/todo.svg';

function TopSidebar() {
  return (
    <section className="topbar">
            <div className="topbar_container">
                <Link href='/' className='flex items-center gap-2'>
                    <Image 
                        src={Logo}
                        alt='logo'
                        width={50} height={50}
                    />
                    <h2 className='text-xl font-bold'>Todo Dash</h2>
                </Link>

                <Link href={'/'} className='flex items-center gap-2'>
                    <img
                        src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
                        width={54}
                        height={54} 
                        alt='avatar'
                        className='rouded-full object-cover w-[42px] h-[42px] lg:w-[54px] lg:h-[54px]'
                    />
                </Link>
            </div>
        </section>
  )
}

export default TopSidebar