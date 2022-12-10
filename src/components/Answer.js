import { useState } from "react";
export default function Answer({ jeopardyQuest }) {

     const [answerQuestion, setAnswerQuestion] = useState(false)

     return (
          <>
               <button
               onClick={() => {
                    setAnswerQuestion(!answerQuestion)
               }}
               >
               {answerQuestion ? "Hide Answer" : "Reveal Answer"}
               </button>
               {jeopardyQuest && jeopardyQuest.question && answerQuestion ? (
                    <div> answer {jeopardyQuest.answer}</div>
                    
               ) : (
                    ""
               )}
                         </>
               )
          }





    