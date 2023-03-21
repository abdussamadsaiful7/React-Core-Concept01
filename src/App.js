import logo from './logo.svg';
import './App.css';

const number = 55555;
const singers =[{name:'Dr. Mahfuz', job: "singer"},
                {name:'Agun', job: "sopno"},
                {name:'baby', job: "Kal sara rat"},
              {name:'Eva Rahman', job: "femaleSinger"}];


const singerStyle ={
  color:'purple',
  backgroundColor:'white'
}

function App() {
  const nayoks =['SAMAD ', 'ARAF ', 'SAIFE ', 'MIRAZ', 'RIYAZ'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {
        nayoks.map(nayok =><Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
       <h1>JSX</h1>
      <div className="container">
        <h3>Hello React, how are You?</h3>
      </div>
      <div className="music">
        <p style={singerStyle}>Number: {number} </p>
        <p style={{
            color:'blue',
            backgroundColor:'yellow'
          }}>Name: {singer.name} {singer.job}</p>

      </div>
      </header> */}



      {/* <Person name={nayoks[0]} nayika="Ocena Pakhi"></Person>
      <Person name="ARAV KHAN"></Person>
      <Person name="Saifullah Saife" ></Person> */}
      <h5>New Component</h5>
      <Friend phone="01976567888765433"></Friend>
      <Friend phone="0999990000"></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name} {props.nayika}</h1>
      <p>Profession: Jr. Web Application Developer.</p>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return(
    <div className='container'>
      <h3>Name: Masud Rana</h3>
      <p>Job: TSO</p>
      <p>Magna Group BD</p>
      <p>Phone: {props.phone}</p>
    </div>
   
  )
}

export default App;
