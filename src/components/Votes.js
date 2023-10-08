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
export default function Votes({ votes }) {

     const [viewVote, setViewVote] = useState(false)

     return (
          <>
               <button
               onClick={() => {
                    setViewVote(!viewVote)
               }}
               >
               {viewVote ? "Hide Vote" : "Reveal Vote"}
               </button>
               {votes && votes.members && viewVote ? (
                    <div> vote {votes.viewVote}</div>

               ) : (
                    ""
               )}
                         </>
               )
          }










