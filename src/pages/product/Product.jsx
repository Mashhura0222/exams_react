import React from "react";
import { CiSearch } from "react-icons/ci";
import { TiArrowUp } from "react-icons/ti";
import { TiArrowDown } from 'react-icons/ti';
import product_img from "../../assets/Group 10.png"
import product_img1 from "../../assets/Group 10 (1).png"
import product_img2 from "../../assets/Group 10 (2).png"
const Product = () => {
  return (
    <div style={{margin:" 20px   80px",boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",borderRadius:"20px "}}>
    
          <header style={{ height:"50px", display:"flex" ,alignContent:"center",margin:"auto",justifyContent:"space-between",borderRadius:"10px" ,boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",padding:"0px 20px",}}>
        <h1 style={{textAlign:"center"}}>Hello Evano 👋🏼,</h1>
        <div style={{width:"216px",height:"35px",display:"flex",justifyContent:"center",alignContent:"center",gap:'10px',background:"white" ,borderRadius:"10px",marginTop:"8px ",textIndent:"10px"
        }}>
        <CiSearch size={30} padding={10}  /> <input style={{display:"flex", border:"none",padding:" 10px ", borderRadius:"10px" }} type="search" placeholder='Search'  />
        </div>
       </header>
      <div>
        <div style={{display:"flex",alignContent:"center", justifyContent:"space-between",padding:"40px 0px"}}>
         <div className='product' style={{display:"flex",alignContent:"center",gap:"20px",padding:"20px 40px"}}>
           <img src={product_img} alt="" />
          <div style={{display:"flex",flexDirection:"column",gap:'10px'}}>
            <span  style={{width:"54px", height:"21px",fontSize:"16px",fontWeight:"400",color:"rgba(172, 172, 172, 1)"}}>Earning</span>
            <h3 style={{width:"91px",height:"32px",fontSize:"32px",fontWeight:"600"}}>$198k</h3>
            <p style={{display:"flex",alignContent:"center",gap:"10px",fontSize:"16px",fontWeight:"700"}}><TiArrowUp size={20}color='green'/>37.8% this month</p>
          </div>
         </div>
          <div className='product' style={{display:"flex",alignContent:"center",gap:"20px",padding:"20px 40px"}}>
           <img src={product_img1} alt="" />
          <div style={{display:"flex",flexDirection:"column",gap:'10px'}}>
            <span  style={{width:"54px", height:"21px",fontSize:"16px",fontWeight:"400",color:"rgba(172, 172, 172, 1)"}}>Balance</span>
            <h3 style={{width:"91px",height:"32px",fontSize:"32px",fontWeight:"600"}}>$2.4k</h3>
            <p style={{display:"flex",alignContent:"center",gap:"10px",fontSize:"16px",fontWeight:"700"}}><TiArrowDown size={20} color='red'/>2% this month</p>
          </div>
         </div>
          <div className='product' style={{display:"flex",alignContent:"center",gap:"20px",padding:"20px 40px"}}>
           <img src={product_img2} alt="" />
          <div style={{display:"flex",flexDirection:"column",gap:'10px'}}>
            <span  style={{width:"54px", height:"21px",fontSize:"16px",fontWeight:"400",color:"rgba(172, 172, 172, 1)"}}>Total Sales</span>
            <h3 style={{width:"91px",height:"32px",fontSize:"32px",fontWeight:"600"}}>$89k</h3>
            <p style={{display:"flex",alignContent:"center",gap:"10px",fontSize:"16px",fontWeight:"700"}}><TiArrowUp size={20}color='green'/>11% this week</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
