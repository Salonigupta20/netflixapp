import React from 'react';
import ReactDOM from 'react-dom';
import img1 from "./images/naruto.jpg";
import img2 from "./images/haikyu.jpg";
import img3 from "./images/aot.jpg";
import img4 from "./images/DS.jpg";
import img5 from "./images/deathnote.jpg";
import Card from "./Card"
import './index.css';



ReactDOM.render(
  <>
  {/* //<h1 style={{textAlign:"center", textTransform:"capitalize", fontFamily:"cursive"}}> List of Best Anime To Watch</h1> */}
  <h1 className="heading_style">List of Best Anime to watch</h1>
  <Card
    imgsrc={img1}
    title= "Shounen Anime"
    sname="Naruto"
    link="https://www.crunchyroll.com/naruto"
  />
  <Card
    imgsrc={img2}
    title= "Shounen Anime"
    sname="Haikyu"
    link="https://www.crunchyroll.com/haikyu"
  />
  <Card
    imgsrc={img3}
    title= "Shounen Anime"
    sname="Attack on Titan"
    link="https://attackontitan.fandom.com/wiki/Attack_on_Titan_(Anime)"
  />
  <Card
    imgsrc={img4}
    title= "Shounen Anime"
    sname="Demon Slayer"
    link="https://www.netflix.com/in/title/81091393"
  />
  <Card
    imgsrc={img5}
    title= "Shonen Anime"
    sname="DeathNote"
    link="https://www.netflix.com/in/title/70204970"
  />
  </>
,document.getElementById("root")
);
