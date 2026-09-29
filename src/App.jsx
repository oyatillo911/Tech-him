import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

function App() {
  const [data, setdata] = useState([
    {
      id: 1,
      img: "/imgs/one_cards.svg",
      name: "Iphone 14 promax 256 gig",
      price: "$930.90",
      rating: "/imgs/rating.svg",
      brand: "Apple",
      modelName: "Iphone 14 Pro Max",
      screenSize: "6.7 Inches",
      hardDiskSize: "256 GB",
      cpuModel: "A16 Bionic",
      ramMemory: "6 GB",
      multiImgone:"https://olcha.uz/image/675x900/products/2021-09-24/apple-iphone-13-pro-max-256gb-25295-0.jpeg",
      multiImgtwo:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGOyiXm0Bw1_JYtyRxqCUITOYSmlIM8TgvVccQpjl5yL6V5x5I",
      multiImgthree:"https://castore.uz/upload/iblock/3e3/s36uzouahtr760kzqef78yjcjdolyrfc/smartfon-iphone-13-pro-max-128gb-silver-mllq3rk-a-2.jpg",
      multiImgfour:"https://castore.uz/upload/iblock/5d8/s5xl2v9wbb1v57atis0fff6j2bndltpp/smartfon-iphone-13-pro-max-128gb-silver-mllq3rk-a.gif",
      multiImgfive:"/imgs/smartfon-iphone-13-pro-max-128gb-silver-mllq3rk-a-4-removebg-preview.png",
    },
    {
      id: 2,
      img: "/imgs/one_cards2.svg",
      name: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
      price: "$2535.00",
      rating: "/imgs/rating2.svg",
      brand: "Apple",
      modelName: "Macbook Pro",
      screenSize: "13.3 Inches",
      hardDiskSize: "256 GB",
      cpuModel: "core i5",
      ramMemory: "8 GB",
      multiImgone:"/imgs/products_multi.svg",
      multiImgtwo:"/imgs/products_multi2.svg",
      multiImgthree:"/imgs/products_multi3.svg",
      multiImgfour:"/imgs/products_multi4.svg",
      multiImgfive:"/imgs/products_multi5.svg",
    },
    {
      id: 3,
      img: "/imgs/one_cards3.svg",
      name: "SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB",
      price: "$1018.00",
      rating: "/imgs/rating3.svg",
      brand: "Samsung",
      modelName: "Galaxy S23 Ultra",
      screenSize: "6.8 Inches",
      hardDiskSize: "256 GB",
      cpuModel: "Snapdragon 8 Gen 2",
      ramMemory: "8 GB",
      multiImgone:"/imgs/products_multi.svg",
      multiImgtwo:"/imgs/products_multi2.svg",
      multiImgthree:"/imgs/products_multi3.svg",
      multiImgfour:"/imgs/products_multi4.svg",
      multiImgfive:"/imgs/products_multi5.svg",
    },
    {
      id: 4,
      img: "/imgs/one_cards4.svg",
      name: "VR VisionTech X1",
      price: " $1,399.00",
      rating: "/imgs/rating4.svg",
      brand: "VisionTech",
      modelName: "VR VisionTech X1",
      screenSize: "5.5 Inches",
      hardDiskSize: "128 GB",
      cpuModel: "Snapdragon XR2",
      ramMemory: "6 GB",
      multiImgone:"/imgs/products_multi.svg",
      multiImgtwo:"/imgs/products_multi2.svg",
      multiImgthree:"/imgs/products_multi3.svg",
      multiImgfour:"/imgs/products_multi4.svg",
      multiImgfive:"/imgs/products_multi5.svg",
    },
  ])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/products/:id' element={<Products data={data} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App