function Employee(props) {

    //Do not edit props within the function itself, do it in the parent
    return (
        <>
        <h3>Employee {props.name}</h3>
        <p>{props.role ? props.role : "No role"}</p>
        {props.role ? <p>{props.role}</p> : <p>No role</p>}
        </>
    );
}

export default Employee;
