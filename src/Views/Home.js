import React from 'react';
import HelloWorld from '../components/HelloWorld';

export default function Home() {
    return (
        <div>
            <h1 className='font-bold text-2xl'>
              This is the home page
            </h1>

            <HelloWorld name='Omar' />
        </div>
    )
}
