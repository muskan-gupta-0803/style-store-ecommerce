export function ProductCard({
    _id,
    title,
    categoryName,
    prodImg,
    rating,
    reviews,
    originalPrice,
    discountPrice,
    discountRate,
}) {
    return (
        <div className="card br-sm">
            <img
                className="card-img br-sm img-responsive prod-img"
                src={prodImg}
                alt={title}
            />
            <span className="close-icon">
                <i className="fas fa-heart"></i>
            </span>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <small className="grey-text card-rating">
                    {rating}
                    <i className="fas fa-star"></i>| {reviews} ratings
                </small>

                <div className="card-price">
                    <span className="fw-bold">&#8377; {discountPrice}</span>
                    <span className="text-striked grey-text">
                        &#8377; {originalPrice}
                    </span>
                    <span className="discount-text">({discountRate}% OFF)</span>
                </div>
                <a href="">
                    <button className="btn btn-primary add-cart">
                        Add to Cart
                    </button>
                </a>
            </div>
        </div>
    );
}
