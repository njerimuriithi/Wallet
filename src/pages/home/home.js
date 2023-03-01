import React from 'react';
import './home.scss';
import { Button } from 'devextreme-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Money Insights</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <Button 
          text="Daily"
          onClick={()=>navigate("/transactions")}
          />
          <Button text="Monthly"/>
          
        </div>  
      </div>
    </React.Fragment>
)}
