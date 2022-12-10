   export default function DecrementPoints({ getScore, score }) {
     return (
       <>
       <h4>{score}</h4>
       <button onClick={getScore}>Decrease</button>
       </>
     );
   }