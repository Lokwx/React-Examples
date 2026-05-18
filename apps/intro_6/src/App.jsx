//Javascript function
const Title = () => {
  console.log('Running Title');

  return <div>
    Hello World
  </div>
};

const Description = () => {
  console.log('Running description')

  return <div>
    This is my second react component
  </div>
}

//Javascript
const obj = {name: 'alvin', occupation: 'teacher'}
const {name,occupation} = obj
console.log(name);
console.log(occupation);

const Message = (props) => {
  const {text, bgColour} = props; //Unpackage it
  console.log(text);

  return <div style={{
    background: bgColour
  }}>
    {/*{4+4}*/}
    {text}
    {/*{bgColour}*/}
  </div>
}

const Box = (props) => {
  // console.log(props);
  const {label, bgColour, textColour, large} = props;

  return <div style={{
    background: bgColour,
    color: textColour,
    fontSize: large ? '25px' : '15px',
  }}>
    {label}
  </div>
};

const MyComponent = (props) => {
  const {children, bgColour, height} = props;

  return <div style = {{
    background: bgColour,
    height: height + 'px'
  }}>
    <div>
      this is my component
    </div>
    <div>
      {children}
    </div>
  </div>
};


//App is the parent
export default function App() {
  return <>

    <div className = "text-rose-300 bg-red-700 ">one</div>


    {/*
    <MyComponent
      bgColour = "Yellow"
      height = {120}>
      Hello
    </MyComponent>
    <MyComponent bgColour="Lavender" height={40}></MyComponent>
    */}

    {/*
    <Title/>
    <Title/>
    <Title/>
    <Description/>
    <Description></Description>
    <Message/>
    */}

        {/*
    <Message
        text="this is my first prop"
        bgColour="red"
    />
    <Message text="Hi" bgColour='Lavender' />
    <Message text="Bye" bgColour='red'/>
    */}

        {/*
    <Box
        label="My name is wx"
        bgColour="CornflowerBlue"
        textColour="White"
        large1='true' //Just a string
        large={true} //Javascript
    />
    <Box
        label="another box"
        bgColour="Lavender"
        textColour="Black"
    />
    <Box
      label="Hello"
      bgColour="Green"
      textColour="White"
    />

    */}

    </>
}