import './styles.css'
import { useState } from "react";
import Score from "./components/Score";
import Question from './components/Question'
import Answer from './components/Answer';
import Category from './components/Category';
import Form from './components/Form';
import DecrementPoints from './components/DecrementPoints';
import IncrementPoints from './components/IncrementPoints';




export default function App() {
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


  
 

  const getJeopardyQuest = async () => {
    try {
      const response = await fetch('https://jservice.io/api/random');
      const data = await response.json();
      setJeopardyQuest(data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='App'>
      <section>
      <Category jeopardyQuest={jeopardyQuest} />
      <Question jeopardyQuest={jeopardyQuest} getJeopardyQuest={getJeopardyQuest} />
      <Form jeopardyQuest={jeopardyQuest} />
      <Answer jeopardyQuest={jeopardyQuest} />
      <Score score={score} getScore={getScore} />
      <DecrementPoints score={score} getScore={getDecrementPoints} />
      </section>
    </div>
  )

}



