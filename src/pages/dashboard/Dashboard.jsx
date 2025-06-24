import React from "react";
import { CiSearch } from "react-icons/ci";
const Dashboard = () => {
  return (
    <div>
     

       <header style={{ height:"50px", display:"flex" ,alignContent:"center",justifyContent:"space-between",borderRadius:"10px" ,boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",padding:"0px 20px"}}>
  <h1 style={{textAlign:"center"}}>Hello Evano 👋🏼,</h1>
  <div style={{width:"216px",height:"35px",display:"flex",justifyContent:"center",alignContent:"center",gap:'10px',background:"white" ,borderRadius:"10px",marginTop:"8px ",textIndent:"10px"
  }}>
  <CiSearch size={30} padding={10}  /> <input style={{display:"flex", border:"none",padding:" 10px ", borderRadius:"10px" }} type="search" placeholder='Search'  />
  </div>
 </header>
    </div>
  );
};

export default Dashboard;
