import '../assets/styles/Home.css'


function Home(){

    return(
        <>
        <section id="home">
            <h2 className="home-h2">Good Food</h2>
            <h2 className="home-h2-two">Great Mood <i class="fa-regular fa-heart"></i></h2>
            <p className="home-p">Delicious meals, made with love delivered fresh to your door.</p>
            <button className="home-btn">ORDER NOW <i class="fa-solid fa-arrow-right-long"></i></button>
            <div className="facilities">
                <div className="facility1">
                   <i className="fa-solid fa-motorcycle"></i>
                   <h5 className="facility-h5">Fast Delivery</h5>
                   <p className="facility-p">On time, every time</p>
                </div>
                <div className="facility2">
                    <i class="fa-solid fa-leaf"></i>
                   <h5 className="facility-h5">Fresh Ingredients</h5>
                   <p className="facility-p">100% fresh & healthy</p>
                </div>
                <div className="facility3">
                   <i class="fa-solid fa-award"></i>
                   <h5 className="facility-h5">Best Quality</h5>
                   <p className="facility-p">Hygienic & safe</p>
                </div>
                <div className="facility4">
                    <i class="fa-regular fa-heart"></i>
                   <h5 className="facility-h5">Made with Love</h5>
                   <p className="facility-p">For our little foodies</p>
                </div>

            </div>
        </section>
        
        </>
    )
}

export default Home