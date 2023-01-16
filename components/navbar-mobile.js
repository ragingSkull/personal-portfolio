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
    const para = document.querySelectorAll('p');

    for (var x = 0; x < para.length; x++) {
        if (para[x].className.includes("dot")) {
            var dot = document.getElementsByClassName('dot')[0];
            dot.classList.toggle('non-display');
        }
    }

    var menu  = document.getElementsByClassName('menu')[0];
    var child = document.getElementsByClassName('navbar-mob')[0].children;
    var footer  = document.getElementsByClassName('footer')[0];
    
    menu.classList.toggle('menu-change');
    footer.classList.toggle('non-display');

    for (var x = 0; x < child.length; x++) {
        child[x].classList.toggle('bar' + (x + 1) + '-change');
    }
}

export default NavBarMobile