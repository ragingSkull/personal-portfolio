import Link from 'next/link'

const Menu = () => {
    const nextLine = "\n";

    return (
        <div className='menu hidden w-full h-full mt-16 px-2.5'>
            <br />
            <br />
            <Link href='/' onClick={(document) => closeMenu()}>
                Home
            </Link>
            <br />
            <br />
            <Link href='/about-me' onClick={(document) => closeMenu()}>
                About Me
            </Link>
        </div>
    );
}

function closeMenu() {
    const para = document.querySelectorAll('p');

    for (var x = 0; x < para.length; x++) {
        if (para[x].className.includes("dot")) {
            var dot = document.getElementsByClassName('dot')[0];
            dot.classList.remove('non-display');
        }
    }

    var menu  = document.getElementsByClassName('menu')[0];
    var child = document.getElementsByClassName('navbar-mob')[0].children;
    var footer  = document.getElementsByClassName('footer')[0];

    menu.classList.remove('menu-change');
    footer.classList.remove('non-display');

    for (var x = 0; x < child.length; x++) {
        child[x].classList.toggle('bar' + (x + 1) + '-change');
    }
}

export default Menu