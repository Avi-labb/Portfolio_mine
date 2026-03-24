import React from 'react'
import { Button } from '../components/button'
import { ArrowRight, ChevronDown, Download, Github, HdIcon, Instagram, Linkedin } from 'lucide-react'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "express",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Tailwind CSS",
    "Git",
    "Github Action",
    "Machine Learning"
  ]
  return (
    <section className='relative min-h-screen flex items-center'>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="background.jpg" alt="Backgorund" className='w-full h-full object-cover opacity-20' />
        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background'></div>
      </div>
      <div className='overflow-hidden inset-0 absolute pointer-events-none'>
        {[...Array(40)].map((i,idx) => {
          return <div key={idx} className='absolute w-1.5 h-1.5 rounded-full opacity-60 animate-float'
            style={{
              backgroundColor: "white",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        })}
      </div>
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12  items-center'>
          <div className='space-y-8'>
            <div className='animate-pulse animate-fade-in animation-delay-200'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-md font-semibold text-primary'>
                <h1 className=' w-2 h-2 bg-primary rounded-full animate-pulse' />Full Stack Developer | MERN Stack Enthusiast
              </div>
            </div>
            <div className='space-y-4'>
              <div className='text-5xl md:text-6xl lg:text-7xl leading-tight font-bold animate-fade-in animation-delay-300'>
                Hey I'm<h1 className="text-primary glow-text font-serif "> Avinash Kushwaha</h1>
                
              </div >
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in'>
                I am a Full Stack Developer focused on building modern, fast, and scalable web applications. I enjoy working across the entire stack—from designing responsive front-end interfaces to building secure and efficient back-end systems.
              </p>
            </div>
            <div className='flex gap-5 items-center animation-delay-400'>
              <Button className="cursor-pointer" size='lg' > <ArrowRight className='w-5 h-5 ' />Contact Me</Button>
              <button className="group relative rounded-full bg-red-400 px-8 py-4 flex items-center gap-3 
                   text-white font-medium transition-all duration-300 ease-out
                   hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(248,113,113,0.6)]
                   active:scale-95">

                <Download className="transition-transform duration-300 group-hover:-translate-y-1" />

                <h1>Download CV</h1>

              </button>
            </div>
            <div className="flex items-center animation-delay-500 gap-4">
              <h1 className="text-sm text-muted-foreground">Follow:</h1>

              {[
                { icon: Github, href: "https://github.com/Avi-labb" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "https://www.instagram.com/avi_a_k" },
              ].map((social, idx) => {
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 rounded-full bg-amber-50/10 hover:text-red-400 
                   transition-all duration-300 hover:scale-110"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>
          <div className='realtive animate-fade-in '>
            <div className='relative max-w-md mx-auto '>
              <div className='relative glass rounded-3xl p-2 backdrop-blur-xl bg-white/10 border border-white/20 glow-border '>
                <img src="Same2.jpg" alt="Avinash Khwaha"
                  className='w-full object-cover rounded-2xl aspect-[4/5]' />
                <div className='absolute  -bottom-4 -right-4 rounded-xl glass px-4 py-3 animate-title-float' >
                  <div className='flex items-center gap-2'>
                    <div className='w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse' />
                    <h1 className='font-medium text-sm'>
                      Available for work
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className=' mt-20 animate-fade-in animation-delay-600'>
          <p className='font-bold text-lg text-muted-foreground mb-6 flex items-center justify-center hover:text-primary '>TECHNOLOGY I WORK WITH</p>
          <div className='flex items-center justify-center  p-2'>
            <div className='flex gap-5 items-center justify-center  text-muted-foreground animate-skill' >
              {
                [...skills, ...skills].map((skill, idx) => {
                  return <div className='px-5 py-2 whitespace-nowrap bg-black/20 rounded-lg box-shadow hover:text-teal-50' key={idx}>
                    <h1>{skill}</h1>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className='absolute bottom-7 left-2/4 -translate-x-1/2'>

          <a href='#about'
            className='felx flex-col items-center gap-2 text-muted-foregroun'>
            <h1 className='tracking-tighter  text-xs uppercase '>Scroll</h1 >
            <ChevronDown className='w-6 h-6 ml-2 animate-bounce ' />
          </a>

        </div>
      </div>

    </section>

  )
}

export default Hero