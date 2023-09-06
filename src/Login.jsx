// @ts-nocheck
import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Image } from "react-bootstrap";

function Login() {
  const [ loginuser, setLoginuser ] = useState( {} );
  const [ error, SetError ] = useState( null );
  const onChange = e =>
  {
    setLoginuser( preuser => ( { ...preuser, [ e.target.name ]: e.target.value } ) );
    SetError( null );
  }
  const validate=()=>{
    if ( !loginuser?.email ) throw Error( "Email is Empty" );
    else if ( !loginuser?.password ) throw Error( "Password is Empty" );
    else if ( !loginuser?.email?.includes( "@" ) ) throw Error( "Invalid Email" );
    else return true;
  
  }
  const  onSubmit = e =>
  {
    e.preventDefault();
    try {
      if ( validate() )
      {
        alert( "Hi" );
      }
    } catch (err) {
      SetError( err.message );
    }
    
  }
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBContainer className='vh-100 w-75'>
        
      <MDBRow>
        <MDBCol col='10' md='6'>
          <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" fluid alt="sample Image"/>
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating  tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating  tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <MDBInput wrapperClass='mb-4' name="email" label='Email address' id='formEmail' type='email' size="lg" onChange={onChange}/>
            <MDBInput wrapperClass='mb-4' label='Password' name="password" id='formpassword' type='password'  size="lg" onChange={onChange}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
            { error ? ( <p className='text-danger text-center'>{ error }</p>):""}
          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={onSubmit}>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      
      </MDBContainer>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © {new Date().getFullYear() }. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

export default Login;