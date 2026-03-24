import React, { useEffect, useState } from 'react'
import { href, Link, NavLink } from 'react-router-dom'
import { Button } from '../components/button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [menuopen, setmenuopen] = useState(false)
    const [scroll, setscroll] = useState(false)    

    useEffect(()=>{
        const handlescroll=()=>{
            if(window.scrollY>50) {
                setscroll(true)
            }else{
                setscroll(false)
                }
            }
        window.addEventListener('scroll',handlescroll)
        return ()=> window.removeEventListener('scroll',handlescroll)
    },[])

    const navLink=[
        {href :'#about',label:'About'},
        {href: '#project',label:"Projects"},
        {href:"#education",label:"Education"},
        {href:"#services",label:"Services"}
    ]

    return (
        <div className={`fixed top-0 left-0  ${scroll ? "glass-strong py-3":"bg-transparent py-5" } transition-all right-0  z-50`}>
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                <NavLink to="/"  className='font-bold text-xl tracking-tight hover:text-primary'>
                    𝔸𝕂<h1 className='text-primary'>.</h1>
                </NavLink>
                <div className='hidden md:flex items-center gap-1'>
                    <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
                        {
                            navLink.map((item,idx)=>{
                                return <a href={item.href} key={idx}
                                className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover: bg-surface'
                                >{item.label}</a>
                            })
                        }
                    </div>
                </div>
                <div className='hidden md:block'>
                    <Button size='sm'>Contact Me</Button>
                </div>
                <button className='md:hidden p-2 text-foreground cursor-pointer
                '
                onClick={()=>setmenuopen((prev)=>!prev)}>
                    {menuopen ? <X /> : <Menu size={24} />}
                </button>
            </nav>
            {menuopen && (
            <div className='md:hidden  glass-strong rounded-lg animate-fade-in'>
                <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                    {
                        navLink.map((item,idx)=>{
                            return <a href={item.href} key={idx}
                            onClick={()=>setmenuopen(false)}
                            className='text-lg text-muted-foreground hover:text-foreground py-2'>
                                {item.label}
                            </a>
                        })
                    }
                    <a href='#contact'><Button>Contact Me</Button></a>
                </div>
            </div>
            )}
        </div>
    )
}

export default Navbar