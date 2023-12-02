import React from 'react'
import {  Card } from 'react-bootstrap'

const Player = (tableau) => {
  return (
    <div>
      {tableau.map(i=> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tableau.image} />
      <Card.Body>
        <Card.Title>{tableau.name}</Card.Title>
        <Card.Text>
          <p className='Number'>{tableau.age}</p>
          <p className='natio'>{tableau.nationality}</p>
          <p className='team'>{tableau.team}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>)}
        
      
    </div>
  )
}

export default Player
