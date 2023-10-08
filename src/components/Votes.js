import styles from './ComponentStyles/ComponentStyles.module.scss'
import Button from 'react-bootstrap/Button'
export default function Question({ votes,getVotes }) {
     return (
          <>
          <Button className ={styles.button}onClick={getVotes}>Got Votes?</Button>
       <div>
          {votes && votes.value ? (
<>{votes}? </>
          ) : (
               <>??????</>
          )}</div>
          
          </>
     );
}