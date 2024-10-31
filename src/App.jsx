// src/App.jsx
import "./App.css"
import { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])
  const [strength, setStrength] = useState(0);
  const [agility, setAglity] = useState(0);

  const handleAddFighter = (newFighter) => {
    console.log(newFighter)
    const newTeam = [...team, newFighter]
    console.log(newTeam)
    setTeam(newTeam)
  }

  return (
    <>
    <h1>Hello world!</h1>
    <h3>Money: {money}</h3>
    <h3>Strength: {strength}</h3>
    <h3>Agility: {agility}</h3>
    <h3>Team: </h3>
    <ul>
      {team.length > 0 ? (
        team.map((eachFighter, idx) => (
          <li key={idx}> 
            <img src= {eachFighter.img}></img>
            <p> {eachFighter.name} </p>
            <p> Price: {eachFighter.price} </p>
            <p> Strength: {eachFighter.strength} </p>
            <p> Agility: {eachFighter.agility} </p>
          </li>
        ))
      ) : (
        <li> pick some team members</li>
      )}
    </ul>

    <h3>Fighters</h3>
    <div className="fighterInfo">
        {zombieFighters.map((eachFighter, idx) => (
          <ul key={idx}>
            <img src= {eachFighter.img}></img>
            <li> {eachFighter.name} </li>
            <li> Price: {eachFighter.price} </li>
            <li> Strength: {eachFighter.strength} </li>
            <li> Agility: {eachFighter.agility} </li>
            <button onClick= {()=> handleAddFighter(eachFighter)}> Add </button>
          </ul>
        ))}
    </div>
    </>
  );
}

export default App
