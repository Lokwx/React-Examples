import './App.css'
import Header from './Components/header.jsx'
import Search from './Components/Search.jsx'
import Footer from './Components/Footer.jsx'

 const Button = () => {
  return <button>Button</button>
};

export default function App() {
  return <div>

    {/*
    - Setting colours
    <div className="text-rose-300 bg-red-50">one</div>
    <div className="text-slate-300 border-amber-300 bg-amber-800">two</div>
    <div className="text 5-xl text-blue-600 bg-emerald-200">three</div>
    <div className="text-x1 text-purple-400 border-slate-950 border-4">four</div>
    <div className="border-l-4 border-purple-700 bg-violet-100">five</div>
    <div className="text-purple-400 text-x1">
      <div className="">Five</div>
      //Will inherit parents styles
      <div className="text-4xl bg-amber-800">test</div>
    </div>
    */}

    {/*
    //Buttons
    <div className="border-red-500 border-2 p-4 m-4">Hello</div>
    <div className="border-blue-500 border-2 px-2 pb-8 m-4">bye</div>

    <button onClick={() => console('clicked')} className="border-2 border-green-600 text-green-400 px-8 py-2 m-4 rounded-md">first</button>
    <button className = "rounded">hello</button>
    <div><Button></Button></div>
    */}
    <div className="h-screen flex flex-col">
        <Header/>
        <Search/>
        <Footer/>
    </div>
}