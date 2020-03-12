import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const student = ['abrar', 'nishat', 'mehedi', 'sakib', 'shadin']
  const friends = ['towhida', 'lubs', 'muri', 'nasim', 'shadin'];
  const products = [
    { name: 'Photoshop', price: '$50.50' },
    { name: 'Illustrator', price: '$39.22' },
    { name: 'Pdf reader', price: '$20.00' },
  ];

  // const productName = products.map(products => products.name);
  // console.log (productName);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react Learner</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            student.map(student => <li>{student}</li>)
          }
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>
        {
          products.map(pd =><Products product={pd}></Products>)
        }
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[] )
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Counter (){
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Products(props) {
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '6px',
    backgroundColor: 'gray',
    margin: '10px',
    height: '250px',
    width: '200px'
  }

  const { name, price } = props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3> {price} </h3>
      <button>Buy Now</button>

    </div>
  )
}


function Students(props) {
  return (
    <div style={{ border: '5px solid tomato', width: '50%', backgroundColor: 'white', color: 'gray', margin: '10px' }}>
      <h4>Name : {props.name}</h4>
      <h5>Semester : {props.Semester} </h5>
      <h5>Roll : {props.roll}</h5>
    </div>
  )
}
export default App;
