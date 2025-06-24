import React from 'react';
import './Customers.css';
import { IoIosArrowDown } from 'react-icons/io'; 

import custumors from "../../assets/diagramma65.png"
const Customers = () => {
  return (
    
    <div className='banner' style={{display:'flex',alignContent:"center" ,gap:"20px"}}>
      
      <div className="diagramma"  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
     
      <div
        style={{ display: 'flex', alignContent:"center",justifyContent:'space-between',gap:"380px" }}
        
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h1>Overview</h1>
          <p>Monthly Earning</p>
        </div>
        <button
          style={{
            width: '100px',
            height: '40px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          padding: '10px',
            gap: '10px',
            background: '#f1f1f1',
            borderRadius: '8px',
          }}
        >
          Quarterly
          <IoIosArrowDown />
        </button>
      </div>

      <div
        style={{
          width: '628px',
          height: '378px',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '20px',
         
        }}
      >
        {[40, 100, 45, 50, 35, 55, 50, 90, 75, 60, 40, 65].map((val, i) => (
          <div key={i} className="box">
            <div className="bar" style={{ height: `${val * 2}px` }}></div>
            <span className="month">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className='imgs' style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" ,padding:'20px 20px',borderRadius:"20px"}}>
    <h3 style={{fontSize:"22px" ,fontWeight:"600",lineHeight:"100%",color:"rgba(0, 0, 0, 1)"}}>Customers</h3>
    <p style={{fontSize:"14px" ,fontWeight:"400",lineHeight:"100%",color:"rgba(172, 172, 172, 1)"}}>Customers that buy products</p>
    <img src={custumors} alt="" />
    </div>
    </div>
  );
};

export default Customers;
