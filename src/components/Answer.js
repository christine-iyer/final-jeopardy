// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Collapse from 'react-bootstrap/Collapse';
// import styles from './ComponentStyles/ComponentStyles.module.scss'
// export default function Answer({ jeopardyQuest }) {
// const [answerQuestion, setAnswerQuestion] = useState(false)
//   const [open, setOpen] = useState(false);
//   return (
//      <>
//        <Button
//          onClick={() => setOpen(!open)}
//          aria-controls="example-collapse-text"
//          aria-expanded={open}
//        >
//          click
//        </Button>
//        <Collapse in={open}>
//          <div id="example-collapse-text">
         
//       answer {jeopardyQuest.answer}

//          </div>
//        </Collapse>
//      </>
//    );
//  }

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










