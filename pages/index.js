import AboutMe from '../components/about-me'
import Projects from '../components/projects'
import Blog from '../components/blog'
import Footer from '../components/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container max-w-2xl mx-auto'>
        <p className='flex flex-wrap text-[#FFFF00] text-4xl font-medium' style={{fontFamily: 'Kong', textShadow: '2px 2px #737373'}}>rotten <Image src='/static/favicon.png' alt='rotten . egg' width={100} height={50} className='px-4' /> egg</p>
        <p className='text-[#737373] text-base font-light mt-14'>WELCOME — to my corner of the internet ; / {'< 欢迎  >'}, {'{ Selamat Datang }'} ...</p>
        <AboutMe />
        <Projects />
        <Blog />
        <div className='mt-36'></div>
        <hr />
        <Footer />
    </div>
  )
}
