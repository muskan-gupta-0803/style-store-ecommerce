import "../Homepage/Homepage.css";
import { Link } from "react-router-dom";
import { tshirtImg,casualShirtsImg,formalShirtsImg,jeansImg,trousersImg } from "../../assets";

export function Homepage(){
    return(

        <main className="main-container">
         
          <div className="categories">
              <div className="card br-md">
                  <img className="card-img br-md" src={tshirtImg} alt="T-shirts"/>
                  <span className="overlay-text br-md">T-SHIRTS</span>  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src={formalShirtsImg} alt="Formal Shirts"/>
                  <span className="overlay-text br-md">FORMAL SHIRTS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src={casualShirtsImg} alt="Casual Shirts"/>
                  <span className="overlay-text br-md">CASUAL SHIRTS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src={jeansImg} alt="Jeans"/>
                  <span className="overlay-text br-md">JEANS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src={trousersImg} alt="Trousers"/>
                  <span className="overlay-text br-md">TROUSERS</span>
                  
              </div>

          </div>

          <div className="mid-container">
              <div className="text-data">
                  <small>THE STYLE STORE</small>
                  <h1>New Styles For the style changers</h1>
                  <Link to="/products">
                      <button className="btn btn-primary">View all Products</button>
                  </Link>
              </div>
          </div>

          <div className="last-container">

              <div className="card-horizontal br-sm card-shadow">
                  <img className="card-img br-sm cd-img img-responsive" src={tshirtImg} alt="Tshirts"/>
                  <div className="card-body">
                      <small className="card-subtitle">NEW ARRIVALS</small>
                      <h3 className="card-title cd-title">Title</h3>
                      <p className="card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    
                  </div>
              </div> 

              <div className="card-horizontal br-sm card-shadow">
                  <img className="card-img br-sm cd-img img-responsive" src={tshirtImg} alt="Tshirts"/>
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