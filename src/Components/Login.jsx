import { useContext } from 'react';
import { UserContext } from './UserContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const {user} = useContext(UserContext)

    function handleChange(e) {
        console.log(e)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" onChange={handleChange}/>
            <Form.Text className="text-muted">
              Don't already have an account? Create a new one <a href="/create-account">here</a>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      );
     
}

export default Login