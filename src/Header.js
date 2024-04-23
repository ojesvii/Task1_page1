import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Top>
         <header>
        <div class="head">
        <div class="head_left">
           <img src="./images/Amrat.png" />
           <h5>Home</h5>
           <h4>Find Doctors</h4>
           <h5>About Us </h5>
        </div>
        <div class="head_right" >  
           <button class="btn1">Login</button>
           <button class="btn2">Sign-up</button>
        </div>
        </div>
    </header>
    </Top>
  )
}

export default Header ;

const Top=styled.div`
/* header  */

header{
min-width: 1440px;
height: 94px;
display: flex;
background-color: rgba(255, 247, 226, 1);
justify-content: center;
align-items: center;
}
.head{

    width:1232px;
    height:56px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position:relative;

}
.head_left{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:669px;
   
}
.head_left h5{

font-size: 20px;
font-family: 'DINPro-Bold';
font-weight: 500;
line-height: 28px;
color: rgba(71, 71, 71, 1);


}
.head_left h4{
    color: rgba(58, 100, 59, 1);
    font-size: 20px;
    font-weight: 700;
    line-height: 28px; 
    font-family: 'DINPro-Bold';

}

.head_right{
    width: Hug (297px)px;
height: Hug (56px)px;
gap: 16px;
opacity: 0px;
display:flex;
align-items: center;


}
.head_right .btn1{

    width: 118px;
height: 56px;
border:1px solid rgba(58, 100, 59, 1);
border-radius: 11px;
background-color:rgba(255, 247, 226, 1);
padding:12px 30px 12px 30px;

font-size: 24px;
font-weight: 500;
line-height: 30.91px;
color:rgba(58, 100, 59, 1);
text-align:center;

} 
.head_right .btn1:hover{
    background-color: rgba(58, 100, 59, 1);
    color:rgba(255, 255, 255, 1);
    cursor: pointer;
}
.head_right .btn2{

    width: 163px;
    height: 56px;
    padding: 10px 30px 10px 30px;
    gap: 10px;
    border-radius: 11px ;
    border:none;
    background-color: rgba(58, 100, 59, 1);
    color:rgba(255, 255, 255, 1);

font-size: 24px;
font-weight: 500;
text-align: center;

} 

`;