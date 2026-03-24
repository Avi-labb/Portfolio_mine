import { ArrowUpRight, Github } from 'lucide-react'
import React from 'react'

const Project = () => {
  const project = [
  {
    title: "Mistry e-commerce",
    description: "It is creation",
    image: "/",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "#",
    github: "#"
  }
]
  return (
    <section id='project' className='py-28 relative overflow-hidden'>
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-1/3 w-64 bg-primary/10 h-64 rounded-full blur-3xl' />
        <div className='container mx-auto px-6 relative z-10'>
         <div className='text-center mx-auto max-w-3xl mb-16'>
         <h1 className='text-primary/60 text-sm font-medium tracking-tighter uppercase'>Featured Work</h1>
         <div className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-primary/60'>Projects that
          <h1 className='font-serif italic font-normal text-white'>{" "} make an impact.</h1>
         </div >
         <p className='text-muted-foreground'>
          A selection of my recent work,from complex web application to innoative tools that solve real-world problems.
         </p>
         </div>
         <div className='grid md:grid-cols-2 gap-8'>
            {project.map((project,idx)=>{
               return <div key={idx} className='group glass rounded-2xl overflow-hidden md:row-span-1'
                style={{animationDelay:`${(idx+1)*100}ms`}}>
                <div className='relative overflow-hidden aspect-video'>
                  <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/>
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-5 h-5'/>
                    </a>
                    <a href={project.github}
                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                    >
                      <Github className='w-5 h-5'/>
                    </a>
                  </div>
                </div>
                <div className='p-6 space-y-4'>
                  <div className='flex items-start justify-between'>
                    <h3 className='text-xl font-semibold group-hover:text-primary'>{project.title}</h3>
                    <ArrowUpRight 
                    className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'
                    />
                  </div >
                  <p className='text-muted-foreground text-sm'>{project.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag,tagidx)=>(
                      <h1 
                      className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                      key={tagidx} >{tag}</h1>
                    ))}</div>
                </div>
                </div>
            })}
         </div>
         <div>
          <button>view Project</button>
         </div>
        </div>
    </section>
  )
}

export default Project