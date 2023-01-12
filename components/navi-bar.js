import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
} from "@fortawesome/free-solid-svg-icons";


const NaviBar = () => {
    return (
        <nav className='navbar w-full flex justify-center p-5 desk-nav'>
            <Link className='right !ml-60 !mr-0' href='/about-me'>
                About Me
            </Link>
            <Link className='center' href='/'>
                <FontAwesomeIcon icon={ faHome } style={{ fontSize: 20, color: "white" }} />
            </Link>
            <Link className='left !ml-0 !mr-60' href=''>
                Coming Soon
            </Link>
        </nav>
    );
}

export default NaviBar