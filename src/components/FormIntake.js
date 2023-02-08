// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import  FormLabel  from "react-bootstrap/FormLabel";
import styles from './ComponentStyles/ComponentStyles.module.scss'


export default function FormIntake({jeopardyQuest}) {
  //The component must return some JSX
  const [userInput, setUserInput] = useState("");

  const handleChange = (evt) => {
    setUserInput(evt.target.value);
    
    
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userInput)
          console.log(jeopardyQuest.answer)
        }}
      >
        <Row className={styles.mb3}>
          <Form.Group as={Col} controlId="formGridName">

            <FormLabel>What is </FormLabel>
            <Form.Control
            type="text" 
            onChange={handleChange} 
            value={userInput} />
            <Button 
            className={styles.button}
            type="submit" 
            value="submit"
            variant="primary"
            />
          </Form.Group>
        </Row>
        <Card className='SubCard'>
      <Card.Header className='SubCardHeader'>About Community</Card.Header>
      <Card.Body className='SubCardContainer'>
        <Card.Text className='AboutBlurb'>
          {userInput}
        </Card.Text>
        <br />
        <Card.Text className='SubCardDate'>
  <br />
          </Card.Text>
      </Card.Body>
    </Card>
  )
</Form>
    </div>
  );
}

