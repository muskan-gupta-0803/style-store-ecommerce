import "../Products/ProductPage.css";

export function ProductPage(){
    return(
        <main className="main-container-prod">
            <aside className="filter-sidenav">
                <div className="f-title"> 
                    <span>Filters</span>
                    <span className="clr-filter">Clear</span>
                </div>

                <form action="" className="filter-form">
                    <label for="price" className="fs-md fw-semibold">
                        Price 
                    </label>
                    <input type="range" name="price" id="" />

                    <label for="category" className="fs-md fw-semibold">
                        Category
                    </label>
                    <label for="rating"><input type="checkbox" name="rating" id="" />Shirts</label>
                    <label for="rating"><input type="checkbox" name="rating" id="" />Shirts</label>
                    <label for="rating"><input type="checkbox" name="rating" id="" />Shirts</label>

                    <label for="rating" className="fs-md fw-semibold">
                            Rating
                    </label>

                    <label for="rating"><input type="radio" name="rating" id="" />4 Stars & above</label>
                    <label for="rating"><input type="radio" name="rating" id="" />4 Stars & above</label>
                    <label for="rating"><input type="radio" name="rating" id="" />4 Stars & above</label>
                    <label for="rating"><input type="radio" name="rating" id="" />4 Stars & above</label>

                    <label for="sort" className="fs-md fw-semibold">
                        Rating
                    </label>

                    <label for="sort"><input type="radio" name="rating" id="" />Price-low to high</label>
                    <label for="sort"><input type="radio" name="rating" id="" />Price-high to low</label>

                </form>

            </aside>

            <section className="prod-section">
                <div className="card br-sm">
                    <img className="card-img br-sm img-responsive" src="https://picsum.photos/250/250" alt=""/>
                    <span className="close-icon"><i className="fas fa-heart"></i></span>
                    <div className="card-body">
                    <h3 className="card-title">Summer T-shirt</h3>
                    <small className="card-subtitle fw-semibold">&#8377; 800</small>
                    <a href=""><button className="btn btn-primary add-cart">Add to Cart</button></a>
                    </div>
                </div>

                <div className="card br-sm">
                    <img className="card-img br-sm img-responsive" src="https://picsum.photos/250/250" alt=""/>
                    <span className="close-icon"><i className="fas fa-heart"></i></span>
                    <div className="card-body">
                    <h3 className="card-title">Summer T-shirt</h3>
                    <small className="card-subtitle fw-semibold">&#8377; 800</small>
                    <a href=""><button className="btn btn-primary add-cart">Add to Cart</button></a>
                    </div>
                </div>

                <div className="card br-sm">
                    <img className="card-img br-sm img-responsive" src="https://picsum.photos/250/250" alt=""/>
                    <span className="close-icon"><i className="fas fa-heart"></i></span>
                    <div className="card-body">
                    <h3 className="card-title">Summer T-shirt</h3>
                    <small className="card-subtitle fw-semibold">&#8377; 800</small>
                    <a href=""><button className="btn btn-primary add-cart">Add to Cart</button></a>
                    </div>
                </div>

                <div className="card br-sm">
                    <img className="card-img br-sm img-responsive" src="https://picsum.photos/250/250" alt=""/>
                    <span className="close-icon"><i className="fas fa-heart"></i></span>
                    <div className="card-body">
                    <h3 className="card-title">Summer T-shirt</h3>
                    <small className="card-subtitle fw-semibold">&#8377; 800</small>
                    <a href=""><button className="btn btn-primary add-cart">Add to Cart</button></a>
                    </div>
                </div>

                <div className="card br-sm">
                    <img className="card-img br-sm img-responsive" src="https://picsum.photos/250/250" alt=""/>
                    <span className="close-icon"><i className="fas fa-heart"></i></span>
                    <div className="card-body">
                    <h3 className="card-title">Summer T-shirt</h3>
                    <small className="card-subtitle fw-semibold">&#8377; 800</small>
                    <a href=""><button className="btn btn-primary add-cart">Add to Cart</button></a>
                    </div>
                </div>

                <div className="card br-sm">
                    <img className="card-img br-sm img-responsive" src="https://picsum.photos/250/250" alt=""/>
                    <span className="close-icon"><i className="fas fa-heart"></i></span>
                    <div className="card-body">
                    <h3 className="card-title">Summer T-shirt</h3>
                    <small className="card-subtitle fw-semibold">&#8377; 800</small>
                    <a href=""><button className="btn btn-primary add-cart">Add to Cart</button></a>
                    </div>
                </div>

            </section>

        </main>
    )
}