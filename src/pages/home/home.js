import React from 'react';
//import './home.scss';
import { Button } from 'devextreme-react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Home() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Money Insights</h2>
      <div className={''}>
        <div className={''}>
          <Button 
          text="Daily"
          onClick={()=>navigate("/transactions")}
          />
          <Button text="Monthly"/>
        </div>
        </div>
        <Button>
          <h2>Total Income</h2>
          <h3>10000</h3>
        </Button>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
     </Card.Body>
    </Card>
    </React.Fragment>
)}
