// import useState from 'react'
// import styles from './ComponentStyles/ComponentStyles.module.scss'
// import Button from 'react-bootstrap/Button'
// export default function VoteDisplay({ votes,getVotes }) {
//      const [viewVote, setViewVote] = useState(false)
//      return (
//           <>
//           <Button 
//           className ={styles.button}
//           onClick={getVotes}>Got Votes?</Button>
//        <div>
//           {votes && votes.value ? (
// <>{votes}? </>
//           ) : (
//                <>??????</>
//           )}</div>
          
//           </>
//      );
// }

import { useState } from "react";
export default function Answer({ votes,getVotes }) {

     const [viewVote, viewVoteVote] = useState(false)

     return (
          <>
               <button
               onClick={() => {
                    viewVoteVote(!viewVote)
               }}
               >
               {viewVote ? "Hide Answer" : "Reveal Answer"}
               </button>
               {votes && votes.question && viewVote ? (
                    <div> answer {votes.answer}</div>

               ) : (
                    ""
               )}
                         </>
               )
          }










