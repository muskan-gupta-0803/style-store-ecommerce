import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">     

      <header className="header">
        <div className="lilac-navbar">
            {/* logo */}
            <a className="logo" href="/index.html">
                <div className="lilac-nav-logo nav-logo">
                    Style Store
                </div>
            </a>    

            {/*  nav search bar  */}
            <form className="form">
                <input type="search" name="" id="" className="nav-search br-sm" placeholder="Search" />
                <button type="submit" className="search-icon">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        
            {/*  nav links  */}
            <div className="lilac-nav-links">
                <a href="./pages/login.html" className="lilac-nav-items"><span className="btn btn-link login-button">Login</span></a>
                <a href="./pages/wishlist.html" className="lilac-nav-items">
                    <span className="icon-span">
                        <div className="num-badge">8</div>
                        <i className="far fa-heart"></i>  
                    </span>
                
                </a>
                <a href="/pages/cart.html" className="lilac-nav-items">
                    <span className="icon-span">
                        <div className="num-badge">10</div>
                        <i className="fas fa-shopping-cart"></i>        
                    </span>
                </a>
                <a href="#" className="lilac-nav-items">
                    <span><i className="fas fa-bars"></i></span>
                </a>
            </div>
        
        </div>

      </header>

      <main className="main-container">
          {/*  FIRST SECTION  */}
          <div className="categories">
              <div className="card br-md">
                  <img className="card-img br-md" src="https://picsum.photos/250/150" alt=""/>
                  <span className="overlay-text br-md">SHIRTS</span>  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src="https://picsum.photos/250/150" alt=""/>
                  <span className="overlay-text br-md">SHIRTS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src="https://picsum.photos/250/150" alt=""/>
                  <span className="overlay-text br-md">SHIRTS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src="https://picsum.photos/250/150" alt=""/>
                  <span className="overlay-text br-md">SHIRTS</span>
                  
              </div>

              <div className="card br-md">
                  <img className="card-img br-md" src="https://picsum.photos/250/150" alt=""/>
                  <span className="overlay-text br-md">SHIRTS</span>
                  
              </div>

          </div>

          {/*  SECOND SECTION  */}
          <div className="mid-container">


          </div>

          <div className="last-container">

              <div className="card-horizontal br-sm card-shadow">
                  <img className="card-img br-sm cd-img img-responsive" src="https://picsum.photos/250/150" alt=""/>
                  <div className="card-body">
                      <small className="card-subtitle">NEW ARRIVALS</small>
                      <h3 className="card-title cd-title">Title</h3>
                      <p className="card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    
                  </div>
              </div> 

              <div className="card-horizontal br-sm card-shadow">
                  <img className="card-img br-sm cd-img img-responsive" src="https://picsum.photos/250/150" alt=""/>
                  <div className="card-body">
                      <small className="card-subtitle">NEW ARRIVALS</small>
                      <h3 className="card-title cd-title">Title</h3>
                      <p className="card-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    
                  </div>
                </div> 

          </div>

          
      </main>
      
      <footer className="footer">
              <p className="footer-text">&copy; 2022 Style store | Made by Muskan Gupta</p>
      </footer>
    </div>
  );
}

export default App;
