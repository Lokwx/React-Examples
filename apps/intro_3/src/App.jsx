import './App.css'
import Employee from './Components/Employee';

function App() {

	console.log('we are about to list the employee');
	const showEmployees= false;
	return(
		<>
			{showEmployees ? 
				<>
					<Employee/>
					<Employee/>
				</> 
				: 
				<p>You are not allowed to view the employees</p>
			}
		</>
	);
}

export default App;	