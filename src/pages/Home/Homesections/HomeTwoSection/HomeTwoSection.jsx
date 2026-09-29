
import "./HomeTwoSection.css"
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom'
function HomeTwoSection({data}) {

    return (
        <>
            <section className="Home_section_one">
                <div className="container">
                    <div className="one_info">
                        <h3>New Products</h3>
                        <div className="one_btn">
                            <button><span>View all</span> <IoChevronForward />
                            </button>
                        </div>
                    </div>
                    <div className="one_box">
                       {
                        data.map((item , i)  =>{
                            return  <Link to={`/products/${item.id}`} className="one_cards" key={i} >
                            <div className="cards_logo">
                                <img src= {item.img} alt="" />
                            </div>
                            <hr />
                            <div className="cards_info">
                                <div className="model">
                                <span>{item.name}</span>
                                </div>
                                <div className="rating">
                                <span>{item.price}</span>
                                <img src={item.rating} alt="" />
                            </div>
                            </div>
                            
                        </Link>
                        })
                       }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTwoSection