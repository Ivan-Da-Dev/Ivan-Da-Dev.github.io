import React from 'react'
import render from 'react-dom'
import Head from "next/head"

const currentTime = new Date()
const time = 
currentTime.getHours() > -1 && currentTime.getHours() < 12 ? "morning" : "evening" 

class Greet extends React.Component {
  constructor() {
    super()
    this.state = { 
      content: time === 'morning' ? 'おはようございます' : 'こんばんは',
      strong: time === 'morning' ? 'Morning' : 'Evening',
      img: time === 'morning' ? '../images/morning.jpg' : '../images/night.png' 
    }
  }

  render() {
    return (
      <div>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Home</title>
        <link rel="icon" href="../images/icon.png"></link>
      </Head>
      
      <meta name="description" content="Home page of the Onii Chan website"></meta>
      <meta property="og:image" content="../images/icon.png"></meta>
      <meta name="keywords" content="Onii Chan"></meta>
      <meta name="keywords" content="Onii-Chan"></meta>
      <meta name="keywords" content="Anime Reviews"></meta>
      <meta name="keywords" content="Shitty Anime Reviews"></meta>
      <meta name="keywords" content="Waifus"></meta>
      <meta name="keywords" content="Waifu"></meta>

      <noscript>
        <h1>Please enable JavaScript to view the website.</h1>
        <a href="https://www.enablejavascript.io/en">Click me to see how to enable javascript</a>
        <img src="../images/neko.png"></img>
      </noscript>
      
      <div className="notices">
          <h1 id="subtitle"> {this.state.content} <br></br> <strong id="english"> (Good {this.state.strong}) </strong> </h1>
          <img src= {this.state.img} className="notices_img" id="april_wallpaper"></img>
      </div>
  
      <div className="buttons" style={{display: 'grid'}}>
          <a href="./reviews">Reviews</a>
          <a href="./waifus">Waifus</a>
      </div>
      </div>
    )
  }
}

export default Greet