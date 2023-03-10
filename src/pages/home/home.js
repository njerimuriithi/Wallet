import React from 'react';
import './home.scss';
import { Button } from 'devextreme-react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { homepageContents ,latestTransactions,ListItem } from './homeDetails';
import List from 'devextreme-react/list';
import Analysis from './Analysis';
function GroupTemplate(item) {
  return <div>{item.key}</div>;
}
export default function Home() {

  
  const navigate = useNavigate();
  return (
    <React.Fragment >
      <h2 className="Title">Money Insights</h2>
      <div className="main">
        <section className={''}>
          <Button 
          text="Daily"
          onClick={()=>navigate("/transactions")}
          />
          <Button text="Monthly"/>
        </section>
        <section className="Cards" >
        {
          homepageContents.map((item) =>(
        
            <section className="CardContents" key={item.H_ID}>
              <section className='CardHeader'>
              <img className="card__thumb" src={item.image} alt="" />
              <h1 className="CardTitle">{item.Title}</h1>
              </section>
              
              <p className="CardTxt">{item.Amount}</p>
            </section>
    
          ))
        }
        </section>
       
        <section className="list-container">
          
        <List
          dataSource={latestTransactions}
          height="100%"
          itemRender={ListItem}
          grouped={true}
          collapsibleGroups={true}
          groupRender={GroupTemplate}
          
      
          />
      </section>
 <div className="analysis_Section">
  <Analysis/>
  </div>     

      
   
</div>

    </React.Fragment>
)}
