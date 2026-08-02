import React from "react";
import "./About.css";
import {
FaBoxOpen,
FaTruck,
FaMedal,
FaTags
} from "react-icons/fa";

const features=[
{
icon:<FaBoxOpen/>,
title:"Wide Product Range",
description:"A diverse range of products across multiple categories to meet global demands."
},
{
icon:<FaTruck/>,
title:"Timely Delivery",
description:"Efficient logistics and on-time delivery for smooth business operations."
},
{
icon:<FaMedal/>,
title:"Quality Assurance",
description:"Strict quality control and international standards in every process."
},
{
icon:<FaTags/>,
title:"Competitive Pricing",
description:"Best quality products at competitive prices for long-term partnerships."
}
];

const About=()=>{

return(

<section className="about" id="about">

<div className="container about-container">

<div className="about-left">

<span className="section-tag">
ABOUT US
</span>

<h2>
Your Reliable Export
<br/>
Partner from India
</h2>

<p>
Swanora Global is a trusted exporter of premium Indian agricultural products, delivering quality spices, fresh fruits, cereals, pulses, frozen foods, and other commodities to global markets. We are committed to international quality standards, reliable service, and timely deliveries while building long-term partnerships through trust, transparency, and excellence. Our vision is to showcase India's agricultural strength and create lasting value for customers worldwide.

</p>

<button className="about-btn">
Read More About Us
</button>

</div>

<div className="about-right">

{
features.map((item,index)=>(

<div className="about-feature" key={index}>

<div className="about-icon">
{item.icon}
</div>

<div>

<h4>{item.title}</h4>

<p>{item.description}</p>

</div>

</div>

))
}

</div>

</div>

</section>

);

};

export default About;