import Link from 'next/link'

const Menu = () => {
    return (
        <div className='menu hidden w-full h-full mt-16 px-2.5'>
            <Link href='/'>
                Home
            </Link>
            <br />
            <Link href='/about-me'>
                About Me
            </Link>
        </div>
    );
}

export default Menu