import React from 'react'
import styled from 'styled-components'

function Section1() {
  return (
    <Section>
         <div class="sec1">
        <div class="back">
            
        </div>
        <div class="back2">
            <img class="female_img" src="./images/female.png"/>
            <div class="sub_about">
            <h5>Dr. Bruce Willis <img src="./images/blue_tick.png"  class="im"/> </h5>
            <h6>Gynecologist</h6>
            <img src="./images/rating1.png"/>
            </div>
            <div class="common">
            <h6>Followers</h6>
            <h4>850</h4>
            </div>
            <div class="common">
            <h6>Following</h6>
            <h4>18K</h4>
            </div>
            <div class="common">
            <h6>Posts</h6>
            <h4>250</h4>
            </div>
            <button>Book an Appointment</button>

        </div>
        </div>
    </Section>
  )
}

export default Section1 ;

const Section=styled.div`
/* section 1 */


.sec1{
    position: relative;
    left:110px;
    top:70px;
    width: 1220px;
    min-height:197px;
   
    
    
}
.back{
    background-image: url('images/back1.png');
    height:170px;
    width:1220px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.back2 .female_img{
    
    margin-top:-60px;

}

.back2{
position:relative;
display:flex;
justify-content: space-around;
align-items: center;
background-color: rgba(255, 251, 242, 1);
border:1px solid rgba(216, 216, 216, 1);
height:150px;


}
.back2 button:hover{
    background-color: orange;
border:1px solid rgba(216, 216, 216, 1);
color:black;
cursor: pointer;
}

.sub_about{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
}

.sub_about h5{
    font-family:"Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
}
.sub_about .im{
    position:absolute;
     margin-top:5px;
     margin-left:5px;
}
.sub_about h6{
    font-family:"Poppins", sans-serif;
    font-weight: 500;
    font-size: 15px;
}
.back2 .common {
    display:flex;
    flex-direction: column;
   
line-height: 16.8px;
text-align: center;

}
.common h6{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
color:rgba(58, 100, 59, 1);

}
.common h4{
    font-family: Poppins;
font-size: 20px;
font-weight: 600;
padding:10px;
}

.back2 button{
    border-radius: 8px;
    background-color: rgba(58, 100, 59, 1);
    color:white;
    font-size: 20px;
    font-weight: 500;
    width:274px;
    height:59px;
    border:none;
}

`;