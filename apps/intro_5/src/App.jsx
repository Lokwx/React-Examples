import ToDoList from "./Components/ToDoList.jsx";
import ToDoList1 from "./Components/ToDoList1.jsx";
import React from 'react';
import './App.css';
import items from "./Components/items.jsx"

// function App(props) {
//     return (
//         <div>
//             <ToDoList />
//             <ToDoList1 />
//         </div>
//     );
// }
//
// export default App;

import { getImageURL } from "./Components/utils.jsx";

export default function Profile() {
    return (
       <Card>
            <Avatar size={100}
                    person={{
                        name: 'wx',
                        imageId: '7vQD0fPs',
                    }}
                    />
       </Card>
    );
}

function Avatar({person,size})
{

    return (
        <>
            <img className='avatar'
                 src = {getImageURL(person)}
                 alt={person.name}
                 width={size}
                 height={size}
                 />
            <img className='avatar' src='https://cdn.prod.website-files.com/662fb92f905585b61b12afd8/66603ea869bd93286e51fc46_pocoyo-after.webp'/>
            <img className='avatar'
                 src='https://cdn.prod.website-files.com/662fb92f905585b61b12afd8/66603ea869bd93286e51fc46_pocoyo-after.webp'
            style = {{
                width: '40px',
                height: '40px',
        }} />
        <items/>
        </>
    );
}

function Card({children})
{
    return (
        <div className = 'card'>
            {children}
        </div>
    );
}