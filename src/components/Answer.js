import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Answer({ jeopardyQuest }) {

     const [answerQuestion, setAnswerQuestion] = useState(false)

     return (
          <>
               <Button
               onClick={() => {
                    setAnswerQuestion(!answerQuestion)
               }}
               >
               {answerQuestion ? "Hide Answer" : "Reveal Answer"}
               </Button>
               {jeopardyQuest && jeopardyQuest.question && answerQuestion ? (
                    <div> answer {jeopardyQuest.answer}</div>
                    
               ) : (
                    ""
               )}
                         </>
               )
          }





    