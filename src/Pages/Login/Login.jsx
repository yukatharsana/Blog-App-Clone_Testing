// @ts-nocheck
import React, { useState } from 'react';
import "./login.css"
import { Button, Container, Form } from 'react-bootstrap';
import {ValidateInput} from '../../Components/InputCompo'
import { UseUserContext } from '../../Context/UserContext';
function Login ()
{
  const [validated, setvalidated] = useState(false);
const { users} = UseUserContext()

  const OnSubmit = (e) =>
  {
    const form = e.currentTarget
if (form.checkValidity() === false) {
  e.preventDefault()
  e.stopPropagation()
}

    setvalidated(true);
  }
  const OnChange =async (name,value) =>
  {

  }
  return (<Container fluid className='d-flex justify-content-center align-items-center '>
    <Form method='post' noValidate validated={validated}  onSubmit={OnSubmit}>
      <ValidateInput name='user' onChange={OnChange} required={true} />
<Button type='submit'>Login</Button>
</Form>
  </Container>);
}

export default Login;
