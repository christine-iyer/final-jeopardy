export default function Score({ getScore, score }) {
  return (
    <>
    <h4>{score}</h4>
    <button onClick={getScore}>Increase</button>
    </>
  );
}