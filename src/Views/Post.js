import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Post() {

    const url = 'https://jsonplaceholder.typicode.com/posts/1';
const [thePost, setPost] = useState(null);


useEffect(() => {
    axios.get(url)
        .then(response => {
            console.log('La respuesta: ', response.data.body);
            
        })
}, [url]);

    


    return (
        <div>
            <h1>
                Post component.
            </h1>
        </div>
    )
}
