import styles from './ComponentStyles/ComponentStyles.module.scss'
import Button from 'react-bootstrap/Button'
export default function Question({ jeopardyQuest, getJeopardyQuest }) {
     return (
          <>
          <Button className ={styles.button}onClick={getJeopardyQuest}>Get Question? Answer?</Button>
       <h1>
          {jeopardyQuest && jeopardyQuest.value ? (
<>{jeopardyQuest.question}? </>
          ) : (
               <>??????</>
          )}</h1>
          
          </>
     );
}