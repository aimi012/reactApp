function card({img, name, tel, email}) {
  return (
    <div className="contact-main">
      <div className="contact">
        <img src={img} alt="" />
        <h2> {name}</h2>
        <p> {tel} </p>
        <p> {email} </p>
      </div>
    </div>
  );
}

export default card; 