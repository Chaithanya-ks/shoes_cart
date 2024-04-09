import React from "react";
import "./shop11.css";
import ProductLists from "./ProductLists";
const Shop1 = () => {
  const products = [
    {
      id: 1,
      name: "Brogues",
      description: "Brogues are characterized by decorative perforations and wingtip detailing. ",
      price: 2000,
      imageUrl: "https://5.imimg.com/data5/BX/FI/JE/SELLER-3922440/dark-dual-shade-tan-formal-wingtip-brogue-height-increasing-leather-shoes-for-men-500x500.jpg",
    },
    {
      id: 2,
      name: "Chelsea Boots",
      description: "Chelsea boots are ankle-high boots with an elastic side panel. Made from polished leather",
      price: 3000,
      imageUrl:"https://img01.ztat.net/article/spp-media-p1/9d4a897555ff4305bb5fd42d7553161c/8aaddc43f4dc4c008140d29f4247e518.jpg?imwidth=1800&filter=packshot",
    },
    {
      id: 3,
      name: "Oxford Shoes",
      description: "Oxford shoes are characterized by a closed lacing system, a low heel, and a sleek, formal design. ",
      price: 4000,
      imageUrl:"https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/v/u/u/-original-imagg6kznrxes9qf.jpeg?q=90",
    },
    {
      id: 4,
      name: "Loafers",
      description: "Loafers are slip-on shoes known for their comfort and versatility.",
      price: 3500,
      imageUrl:"https://assets.ajio.com/medias/sys_master/root/20230623/QnPf/6494cf2242f9e729d77ed303/-473Wx593H-464555182-blue-MODEL.jpg",
    },
    {
      id: 5,
      name: "Derby Shoes",
      description: " Derby shoes offer a more relaxed fit,make you feel comfortable",
      price: 1500,
      imageUrl:"https://imagescdn.thecollective.in/img/app/product/7/731549-8135716.jpg",
    },
    {
      id: 6,
      name: "Monk Strap Shoes",
      description: "Monk strap shoes feature a distinctive strap and buckle closure, adding ",
      price: 999,
      imageUrl:"https://www.misiuacademy.com/wp-content/uploads/2018/10/Photo-2019-10-11-15-21-40.jpg",
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductLists name={product.name} key={product.id} description={product.description} imageUrl={product.imageUrl} price={product.price} />
        
      ))}
      
    </div>
  );
};

export default Shop1;
