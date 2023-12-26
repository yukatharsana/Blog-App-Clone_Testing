import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
export default function FallBack () {
  return (
    <Container>
      <div className='d-flex justify-content-center align-items-center vh-100 w-100 '>
        <div>
          <Spinner
            animation='grow'
            className='fallback-spinner'
            variant='primary'
          />
          <Spinner
            animation='grow'
            variant='primary'
            className='fallback-spinner'
          />
          <Spinner
            animation='grow'
            variant='primary'
            className='fallback-spinner'
          />
          <Spinner
            animation='grow'
            variant='primary'
            className='fallback-spinner'
          />
          <Spinner
            animation='grow'
            variant='primary'
            className='fallback-spinner'
          />
          <Spinner
            animation='grow'
            variant='primary'
            className='fallback-spinner'
          />
        </div>
      </div>
    </Container>
  )
}
