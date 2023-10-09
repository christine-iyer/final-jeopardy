import styles from './components/ComponentStyles/ComponentStyles.module.scss'
import { useState, useEffect } from "react";
import Score from "./components/Score";
import Question from './components/Question'
import Answer from './components/Answer';
import Category from './components/Category';
import Votes from './components/Votes'
import FormIntake from './components/FormIntake';
import DecrementPoints from './components/DecrementPoints';

import Card from 'react-bootstrap/Card';

export default function App({ userInput }) {
  //set state for for questions and scoring
  const [jeopardyQuest, setJeopardyQuest] = useState(null);
  const [score, setScore] = useState(0);
  const [votes, setVotes] = useState(null);

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

  const getVotes = async () => {
    try {
      const response = await fetch('https://api.congress.gov/v3/member?api_key=ofuehXNz9DOO44FsEfoAIbeCgZPvTgDRDG14yNqD');
      const result = await response.json();
      console.log(result.toString().slice(0,2));
      // console.log(result.members[7].name);
      setVotes(result.toString().slice(0,10))
      console.log(result);
    } catch (error) {
      console.error(error);
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
  useEffect(() => {
    getJeopardyQuest()
    getDecrementPoints()
    getScore()
    getVotes()

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
        <Votes votes={votes} />
      </section>
    </div>
  )

}











