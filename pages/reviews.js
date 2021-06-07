import React, { useEffect } from 'react'
import Head from "next/head"
import list from '../components/review_list.js'
import Disqus from "disqus-react"
import getSeasonModule from "../components/getseason.js"
const getSeason = getSeasonModule.getSeason
import Navbar from "../components/navbar"
import Footer from "../components/footer"

class Reviews extends React.Component {  
    constructor(){
        super()
        this.state = {
            reviews: list.list,
            categories: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        }
    }
    
    render() {      
      const disqusShortname = "oniichann-tk"
      const disqusConfig = {
        url: "https://oniichann.tk/reviews",
        identifier: "reviews",
        title: "reviews"
      }

        return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Reviews</title>
                <link rel="icon" href="../review-images/icon.png" />

                <meta name="description" content="A website where I post shitty reviews on animes" />
                <meta property="og:image" content="../review-images/icon.png" />
                
                <meta name="keywords" content="Onii Chan" />
                <meta name="keywords" content="Onii-Chan" />
                <meta name="keywords" content="Anime Reviews" />
                <meta name="keywords" content="Shitty Anime Reviews" />
            </Head>

            <Navbar></Navbar>


            {
              this.state.categories.map(cat => {
                return (
                  <div class="anime_list" id={cat} style={{display: 'inherit'}}>
                      <h1 id="iden">{cat}</h1>
                      
                      {
                        this.state.reviews.filter(r => r.title.toLowerCase().startsWith(cat.toLowerCase())).length < 1 ?
                          <h2 className='empty'>No reviews yet</h2>
                        :
                      this.state.reviews.filter(r => r.title.toLowerCase().startsWith(cat.toLowerCase())).map(review => {
                              const newDesc = review.desc.split(/\n/g).map(g => {
                                return(
                                  <div>
                                    {g}<br></br>
                                  </div>
                                )
                              })
                    
                              const img = `../review-images/${review.img}`
                              const bg = `../review-images/${review.bg}`
                              const season = `${getSeason(review.date.split(' ')[0].trim())} ${review.date.split(",")[1].trim()} • ${
                                review.seasons.filter(s => 
                                  s.type !== 'movie' && 
                                  s.type !== 'Spin off' && 
                                  s.type !== 'sequel' &&
                                  s.type !== 'prequel'
                                  ).length - 1 >= 1 ? `${review.seasons.filter(s => 
                                    s.type !== 'movie' && 
                                    s.type !== 'Spin off' && 
                                    s.type !== 'sequel' &&
                                    s.type !== 'prequel').length + 1} Seasons` : "1 Season"
                              }${
                                review.seasons.filter(s => s.type === 'movie').length >= 1 ? ` • ${review.seasons.filter(s => s.type === 'movie').length} Movies` : ""
                              }${
                                review.seasons.filter(s => s.type === 'Spin off').length >= 1 ? ` • ${review.seasons.filter(s => s.type === 'Spin off').length} Spin offs` : ""
                              }${
                                review.seasons.filter(s => s.type === 'prequel').length >= 1 ? ` • ${review.seasons.filter(s => s.type === 'prequel').length} Prequels` : ""
                              }${
                                review.seasons.filter(s => s.type === 'sequel').length >= 1 ? ` • ${review.seasons.filter(s => s.type === 'sequel').length} Sequels` : ""
                              }`
                          return (
                              <div>
                                  <a as={"/review/" + review.id.replace(/ /g,'_')} href={'/review/' + review.id.replace(/ /g,'_')}>
                                    <div className='card' id={review.title.replace(/ /g,'_')} style={{
                                    backgroundPosition: review.bg_pos ? review.bg_pos : '100% 0%'
                                    }}>

                                    <img src={ bg } className='card_bg'></img>
                                    <div className='card_bg_layer'></div>

                                    <div className='card_content'>

                                      <div className='card_left'>

                                        <div className='card_left_flexbox'>
                                          <div className='card_ratings'>
                                            {/* <img src='../review-images/star.png' id='star' /> */}
                                            <strong id='card_rating_bigger'>{review.rating}</strong>
                                          </div>

                                          <img src={img} className='card_img' />
                                        </div>

                                      </div>

                                      <div className='card_right'>

                                        <div className='card_right_top'>
                                          <h1 className='card_title'>{review.title.replace(/(\b\w)/gi, w => w.toUpperCase())}</h1>
                                          <div className='card_genres'>
                                            {
                                              review.genres.map(g => {
                                                  return (
                                                      <strong>{`${g.substring(0,1).toUpperCase()}${g.slice(1)}`}</strong>
                                                  )
                                              })
                                            }
                                          </div>
                                          <h2 className='card_season'>{season}</h2>

                                        </div>

                                        <div className='card_right_bot'>
                                          <h3 className='card_desc'>{newDesc}</h3>
                                        </div>

                                      </div>

                                    </div>
                                    </div>
                                  </a>
                              </div>
                            )
                        })
                      }

                  </div>
                  
                )

              })
            }

            <div className="comments">
                <h1>Comments</h1>
                    <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                    />
            </div>
            <Footer></Footer>

            </div>
        )
    }
}

export default Reviews