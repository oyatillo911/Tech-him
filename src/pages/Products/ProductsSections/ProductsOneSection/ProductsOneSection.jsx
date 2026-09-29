import "./ProductsOneSection.css"
import { IoChevronForward } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";
import { CiDeliveryTruck } from "react-icons/ci";
import { useParams } from "react-router-dom";
function ProductsOneSection({data}) {
    const {id} = useParams()
    console.log(id,data);
    const filterinfo = data.find((item) =>{
        return item.id == id
    })
    return (
        <>
            <div className="one_products_hero">
                <div className="container">
                    <div className="hero_links">
                        <span>Home</span>
                        <div className="chevron">
                            <IoChevronForward />
                        </div>
                        <span>Products</span>
                        <div className="chevron">
                            <IoChevronForward />
                        </div>
                        <span>Laptops</span>
                    </div>
                    <div className="hero_box">
                        <div className="cards">
                            <div className="main_logo">
                                <img src= {filterinfo.img} alt="" />
                            </div>
                            <div className="multi_logo">
                                <div className="multi_img">
                                    <img src= {filterinfo.multiImgone} alt="" />
                                </div>
                                <div className="multi_img">
                                    <img src= {filterinfo.multiImgtwo} alt="" />
                                </div>
                                <div className="multi_img">
                                    <img src= {filterinfo.multiImgthree}alt="" />
                                </div>
                                <div className="multi_img">
                                    <img src= {filterinfo.multiImgfour} alt="" />
                                </div>
                                <div className="multi_img">
                                    <img src= {filterinfo.multiImgfive} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="cards_info">
                            <h5>{filterinfo.name}</h5>
                            <div className="rating">
                                <div className="rating_img">
                                    <img src= {filterinfo.rating} alt="" />
                                </div>
                                <div className="border_right">

                                </div>
                                <span>sold 125</span>
                            </div>
                            <div className="stock_box">
                                <div className="stock_icon">
                                    <AiOutlineShop />
                                    <span>In Stock</span>
                                </div>
                                <div className="stock_icon">
                                    <VscVerified />
                                    <span>Guaranteed</span>
                                </div>
                                <div className="stock_icon">
                                    <CiDeliveryTruck />
                                    <span>Free Delivery</span>
                                </div>
                            </div>
                            <div className="color">
                                <span>Select color</span>
                                <div className="select_color">
                                    <div className="edit_color">

                                    </div>
                                    <div className="edit_color2">
                                    </div>
                                </div>
                            </div>
                            <div className="product_info">
                                <ul className="brand">
                                    <li>brand</li>
                                    <li>Model Name </li>
                                    <li>Screen Size</li>
                                    <li>Hard Disk Size</li>
                                    <li>CPU Model</li>
                                    <li>Ram Memory</li>
                                </ul>
                                <div className="tech_info">
                                    <span>{filterinfo.brand}</span>
                                    <span>{filterinfo.modelName}</span>
                                    <span>{filterinfo.screenSize}</span>
                                    <span> {filterinfo.hardDiskSize} </span>
                                    <span> {filterinfo.cpuModel} </span>
                                    <span> {filterinfo.ramMemory} </span>
                                </div>
                            </div>
                        </div>
                        <div className="Price_pay">
                            <div className="price">
                                <h5>{filterinfo.price}</h5>
                                <div className="sale">
                                    <img src="/imgs/products_hero_sale.svg" alt="" />
                                    <h6>-12%</h6>
                                </div>
                            </div>
                            <div className="last_price">
                                <span>last price</span>
                                <span>$ 1410,87</span>
                            </div>
                            <div className="pay_input">
                                <div className="radio">
                                    <input type="radio" name="pay" />
                                    <span>Pay Now</span>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="pay" />
                                    <span>Buy in installments</span>
                                </div>
                            </div>
                            <div className="choose">
                                <span>choose your installments period</span>
                            </div>
                            <div className="month">
                                <div className="month_number">
                                    <h6>3</h6>
                                    <span>Months</span>
                                </div>
                                <div className="month_number">
                                    <h6>6</h6>
                                    <span>Months</span>
                                </div>
                                <div className="month_number">
                                    <h6>12</h6>
                                    <span>Months</span>
                                </div>
                                <div className="month_number">
                                    <h6>18</h6>
                                    <span>Months</span>
                                </div>
                            </div>
                            <div className="Price_pay_btn">
                                <button><span>Buy Now</span></button>
                                <button><span>Add to cart</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}



export default ProductsOneSection