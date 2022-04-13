import "../Homepage/Homepage.css";
import TShirts from "../../assets/category-img/shirts.jpg";
import FormalShirts from "../../assets/category-img/formal-shirts.jpg";
import CasualShirts from "../../assets/category-img/casual-shirts.jpg";
import Jeans from "../../assets/category-img/jeans.jpg";
import Trousers from "../../assets/category-img/trousers.jpg";

export default function Homepage(){
    return(

        <main className="main-container">
          {/*  FIRST SECTION  */}
          <div className="categories">
              <div className="card br-md">
                  <img className="card-img br-md" src={TShirts} alt="T-shirts"/>
                  <span className="overlay-text br-md">T-SHIRTS</span>  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src={FormalShirts} alt="Formal Shirts"/>
                  <span className="overlay-text br-md">FORMAL SHIRTS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src={CasualShirts} alt="Casual Shirts"/>
                  <span className="overlay-text br-md">CASUAL SHIRTS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src={Jeans} alt="Jeans"/>
                  <span className="overlay-text br-md">JEANS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src={Trousers} alt="Trousers"/>
                  <span className="overlay-text br-md">TROUSERS</span>
                  
              </div>

          </div>

          {/*  SECOND SECTION  */}
          <div className="mid-container">
              <div className="text-data">
                  <small>THE STYLE STORE</small>
                  <h1>New Styles For the style changers</h1>
                  <a href="#">
                      <button className="btn btn-primary">View all Products</button>
                  </a>
              </div>
          </div>

          <div className="last-container">

              <div className="card-horizontal br-sm card-shadow">
                  <img className="card-img br-sm cd-img img-responsive" src={TShirts} alt="Tshirts"/>
                  <div className="card-body">
                      <small className="card-subtitle">NEW ARRIVALS</small>
                      <h3 className="card-title cd-title">Title</h3>
                      <p className="card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    
                  </div>
              </div> 

              <div className="card-horizontal br-sm card-shadow">
                  <img className="card-img br-sm cd-img img-responsive" src={TShirts} alt="Tshirts"/>
                  <div className="card-body">
                      <small className="card-subtitle">NEW ARRIVALS</small>
                      <h3 className="card-title cd-title">Title</h3>
                      <p className="card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    
                  </div>
                </div> 

          </div>
          
      </main>
    )
}