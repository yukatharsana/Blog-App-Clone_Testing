import React, { useMemo } from 'react'
import { Container, Table, Row, Card } from 'react-bootstrap'
import "./Show.css";
import { UseUserContext } from '../../Context/UserContext'

export default function Show () {
  const { users } = UseUserContext()
  const displayusers = useMemo(() => users, [users])
  return (
    <Container fluid>
      <Row>
        dddf
      </Row>
      <Row className='mt-2 bg-danger mx-auto' style={{width:"80%"}}>
        <Table striped responsive='md' bordered hover>
          <thead className='text-center'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>UserId</th>
              <th scope='col'>Name</th>
              <th scope='col'>Contact</th>
              <th scope='col'>Join and Online</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayusers?.length > 0 &&
              displayusers.map((user, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <th>
                    <Card className='profile-card mx-auto'  >
                      <Card.Img variant='top' className='mx-auto' src='https://i0.wp.com/theliberacy.com/wp-content/uploads/2023/01/Mia-Malkova.jpg?ssl=1' />
                      <Card.ImgOverlay>
                        <Card.Title className='profile-text'>{user?.uid}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  </th>
                  <th>dfdf</th>
                  <th>dfdf</th>
                  <th>dfdf</th>

                  <th>dfdf</th>

                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>
                <Container className='w-50 mx-auto'></Container>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Row>
    </Container>
  )
}
