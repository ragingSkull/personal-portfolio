import Link from 'next/link';
import Menu from '../components/navbar-mobile-menu';

const NavBarMobile = () => {
    return (
        <>
        <nav className='navbar-mob p-2.5 w-full' onClick={(document) => navbarAnimation()}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
            
        </nav>
        <Menu />
        </>
    );
}

function navbarAnimation() {
    var menu  = document.getElementsByClassName('menu')[0];
    var child = document.getElementsByClassName('navbar-mob')[0].children;

    menu.classList.toggle('menu-change');
    
    for (var x = 0; x < child.length; x++) {
        child[x].classList.toggle('bar' + (x + 1) + '-change');
    }
}

export default NavBarMobile