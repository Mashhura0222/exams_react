import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import imgs from "../../assets/imgs.png";
import img1 from '../../assets/imgs_1.png'
import img2 from '../../assets/imgs_2.png'


const Income = () => {
  return (
    
    <div style={{ padding: "40px 40px", margin:" 20px   80px" }}>
         <header style={{ height:"50px", display:"flex" ,alignContent:"center",margin:"auto",justifyContent:"space-between",borderRadius:"10px" ,boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", padding:"0px 20px"}}>
       <h1 style={{textAlign:"center"}}>Hello Evano 👋🏼,</h1>
       <div style={{width:"216px",height:"35px",display:"flex",justifyContent:"center",alignContent:"center",gap:'10px',background:"white" ,borderRadius:"10px",marginTop:"8px ",textIndent:"10px"
       }}>
       <CiSearch size={30} padding={10}  /> <input style={{display:"flex", border:"none",padding:" 10px ", borderRadius:"10px" }} type="search" placeholder='Search'  />
       </div>
      </header>
     <div style={{padding:"20px 20px" ,marginTop:"10px", borderRadius:"10px" ,boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}>
       <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          padding:"20px 0",
         
        }}
      >
        <h1 style={{ fontSize: "24px" }}>Product Sell</h1>
        <div
          style={{
            width: "216px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignContent:"center",
            
            gap: "20px",
            background: "white",
            borderRadius: "10px",

          }}
        >
          <CiSearch size={30} style={{display:"flex",alignContent:"column"}}/>{" "}
          <input
            style={{
              display: "flex",
              border: "none",
              width: "100px",
              height: "38px",
              fontSize:"18px"
            }}
            type="search"
            placeholder="Search"
          />
        </div>
        <button
          style={{
            width: "160px",
            height: "40px",
            border: "none",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            padding: "10px",
            gap: "10px",
            borderRadius:"10px",
            fontSize:"18px",color:"rgba(181, 183, 192, 1)"
          }}
        >
          Last 30 days
          <IoIosArrowDown />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          padding: "20px 0px",
        }}
      >
        <h4 style={{fontSize:"20px",fontWeight:"400" ,color:"rgba(181, 183, 192, 1)" ,height:"41px"}}>Product Name</h4>
        <div
          style={{
            height: "35px",
            display: "flex",
            justifyContent: "space-between",
            gap: "100px",
            background: "white",
            borderRadius: "10px",
          }}
        >
          <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(181, 183, 192, 1)" ,height:"41px"}}>Stock</p>
          <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(181, 183, 192, 1)" ,height:"41px"}}>Price</p>
          <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(181, 183, 192, 1)" ,height:"41px"}}>Total Sales</p>
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"25px"}}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img src={imgs} alt="" />
          </div>
          <div
            style={{ display: "flex", flexDirection: " column", gap: "10px" }}
          >
            <span style={{fontSize:"22px",fontWeight:"600" ,color:"rgba(0, 0, 0, 1))" ,}}>Abstract 3D</span>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(181, 183, 192, 1)" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
              gap: "140px",
            }}
          >
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}} >32 in stock</p>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}}>$ 45.99</p>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}}>20</p>
          </div>
        </div>
         <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img src={img1} alt="" />
          </div>
          <div
            style={{ display: "flex", flexDirection: " column", gap: "10px" }}
          >
            <span style={{fontSize:"22px",fontWeight:"600" ,color:"rgba(0, 0, 0, 1))" ,}}>Sarphens Illustration</span>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(181, 183, 192, 1)" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
         <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
              gap: "140px",
            }}
          >
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}} >32 in stock</p>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}}>$ 45.99</p>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}}>20</p>
          </div>
        </div>
          <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img src={imgs} alt="" />
          </div>
          <div
            style={{ display: "flex", flexDirection: " column", gap: "10px" }}
          >
            <span style={{fontSize:"22px",fontWeight:"600" ,color:"rgba(0, 0, 0, 1))" ,}}>Landing Page 3D max</span>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(181, 183, 192, 1)" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
         <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
              gap: "140px",
            }}
          >
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}} >32 in stock</p>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}}>$ 45.99</p>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}}>20</p>
          </div>
        </div> 
          <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img src={img2} alt="" />
          </div>
          <div
            style={{ display: "flex", flexDirection: " column", gap: "10px" , }}
          >
            <span style={{fontSize:"22px",fontWeight:"600" ,color:"rgba(0, 0, 0, 1))" ,}}>Collab Illustration</span>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(181, 183, 192, 1)" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
         <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
              gap: "140px",
            }}
          >
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}} >32 in stock</p>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}}>$ 45.99</p>
            <p style={{fontSize:"18px",fontWeight:"400" ,color:"rgba(0, 0, 0, 1))" ,height:"41px"}}>20</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Income;
