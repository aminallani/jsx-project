import './App.css';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product';

const App = () =>{
  return (
    <div className='App-header'>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src="casque.jpg" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="primary">{product.price}</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}
  


export default App
