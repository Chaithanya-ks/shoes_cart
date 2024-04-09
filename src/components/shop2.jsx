import React from "react";
import "./shop11.css";
import ProductLists1 from "./ProductLists1";
const Shop1 = () => {
  const products = [
    {
      id: 1,
      name: "Stiletto Heels",
      description: "Stiletto heels are tall, thin, and pointed heels that can range in height from 2 inches to 10 inches or more ",
      price: 4000,
      imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230624/G8pm/64960998eebac147fce486e2/-473Wx593H-465082435-black-MODEL6.jpg",
    },
    {
      id: 2,
      name: "Wedge Heels",
      description: "Wedge heels feature a solid, wedge-shaped sole that runs under the foot from the back of the shoe to the middle",
      price: 5000,
      imageUrl:"https://www.tiesta.in/cdn/shop/products/WhatsAppImage2022-06-28at3.59.35PM_1_533x.jpg?v=1656413412",
    },
    {
      id: 3,
      name: "Block Heels",
      description: "Block heels have a thicker, squared-off base that provides more stability and support than stilettos. ",
      price: 6000,
      imageUrl:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2F38%2F4a38a463b5a8510d9c65ff999f2bfd4fd2d9e4b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_pumps_highheels%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    },
    {
      id: 4,
      name: "Kitten Heels",
      description: "Kitten heels are short, slender heels typically ranging from 1.5 inches to 2 inches in height..",
      price: 7000,
      imageUrl:"https://assets.ajio.com/medias/sys_master/root/20230216/DOoz/63ee171ef997dde6f4ab6875/-1117Wx1400H-469434161-red-MODEL.jpg",
    },
    {
      id: 5,
      name: "Platform Heels",
      description: " Platform heels have a thick sole under the front part of the foot, in addition to the regular heel height",
      price: 7500,
      imageUrl:"https://confettiweddingstas.com.au/cdn/shop/products/16511232657120fbeff83fb8e0e51dc9a9e7215461.webp?v=1659855436",
    },
    {
      id: 6,
      name: "Ankle Strap Heels",
      description: "Ankle strap heels feature a strap that wraps around the ankle, adding a stylish and secure element to the shoe.  ",
      price: 6000,
      imageUrl:"https://cdn.deepikapadukone.com/deepika_padukone/uploads/media/source/deepikapadukonenov22closetdolcevee103.jpg",
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductLists1 name={product.name} key={product.id} description={product.description} imageUrl={product.imageUrl} price={product.price} />
        
      ))}
      
    </div>
  );
};

export default Shop1;
