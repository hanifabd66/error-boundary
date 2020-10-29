import logo from './logo.svg';
import './App.css';
import Text from './text';
// import untuk textClass
import TextClass from './textClass';
// import untuk textClass
import Greeting from './greeting';
// import untuk greeting.js
import React, { Component } from 'react';
// import untuk class App extends Component 
// import React, { useState } from 'react';
// import untuk useState



class App extends Component {
  state = {
    persons: [
      { name: 'Michael', age: 19 }
    ]
  }

  changePersonHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Michael', age: '25' }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>Greeting from React App</h1>
        <Greeting name={this.state.persons[0].name} age={this.state.persons[0].age} changeParagraph =></>
      {/* <Greeting name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Greeting name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}

    </div >
  );
  }
}

{/* belum diatas */ }

export default function MyComponent(props) {
  //   const [name, setName] = useState('Hanif');
  //   function handleNameChange(e) {
  //     setName(e.target.value);
  //   }
  //   return (
  //     <div>
  //       <p>Nama saya {name} </p>
  //       < input value={name} onChange={handleNameChange} />

  //     </div>
  //   )
  // }


  // class App extends Component { // state hanya dapat diakses class-based components.
  //     state = {
  //       persons: [
  //         { name: 'Angga', age: 35 }
  //       ]
  //     };

  //     submitHandler = (event) => {
  //       // alert('Hallo')
  //       this.setState({
  //         persons: [
  //           { name: 'Agat' }
  //         ]
  //       })
  //     }

  //     render() {
  //       return (
  //         <div>
  //           <p>Nama saya {this.state.persons[0].name}</p>
  //           <button onClick={this.submitHandler}>Submit </button>

  //           { this.state.counter}</div >
  //       );
  //     }
  //   }

  // class App extends Component {
  //   state = {
  //     persons: [
  //       { name: 'Agat', age: 19 },
  //       { name: 'Angga', age: 20 },
  //       { name: 'Hanif', age: 21 }
  //     ]
  //   }

  //   render() {

  //     return (
  //       <div className="App" >
  //         <h1>Greeting from React App</h1>
  //         <Greeting name={this.state.persons[0].name} age={this.state.persons[0].age}></Greeting>
  //         <Greeting name={this.state.persons[1].name} age={this.state.persons[1].age} />
  //         <Greeting name={this.state.persons[2].name} age={this.state.persons[2].age} />

  //       </div >
  //     );
  //   }
  // }

  // function App()
  // <div className="App" >
  //   {/* <header className="App-header"> */}
  //   < img src={logo} className="App-logo" alt="logo" />

  //   < p >
  //     {/* edit */}
  //      Tulisannya <code>udah</code> diganti.
  //   </p >
  //   <p>this is text</p>
  //   <a
  //     className="App-link"
  //     href="https://reactjs.org"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     Learn React
  //       </a>

  //   <Text satu="example text 1" />
  //   <Text dua="example text 2" />

  //   <TextClass pertama="text with class" />


  //   {<Greeting name='Hanif' age='22' >
  //     Hallo saya children Property
  //             </Greeting>

  //     </header> 

  // </div >
  //     );
  //     }

  export default App;