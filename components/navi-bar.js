import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
} from "@fortawesome/free-solid-svg-icons";
  

const NaviBar = () => {
    return (
        <div className='navbar-container'>
        <nav className='navbar'>
            <Link className='right !ml-60 !mr-0' href='/posts/about-me'>
                About Me
            </Link>
            <Link className='center' href='/'>
                <FontAwesomeIcon icon={ faHome } style={{ fontSize: 20, color: "white" }} />
            </Link>
            <Link className='left !ml-0 !mr-60' href='/posts/language'>
                Language
            </Link>
        </nav>
        </div>
    );
}

export default NaviBar