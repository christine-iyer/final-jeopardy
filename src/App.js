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
  // const [category, setCategory] = useState(null);

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
    getJeopardyQuest()
    getDecrementPoints()
    getScore()

}, [])

  return (
    <div className='App'>
      <section>
        <Category jeopardyQuest={jeopardyQuest} />
      
        <Card className='SubCard'>
<Card.Header className='SubCardHeader'>
  <Question />
</Card.Header>
<Card.Body className='SubCardContainer'>
  <Card.Text className='AboutBlurb'>
  <Question jeopardyQuest={jeopardyQuest} getJeopardyQuest={getJeopardyQuest} />
  </Card.Text>
  <br />
  <Card.Text className='SubCardDate'>
<br />
    </Card.Text>
</Card.Body>
</Card>
      
      <FormIntake jeopardyQuest={jeopardyQuest} />
      
      <Score score={score} getScore={getScore} />
      <DecrementPoints getScore={getDecrementPoints} />
      <Card className='SubCard'>
<Card.Header className='SubCardHeader'>About Community</Card.Header>
<Card.Body className='SubCardContainer'>
  <Card.Text className='AboutBlurb'>
  <Answer jeopardyQuest={jeopardyQuest} userInput={userInput} />
  </Card.Text>
  <br />
  <Card.Text className='SubCardDate'>
<br />
    </Card.Text>
</Card.Body>
</Card>

      </section>
    </div>
  )

}











