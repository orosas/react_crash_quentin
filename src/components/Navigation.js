import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'


export default function Navigation() {

    // Contenido: CSS transitions usando react-spring para el menu
    //          de la App.

    // Nota: Hook usado para mostrar/ocultar el menu
    const [showMenu, setShowMenu] = useState(false);

    // Nota: div color negro transparente que forma parte del fondo del menu.
    //          En el JSX de return, se indican las css class que utiliza
    const maskTransitions = useTransition(showMenu , null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    // Nota: Muestra el div del menu, y por DEBAJO el div maskTransitions.
    //          En el JSX de return, se indican las css class que utiliza
    const menuTransitions = useTransition(showMenu , null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });


    // let menu;
    // let menuMask;

    // if(showMenu) {
    //     menu = 
    //     <div >
    //         This is the menu
    //     </div>

    //     menuMask = <div>
    //                 </div>
    // };


    return (
        <div>
           <nav>
               <span className='text-xl'>
                   <FontAwesomeIcon 
                     icon={faBars} 
                     onClick={() => setShowMenu(!showMenu) }
                    />
                </span>

                {
                    maskTransitions.map(({ item, key, props }) =>
                        item && <animated.div 
                                    key={key} 
                                    style={props}
                                    className='fixed bg-black-t-50 top-0 left-0 w-full h-full z-50' 
                                    onClick={() => setShowMenu(false)}
                                >
                                </animated.div>
                    )
                }
                {
                    menuTransitions.map(({ item, key, props }) =>
                        item && <animated.div 
                                    key={key} 
                                    style={props}
                                    className='fixed bg-white top-0 left-0 w-3/5 h-full z-50 shadow p-3'
                                >
                                
                                <NavigationMenu 
                                    closeMenu={() => setShowMenu(false)} 
                                />

                                </animated.div>
                    )
                }

           </nav>
        </div>
    )
}
