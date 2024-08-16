import React from 'react'
import "./Boody.css"
import chip from "../../assets/chips.png"
import chilli from "../../assets/chilli.jpg"
import Smokey from "../../assets/smokey.jpg"
import Beef from "../../assets/beef.jpg"
import cart from "../../assets/R.png"





const Boody = () => {
  return (

<>
<div class="tainer">
<div id="box1" class="box">


<h1>EAT OUR GRILLED POTATO CHIPS</h1> 
    


    <h3>Satisfying savoury Chinese meat sauce chips without any hard-to-find ingredients</h3>
    <button > <img src={cart} alt='xxxxx' className='cart'/></button>
   
</div>

<div id="box2" class="box">
    

    <img src={chip} alt='xxxxx' className='bigbag'/> 
</div>


<div id="box3" class="box">


<img src={chilli} alt='xxxxx' className='chillii'/><h3>EXTRA CHILLI</h3>
    <p>"Turn Up the Heat with Extra Chilli Chips - Crunch with a Kick!"</p>

    <img src={Beef} alt='xxxxx' className='chilli'/><h3>BEEF FLAVOUR</h3>
    <p>"Extra Beef Chips - Bold Flavor, Big Bite!".</p>

    <img src={Smokey} alt='xxxxx' className='chilli'/><h3>SMOKEY SIDE</h3>
    <p>"Extra Smokey Side Chips - Savor the Bold, Embrace the Smoke!".</p>

    {/* <img src={Beef} alt='xxxxx' className='chilli'/><h3>BEEF FLAVOUR</h3>
    <p>"Extra Beef Chips - Bold Flavor, Big Bite!".</p> */}


</div>
</div>


 
   </>
 
  )
  
}


export default Boody