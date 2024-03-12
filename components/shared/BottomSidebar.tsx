import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BottomSidebar() {
  return (
    <section className="bottombar">
            <div className="bottombar_container">
                {
                    sidebarLinks.map((link) => {
                    
                    return (
                        <Link 
                            href={link.route} 
                            key={link.label} 
                        >
                            <div className='selectButton w-14 h-14'>
                                {link.icon}
                            </div>
                        </Link>
                    )
                    })   
                }
            </div>
        </section>
  )
}

export default BottomSidebar