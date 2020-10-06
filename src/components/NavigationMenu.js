import React from 'react'
import { Link } from 'react-router-dom';

// Nota: Contiene la lista de Links del menu

export default function NavigatioMenu(props) {
    return (
        <div>
        <div className="font-bold py-3">
            App Name Menu
        </div>
        <ul>
            <li>
                <Link 
                    to="/" 
                    className='text-purple-600 py-3 border-t border-b block' 
                    onClick={ props.closeMenu }
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    to="/about" 
                    className='text-purple-600 py-3 border-b block' 
                    onClick={ props.closeMenu }
                >
                    About
                </Link>
            </li>
            <li>
                <Link 
                    to="/contactus" 
                    className='text-purple-600 py-3 border-b block' 
                    onClick={ props.closeMenu }
                >
                    Contact Us
                </Link>
            </li>
            <li>
                <Link 
                    to="/posts" 
                    className='text-purple-600 py-3 border-b block' 
                    onClick={ props.closeMenu }
                >
                    Posts
                </Link>
            </li>
        </ul>
        </div>
    )
}
