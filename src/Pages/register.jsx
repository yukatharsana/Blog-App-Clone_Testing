// @ts-nocheck
import React, { useState } from 'react';
import
    {
        MDBBtn,
        MDBContainer,
        MDBCard,
        MDBCardBody,
        MDBInput,
        MDBIcon,
        MDBRow,
        MDBCol,
        MDBCheckbox,
        MDBValidation,
        MDBValidationItem,
    }
    from 'mdb-react-ui-kit';
    import {createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth";
    import {auth} from "../DataStorage/Fire"
function Register ()
{
    const [ reguser, setregUser ] = useState( {} );
    const [ error, setError ] = useState(null);
    const onChangeHandle = e =>
    {
        setregUser( pre => ( { ...pre, [ e.target.name ]: e.target.value } ) );
    }
    const verify = () =>
    {
        if ( reguser?.password === reguser?.confimpassword ) return true;
        else setError( "Password NotMatched" );
    }

    const submit =async  e =>
    {
        e.preventDefault();
        if ( verify() )
        {
            const { confimpassword, ...others } = reguser;
            try {
                const reg = await createUserWithEmailAndPassword( auth, others?.email, others?.password );
                await sendEmailVerification( reg.user );
                console.log(reg.user);
            } catch (error) {
                console.error(error.code);
            }

        }
    }
    return (
        <MDBContainer fluid className='my-5'>

            <MDBRow className='g-0 align-items-center'>
                <MDBCol col='6'>

                    <MDBCard className='my-5 cascading-right' style={ { background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' } }>
                        <MDBCardBody className='p-5 shadow-5 text-center'>

                            <h2 className="fw-bold mb-5">Sign up now</h2>
                            <MDBValidation>
                                <MDBRow>
                                    <MDBCol col='6'>

                                        <MDBInput wrapperClass='mb-4' label='First name' name="firstname" id='firstname' type='text' onChange={onChangeHandle}/>
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Last name' id='lastname' name="lastname" type='text' onChange={onChangeHandle}/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBValidationItem feedback='Please choose a valid email.' invalid>
                                            <MDBInput wrapperClass='mb-4' label='Email' id='form3' required type='email' name="email" onChange={onChangeHandle}/>
                                        </MDBValidationItem>

                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBValidationItem feedback='Please choose a valid mobile.' invalid>

                                            <MDBInput wrapperClass='mb-4' label='Mobile' required id='mobile' name="mobile" type='text'onChange={onChangeHandle} />

                                        </MDBValidationItem>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBValidationItem feedback='Please choose a valid password.' invalid>

                                            <MDBInput wrapperClass='mb-4' label='Password' maxLength={ 12 } minLength={ 6 } required id='password' type='password' name="password" onChange={onChangeHandle}/>

                                        </MDBValidationItem>
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBValidationItem feedback='Please retype password' invalid>
                                            <MDBInput wrapperClass='mb-4' label='Confirm Password' id='confirmpassword' required type='password' name="confimpassword"
                                            onChange={onChangeHandle}/>
                                        </MDBValidationItem>
                                    </MDBCol>
                                </MDBRow>


                                <div className='d-flex justify-content-center mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                </div>

                                <MDBBtn className='w-100 mb-4' type='submit' onSubmit={submit}
                                    // @ts-ignore
                                    size='md'>sign up</MDBBtn>
                            </MDBValidation>

                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={ { color: '#1266f1' } }>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={ { color: '#1266f1' } }>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={ { color: '#1266f1' } }>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={ { color: '#1266f1' } }>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol col='6'>
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
                        // @ts-ignore
                        alt="" fluid />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Register;
