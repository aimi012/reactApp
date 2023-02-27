function main({badgeText,img, rating, reviewCount, country, title, price}) {
 return (
        <div className="card">
            <span>{badgeText}</span>
            <div className="img">
            <img src={img}alt="" />
            <h3>{rating}</h3> <span>
                {reviewCount} . 
                {country}</span>
            <p>{title}</p>
            <p>{price}</p>
            </div>
        </div>
 )
}

export default main;

