import { match } from 'assert';
import React, { useEffect, useState } from 'react';
import './App.css';

export type Match = {
  team1: string
  team2: string
  score1: number
  score2: number
}

export type Row = {
  team: string,
  points: number
}

const matche: Match[] = [{
  "team1": "Chicago Bulls",
  "team2": "Atalanta Hawks",
  score1: 0,
  score2: 0
},
{
  "team1": "Brooklyn Nets",
  "team2": "Milwaukee Bucks",
  score1: 0,
  score2: 0
},
{
  "team1": "Philadelphia 76ERS",
  "team2": "Cleveland Cavaliers",
  score1: 0,
  score2: 0
},
]
type Standing = Row[];


const App = () => {
  const [matches, setMatches] = useState<Match[]>(matche);

  const [standing, setStanding] = useState<Standing>([
    {
      team: "Chicago Bulls",
      "points": 0
    },
    {
      team: "Atalanta Hawks",
      "points": 0
    },
    {
      team: "Brooklyn Nets",
      "points": 0
    },
    {
      team: "Milwaukee Bucks",
      points: 0
    }
    , {
      team: "Philadelphia 76ERS",
      points: 0
    },
    {
      team: "Cleveland Cavaliers",
      points: 0
    }
  ]
  )
  useEffect(() => {
    const newStanding: Standing = [];
    matche.forEach(({ team1, team2, score1, score2 }) => {
      newStanding.push({ team: team1, points: score1 > score2 ? 3 : score1 === score2 ? 1 : 0 });
      newStanding.push({ team: team1, points: score2 > score1 ? 3 : score2 === score1 ? 1 : 0 })
    })
    setStanding(newStanding.sort((a, b) => a.points > b.points ? -1 : 1));
  }, matche)
  const setScore = (index: number, score: "score1" | "score2", value: number) => {
    matches[index][score] = Math.max(value, 0);
    setMatches([...matches]);
  }
  return (
    <>
      <ul>
        {standing.map(item => <li>{item.team} - {item.points}</li>)}
      </ul>
      <ul>
        {matches.map(item => <li>{item.team1} - {item.team2}: <button onClick={setScore()}>-</button>{item.score1}<button>+</button> - <button></button>{item.score2} <button></button></li>)}
      </ul>
    </>
  )
}

export default App;
