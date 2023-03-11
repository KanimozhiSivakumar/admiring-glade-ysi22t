import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Details
        acess="✔️"
        name="kani"
        batch="b42WD"
        img="https://th.bing.com/th/id/R.62d89b63939e47cb3ffe3f7ae393e993?rik=lGu2645rHTNd5A&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16000000%2fPretty-Roses-roses-16092965-1600-1200.jpg&ehk=zSeYv1olh36uA7kSohxig7M21jwkhvC19kjtn0GL6LI%3d&risl=&pid=ImgRaw&r=0"
        alt="rose"
      />
      <Details
        acess="❌"
        name="vani"
        batch="b43WD"
        img="https://th.bing.com/th/id/R.ca04ea76734a682337ed22f606944e43?rik=U88rUfmtvbfTqQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f--rmAcAnB1hk%2fT-B6-pM0E4I%2fAAAAAAAADkA%2faSk9Ib1xFGU%2fs1600%2fRose-Flower_www-free-wall-paper-com-22.jpg&ehk=joCwQEKJ5OCFzYvWuOb17iXRyXQ218a%2bNfvUvJtBCQc%3d&risl=&pid=ImgRaw&r=0"
        alt="rose"
      />
      <Details
        acess="✔️"
        name="mani"
        batch="b41WD"
        img="https://th.bing.com/th/id/OIP.f-reHjkYdUCf5ltHcAFlZQHaG6?pid=ImgDet&rs=1"
        alt="rose"
      />
    </div>
  );
}

function Details(props) {
  return (
    <div className="cart">
      <h1>
        <span>{props.acess}</span>
        {props.name}
      </h1>
      <img src={props.img} alt={props.name} />
      <p>{props.batch}</p>
    </div>
  );
}
