import React from 'react';
import './home.scss';
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
       <div>
       <ul className="cards">
  <li>
    <a href="" className="card">
          <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
       
          <div className="card__header-text">
            <h3 className="card__title">Total Income</h3>            
            <span className="card__status">1000</span>
          </div>
        </div>
          </div>
    </a>      
  </li>
  <li>
    <a href="" className="card">
        <div className="card__overlay">        
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">kim Cattrall</h3>
            <span className="card__status">3 hours ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card">
          <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Jessica Parker</h3>
            <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
            <span claclassNamess="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>

  </li>    
</ul>
</div>
    
        
    </React.Fragment>
)}
