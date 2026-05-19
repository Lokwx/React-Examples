"use client";
import {useState} from "react";

export default function App(){
    const [val, setMessage] = useState("Hi!");

    return <div className="bg-white flex flex-col items-center justify-center h-screen">
        <div className="text-3x1 text-stone-400">{val}</div>
        <div className="">
            <button className="m-2 px-4 py-2 text-white bg-green-500 rounded-full"
                onClick={() => {
                    setMessage("Bye!");
                }}
                >
                one
            </button>
            <button className="px-4 py-2 text-white bg-red-500 rounded-full"
                onClick={() => {
                   setMessage("Bye Bye!");
                }}
                >
                two
            </button>
            <button className="m-2 px-4 py-2 text-white bg-purple-500 rounded-full"
                onClick={() => {
                    setMessage("Bye Bye Bye!");
                }}
                >
                three
            </button>
        </div>
    </div>
};