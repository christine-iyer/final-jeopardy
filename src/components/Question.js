import styles from './ComponentStyles/ComponentStyles.module.scss'
export default function Question({ jeopardyQuest, getJeopardyQuest }) {
     return (
          <>
          <button className ={styles.button}onClick={getJeopardyQuest}>Start</button>
       <h1>
          {jeopardyQuest && jeopardyQuest.value ? (
<>{jeopardyQuest.question}? </>
          ) : (
               <>??????</>
          )}</h1>
          
          </>
     );
}