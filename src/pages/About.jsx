import '../assets/styles/About.css'
import restautant2 from '../assets/images/restaurant2.jpg'
import founder from '../assets/images/founder.jpg'
import founder2 from '../assets/images/founder2.jpg'
function About(){


    return(
        <>
        <section id="about">
            <div className="about-left">
               <h2 className="about-left-h2">Our Story: Small Bites, Big Heart.</h2>
               <div className="about-text">
                <div className="about-text-left">
                    <i className="fa-solid fa-jar"></i>
                    <p className="about-text-left-p">From a humble beginning, we started as a first big restaurant space or spices, deliver the traditional Bites we have in its modern preparation, and focus on the draws in real understanding our restaurant we are understanding delivery.</p>
                </div>
                <div className="about-text-right">
                   <div className="about-text-right-one">
                    <i class="fa-solid fa-kitchen-set"></i>
                    <p className="about-text-right-one-p1">Our mission is a outforce to make with passion and flows with our brands to main, mainfarm and fairy identity.</p>
                   </div>
                   <div className="about-text-right-two">
                    <i class="fa-solid fa-handshake"></i>
                    <p className="about-text-right-two-p1">Our commitment: serves into the meals of health, quality and handpicked materials and employees in our company.</p>
                   </div>
                </div>
               </div>
               
               <div className="founders">
                <h4 className="about-left-h4">Meet Our Founders</h4>
                   <div className="founder1">
                <div className="founder1-left">
                   <img src={founder} alt="" className='founder-img'/>
                </div>
                <div className="founder-right">
                    <h5 className="founder1-right-h5">Jame Smith</h5>
                    <p className="founder1-right-p">"Passionate about flavor"</p>
                </div>
               </div>

                <div className="founder2">
                <div className="founder2-left">
                   <img src={founder2} alt="" className='founder-img'/>
                </div>
                <div className="founder2-right">
                    <h5 className="founder2-right-h5">Sarlina Ratun</h5>
                    <p className="founder2-right-p">"We lieve as to connecting flavor"</p>
                </div>
               </div>
               </div>
              
            </div>
            <div className="about-right">
                <img src={restautant2} alt="" className='about-img'/>
            </div>
        </section>
        
        
        </>
    )
}

export default About