export default function Question({ jeopardyQuest, getJeopardyQuest }) {
     return (
          <>
          <button onClick={getJeopardyQuest}>Get a Random Trivia Question </button>

          {jeopardyQuest && jeopardyQuest.value ? (

               <>{jeopardyQuest.question}? </>
          ) : (
               <>??????</>
          )}
          
          </>
     );
}