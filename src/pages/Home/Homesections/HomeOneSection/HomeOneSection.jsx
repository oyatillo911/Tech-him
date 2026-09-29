import "./HomeOneSection.css"

function HomeOneSection() {
  return (
    <>
    <div className="Home_hero">
        <div className="container">
            <div className="hero_info">
                <h1>Tech Heim</h1>
                <h3>"Join the <span>digital revolution</span> "</h3>
                <div className="hero_btn">
                    <button>Explore More</button>
                </div>
            </div>
            <div className="hero_logo">
                <img src="/imgs/hero_logo.svg" alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default HomeOneSection