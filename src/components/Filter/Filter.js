export function Filter(){
    return(
        <aside className="filter-sidenav">
                <div className="f-title fw-bold"> 
                    <span>Filters</span>
                    <span className="clr-filter">Clear</span>
                </div>

                <form action="" className="filter-form">
                    <label htmlFor="price" className="fs-md fw-semibold">
                        Price Range
                    </label>
                    <input type="range" name="price" id="" />

                    <label htmlFor="category" className="fs-md fw-semibold">
                        Category:
                    </label>
                    <label htmlFor="rating"><input type="checkbox" name="rating" id="" />T-Shirts</label>
                    <label htmlFor="rating"><input type="checkbox" name="rating" id="" />Formal Shirts</label>
                    <label htmlFor="rating"><input type="checkbox" name="rating" id="" />Casual Shirts</label>
                    <label htmlFor="rating"><input type="checkbox" name="rating" id="" />Jeans</label>
                    <label htmlFor="rating"><input type="checkbox" name="rating" id="" />Trousers</label>

                    <label htmlFor="rating" className="fs-md fw-semibold">
                            Rating
                    </label>

                    <label htmlFor="rating"><input type="radio" name="rating" id="" />4 Stars & above</label>
                    <label htmlFor="rating"><input type="radio" name="rating" id="" />3 Stars & above</label>
                    <label htmlFor="rating"><input type="radio" name="rating" id="" />2 Stars & above</label>
                    <label htmlFor="rating"><input type="radio" name="rating" id="" />1 Stars & above</label>

                    <label htmlFor="sort" className="fs-md fw-semibold">
                       Price
                    </label>

                    <label htmlFor="sort"><input type="radio" name="rating" id="" />Price-low to high</label>
                    <label htmlFor="sort"><input type="radio" name="rating" id="" />Price-high to low</label>

                </form>

            </aside>
    )
}