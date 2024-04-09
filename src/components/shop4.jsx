import React from "react";
import "./shop11.css";
import ProductLists3 from "./ProductLists3.jsx";
const Shop1 = () => {
  const products = [
    {
      id: 1,
      name: "Running Shoes:",
      description: "Running shoes are designed for athletic activities, providing cushioning, support, and stability",
      price: 2700,
      imageUrl: "https://rukminim1.flixcart.com/image/850/1000/xif0q/shoe/q/i/q/-original-imagqfwasm3wunjw.jpeg?q=90",
    },
    {
      id: 2,
      name: "Classic Leather Sneakers",
      description: "Classic leather sneakers are versatile and timeless footwear.These casual shoes feature  comfortable insole.",
      price: 2400,
      imageUrl:"https://images-static.nykaa.com/media/catalog/product/c/8/c870ab5gy0707_1.jpg",
    },
    {
      id: 3,
      name: "Chelsea Boots",
      description: "Chelsea boots are ankle-length boots with an elastic side panel, making them easy to slip on and off",
      price: 2100,
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdZ3MrHHhQ3AKjUun9Rrxl5wHz6y4oFgxPw&usqp=CAU"
    },
    {
      id: 4,
      name: "Loafers",
      description: " Loafers are slip-on shoes known for their comfortable and casual style",
      price: 2000,
      imageUrl:"https://img.tatacliq.com/images/i9/658Wx734H/MP000000015979780_658Wx734H_202301070218081.jpeg",
    },
    {
      id: 5,
      name: "Sneakers:",
      description: " Sneakers are comfortable and casual athletic shoes designed for everyday wear",
      price: 2900,
      imageUrl:"https://i.pinimg.com/736x/39/f6/4f/39f64fac18d153b1dbd4f8c938dd11be.jpg",
    },
    {
      id: 6,
      name: "Hiking Boots",
      description: " Hiking boots are rugged footwear designed for outdoor activities",
      price: 3200,
      imageUrl:"https://contents.mediadecathlon.com/p1692773/33a46f2e8c97968fe17f38c64ef39067/p1692773.jpg?format=auto&quality=70&f=650x0",
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductLists3 name={product.name} key={product.id} description={product.description} imageUrl={product.imageUrl} price={product.price} />
        
      ))}
      
    </div>
  );
};

export default Shop1;
