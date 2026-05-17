import { useState } from "react";
import "./App.css";
import Profile from "./Components/Profile";
// import Employee from './Components/Employee';

function MyButton() {
  return <button>I'm a button</button>;

// export default function MyApp() {
//   const [user, setUser] = useState({ name: "James", id: "123" });
//   const user1 = {
//       name: 'Hedy Lamarr',
//     imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
//     imageSize: 90,
//   };

  return (
    <>
      <div>
        {/* {<img className="avatar" />} */}
        <AboutPage />
        <h1>{user.name}</h1>
        <h3>ID: {user.id}</h3>
        {/* <h1>test</h1> */}
        <h1>Welcome to my app</h1>
        <MyButton />
        {/* <Profile */}
      </div>
	  <div>
	  </div>
    </>
  );
}

// function App() {
// console.log('we are about to list the employee');
// const showEmployees= true;
// return(
// 	<>
// 		{showEmployees ?
// 			<>
// 			<input type="text" onChange={(e) => {
// 				console.log(e.target.value);
// 			}}/>
// 				<Employee/>
// 				<Employee/>
// 			</>
// 			:
// 			<p>You are not allowed to view the employees</p>
// 		}
// </>
// );
// }

// export default App;
