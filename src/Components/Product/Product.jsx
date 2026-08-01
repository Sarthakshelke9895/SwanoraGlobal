import React from "react";
import "./Product.css";
import { FaArrowRight } from "react-icons/fa";

const products=[
{
title:"Agricultural Products",
image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80"
},
{
title:"Textiles & Fabrics",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
},
{
title:"Handicrafts",
image:"https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=700&q=80"
},
{
title:"Engineering Goods",
image:"https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=700&q=80"
},
{
title:"Other Products",
image:"https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=700&q=80"
}
];

const Products=()=>{

return(

<section className="products" id="products">

<div className="container">

<div className="section-heading">

<span>OUR PRODUCTS</span>

<h2>
Premium Products, Global Standards
</h2>

</div>

<div className="products-grid">

{

products.map((item,index)=>(

<div className="product-card" key={index}>

<img
src={item.image}
alt={item.title}
/>

<div className="product-content">

<h4>{item.title}</h4>

<FaArrowRight/>

</div>

</div>

))

}

</div>

<div className="products-btn">

<button>

View All Products

</button>

</div>

</div>

</section>

);

};

export default Products;