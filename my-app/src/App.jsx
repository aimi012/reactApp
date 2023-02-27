import "./App.css";
import Nav from "./nav.jsx";
import Main from "./main.jsx";
import Card from "./card.jsx";
import maindata from "./maindata";

function App() {
  
  const RmainData = maindata.map(i => {

    let badgeText
  if(i.open === 0) {
    badgeText = 'SOLD OUT'
  } else if (i.location === 'online') {
    badgeText = 'ONLINE'
  }

    return (
      <Main
      badgeText={badgeText}
      key={i.id}
        {...i}
      />
    );
  });

  return (
    <div className="App">
      <Nav />
      <div className="cllg">
        <img
          src="https://images.designtrends.com/wp-content/uploads/2017/04/Photo-Collage-Template.jpg"
          alt=""
        />
        <h2>Online Experineces </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea
          hic amet fuga doloribus, optio libero, nulla voluptas dolorem sit
          eveniet at provident accusantium error aliquam. Doloribus sint minima
          vitae.
        </p>
      </div>

      <div className="main">{RmainData}</div>
      <div className="card-sec">
        <Card
          img="https://th.bing.com/th/id/R.1de2178ae7b60f8d5218a236bb8b5aca?rik=zsg3oG12PJiHig&riu=http%3a%2f%2f2.bp.blogspot.com%2f-YibuMeKJjOs%2fVXvffrBs1FI%2fAAAAAAAAEMY%2fkQhEJKTgYMw%2fs1600%2fd71655079108006867ec5e2df323f2a2.jpg&ehk=nPR2FxNjC8bEmdw1CdWEDqbkrIrMdIiRD2HXlSaIAJA%3d&risl=&pid=ImgRaw&r=0"
          name="Cat 1"
          tel="011"
          email="email1"
        />
        <Card
          img="https://i.pinimg.com/originals/68/c4/c9/68c4c9942917d5007f070fb556d2a73e.jpg"
          name="cat 2"
          tel="012"
          email="email2"
        />
        <Card
          img="https://th.bing.com/th/id/R.50bc4fefb549d6f83f46ca4bd7e03b53?rik=zNIFfhwZTTRDMA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ZVmki1casr8%2fVYG-B8RlsSI%2fAAAAAAABYsQ%2faLPcAtwOLC8%2fs1600%2ffunny-cats-159-37.jpg&ehk=YA8kCbDZhVrzsyHL58x9gRdlrhsxJWRbdrZoi5wbAgs%3d&risl=&pid=ImgRaw&r=0"
          name="cat 3"
          tel="013"
          email="email3"
        />
      </div>
    </div>
  );
}

export default App;
