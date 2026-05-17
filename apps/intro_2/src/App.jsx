import './App.css'
import {useState} from 'react';

function AddButton({value, setValue}) {

    // const [value, setCount] = useState(0);

    function handleClick() {
        setValue(value + 1);
    }

    return (
        <button onClick={handleClick}>
            Add
        </button>
    )
}

function SubtractButton({value, setValue}) {
    function handleClick() {
        setValue(value - 1);
    }

    return (
        <button onClick={handleClick}>
            Subtract
        </button>
    )
}

function MyButton() {
    // return (
    //     // <button>I'm a button</button>
    //     <button>{props.text}</button>
    // );

    const [count, setCount] = useState(0);

    //Receive props from parent component
    //React does: value = prop.value
    function handleClick() {
        // alert("You clicked " + props.text);
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    )
}

export default function App() {
    const name = "Lokwx";
    const module = "Orbital"
    const products = [];

    const [value, setValue] = useState(0);

    const foods = [
        "Chicken Rice",
        "Laksa",
        "Burger"
    ]

    return (
        <div>
            <h1>Welcome to my app</h1>
            <h1>Welcome {name}</h1>
            <h2>This is my practice for {module}</h2>
            <h1>{5 + 3}</h1>
            <h2>{products}</h2>

            <div className='button-group'>
                <MyButton text="add"/>
                <MyButton text="subtract"/>
                <MyButton text="delete"/>
            </div>

            <div>
                {value}
            </div>

            //Left side = prop name sent to child component
            //Right side = variable/function from current component
            <div className='button-group'>
                <AddButton value={value} setValue={setValue} />
                <SubtractButton value={value} setValue={setValue} />
            </div>

            //Accessing all elements in an array using map
            <h1>Food List</h1>
            {foods.map(food => (
                <h2>{food}</h2>
            ))}

            //Accessing a single element
            <h1>{foods[0]}</h1>

        </div>
    );
}