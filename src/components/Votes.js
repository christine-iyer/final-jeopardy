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
               {viewVote ? "Hide Factoid" : "Reveal New Factoid"}
               </button>
               {votes && votes.members &&  viewVote ?(
                    <div> Government Fact: {votes.members[3].name.split(",").reverse().join(" ")} is a {votes.members[3].partyName} from {votes.members[3].state} and has been serving in the {votes.members[3].terms.item[0].chamber} since {votes.members[3].terms.item[0].startYear}.
                    
<img src={votes.members[3].depiction.imageUrl} height={50} width={50} />
                    </div>

               ) : (
                    ""
               )}
                         </>
               )
          }










