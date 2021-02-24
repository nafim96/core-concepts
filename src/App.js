import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const nayok = ['Rajjak', 'Alomgir', 'Shakib', 'Salman']
  const friends = [
    { name: 'Jubaer', title: 'Business' },
    { name: 'Tusher', title: 'Student' },
    { name: 'Rubel', title: 'Business' },
    { name: 'Mazharul', title: 'Student' },
    { name: 'Tota', title: 'Agriculture' },
    { name: 'Abbas', title: 'Student' }
  ];
  const products = [
    { name: 'PhotoShope', price: '$93.99' },
    { name: 'Illustrator', price: '$60.34' },
    { name: 'PDF', price: '$6.70' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>I am React Person</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayok.map(nayok => {
              return (
                <li>{nayok}</li>
              )
            })
          }
          {
            friends.map(friend => {
              return (
                <li>{friend.name}</li>
              )
            })
          }
        </ul>
        {
          products.map(product => {
            const displayFlex = {
              display: 'flex',
            }

            const margin = {
              margin: '10px',
              width: '200px'
            }
            return (
              <div style={displayFlex} className='displayFlex'>
                <div style={margin}>
                  <Product product={product}></Product>
                </div>
              </div>
            )
          })
        }
        {
          friends.map(friend => {
            return (

              <Person friendList={friend}></Person>
            )
          })
        }

      </header>

    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users`;
  useEffect(async () => {
    try {
      const promise = await fetch(url);
      const data = await promise.json();
      setUsers(data);
    }
    catch (error) {
      console.log(error);
    }
  })

  return (
    <div>
      <h1>Dynamic Users:{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid yellow',
    margin: '10px auto',
    padding: '10px',
    backgroundColor: 'lightGray'
  }
  const { name, price } = props.product;
  return (
    <div>
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '10px',
    backgroundColor: 'cyan',
    color: 'red'
  }
  const { name, title } = props.friendList;
  return (
    <div style={personStyle}>
      <h1>{name}</h1>
      <p>Profession:{title}</p>
    </div>
  )
}

export default App;
