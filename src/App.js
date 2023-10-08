import styles from './components/ComponentStyles/ComponentStyles.module.scss'
import { useState, useEffect } from "react";
import Score from "./components/Score";
import Question from './components/Question'
import Answer from './components/Answer';
import Category from './components/Category';
import FormIntake from './components/FormIntake';
import DecrementPoints from './components/DecrementPoints';
import Card  from 'react-bootstrap/Card';

export default function App({userInput}) {
  //set state for for questions and scoring
  const [jeopardyQuest, setJeopardyQuest] = useState(null);
  const [score, setScore] = useState(0);
//const [votes, setVotes] = useState(null);

  const getScore = () => {
    if (jeopardyQuest && jeopardyQuest.value) {
      setScore(score + jeopardyQuest.value);
    }
  }

  const getDecrementPoints = () => {
    if (jeopardyQuest && jeopardyQuest.value) {
      setScore(score - jeopardyQuest.value);
    }
  }
  // const Reset = () => {
  //   if (jeopardyQuest && jeopardyQuest.value) {
  //     setScore(Math.abs(score));
  //   }
  // }

  //const getVotes = async () => {
  //   const url = 'https://api.propublica.org/congress/v1';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-API-Key': 'zCfZXwR6hGeZfPWuN1Up0pt8kcN7qyrH293C1tVc'
  //     }
  //   };
    
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  


  
 

  const getJeopardyQuest = async () => {
    try {
      const response = await fetch('https://jservice.io/api/random');
      const data = await response.json();
      setJeopardyQuest(data[0]);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // getVotes()
    getJeopardyQuest()
    getDecrementPoints()
    getScore()

}, [])

  return (
    <div className='App'>
      <section>
        <Category jeopardyQuest={jeopardyQuest} />
      
        <Card className='SubCard'>




  <Question jeopardyQuest={jeopardyQuest} getJeopardyQuest={getJeopardyQuest} />



</Card>
      
      <FormIntake jeopardyQuest={jeopardyQuest} />
      
      <Score score={score} getScore={getScore} />
      <DecrementPoints getScore={getDecrementPoints} />

  <Answer jeopardyQuest={jeopardyQuest} userInput={userInput} />





      </section>
    </div>
  )

}











