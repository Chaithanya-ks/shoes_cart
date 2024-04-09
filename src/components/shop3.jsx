import React from "react";
import "./shop11.css";
import ProductLists2 from "./ProductLists1";
const Shop1 = () => {
  const products = [
    {
      id: 1,
      name: "Classic Kids' Clog",
      description: "The iconic Classic Kids' Clog is the original and most recognizable Crocs design",
      price: 450,
      imageUrl: "https://media.jdsports.com/i/jdsports/208829_625_P2?$default$&w=670&h=670&bg=rgb(237,237,237)",
    },
    {
      id: 2,
      name: "LiteRide™ Clogs for Kids",
      description: "LiteRide™ Clogs for Kids combine innovative LiteRide™ foam technology with the classic clog design",
      price: 999,
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPODItsT-HxoOYfkyrlTO4dADi4-UrhhRD8A&usqp=CAU",
    },
    {
      id: 3,
      name: "Crocband™ Kids' Clogs",
      description: "The Crocband™ collection features a sporty and retro-inspired design",
      price: 1400,
      imageUrl:"https://www.crocs.in/media/catalog/product/2/0/207006_4s3_alt120.jpg?auto=webp&format=pjpg&width=964&height=800&fit=cover"
    },
    {
      id: 4,
      name: "Fun Lab Character Clogs",
      description: "Fun Lab Character Clogs are designed with colorful and vibrant graphics featuring popular characters and themes",
      price: 1900,
      imageUrl:"https://www.crocs.in/media/catalog/product/2/0/207461_730_alt120.jpeg?auto=webp&format=pjpg&width=964&height=800&fit=cover",
    },
    {
      id: 5,
      name: "Baya Kids' Clogs",
      description: "Baya Kids' Clogs offer a streamlined silhouette and a more refined look compared to the classic clog",
      price: 2000,
      imageUrl:"https://3.imimg.com/data3/XP/CJ/MY-11653256/baya-kids-red-500x500.jpg",
    },
    {
      id: 6,
      name: "Swiftwater™ Wave Kids' Sandals",
      description: " Swiftwater™ Wave Kids' Sandals are designed for outdoor adventures",
      price: 2600,
      imageUrl:"https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/dpr_2.0/2025978_408_alt2.jpg",
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductLists2 name={product.name} key={product.id} description={product.description} imageUrl={product.imageUrl} price={product.price} />
        
      ))}
      
    </div>
  );
};

export default Shop1;
