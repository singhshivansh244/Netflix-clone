import { useEffect, useState } from 'react'
import './nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) handleShow(true);
            else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, [])

    return (
        <div className={`nav ${show && 'nav--black'}`}>
            <img
                className='nav--img'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="netflix logo" />
            <img
                className='nav--avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="avatar logo" />
        </div>
    )
}

export default Nav