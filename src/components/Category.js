export default function Category({ jeopardyQuest }) {


     return (
          <div>
               {/* <button
               onClick={() => {
                    setAnswerCategory(!answerCategory)
               }}
               >
               {answerCategory ? "Hide Category" : "Reveal Category"}
               </button> */}
               {jeopardyQuest && jeopardyQuest.question  ? (
                    <span>category {jeopardyQuest.category.title}</span>
                    
               ) : (
                    ""
               )}
                         </div>
               )
          }





    