import React, { useEffect } from 'react'
import useState from 'react'
import Head from "next/head"
import list from '../components/review_list.js'
import Disqus from "disqus-react"

class Reviews extends React.Component {
    constructor(){
        super()
        this.state = {
            reviews: list.list,
            categories: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        }
    }
    
    render() {      
      const disqusShortname = "oniichann"
      const disqusConfig = {
        url: "http://localhost:3000",
        identifier: "reviews",
        title: "Comments"
      }

        return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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

            <div className="nav_bar">
                <a href="https://oniichann.tk">Home</a>
                <a href="https://oniichann.tk/waifus">Waifus</a>
                <a href="https://oniichann.tk/reviews">Reviews</a>
            </div>

            {/* <div class="search_bar" id="search_bar" style={{ display: "inherit" }}>
                <form class="search" id="form">
                    <input type="text" id="search_input" name="search_label" autocomplete="off" placeholder="Search a anime review..." /><br />
                    <input type="submit" value="Search" class="search_btns" id="submit" />
                </form>
                <button id="clear_btn" onclick="clearRes()" class="search_btns">Clear</button>
            </div>

            <div class="display_results"></div> */}

            {
              this.state.categories.map(cat => {
                
                return (
                  <div class="anime_list" id={cat} style={{display: 'inherit'}}>
                      <h1 id="iden">{cat}</h1>
                      
                      {
                      this.state.reviews.filter(r => r.title.toLowerCase().startsWith(cat.toLowerCase())).map(review => {
                        if(this.state.reviews.filter(r => r.title.toLowerCase().startsWith(cat.toLowerCase())).length === 0){
                          return (
                          <h1 className='no-reviews'>No reviews yet</h1>
                          )
                        } else {
                              const newDesc = review.desc.split(/\n/g).map(g => {
                                return(
                                  <div>
                                    {g}<br></br>
                                  </div>
                                )
                              })
                    
                              const img = `../review-images/${review.img}`
                              const bg = `../review-images/${review.bg}`
                          return (
                              <div>
                                  <a as={"/review/" + encodeURIComponent(review.title)} href={'/review/' + encodeURIComponent(review.title)}>
                                    <div className='card' id={review.title.replace(/ /g,'_')} style={{
                                    backgroundPosition: review.bg_pos ? review.bg_pos : '100% 0%'
                                    }}>

                                    <img src={ bg } className='card_bg'></img>
                                    <div className='card_bg_layer'></div>

                                    <div className='card_content'>
                                      <div className='card_left'>
                                        <div className='card_left_flexbox'>
                                          <div className='card_ratings'>
                                            <img src='../review-images/star.png' id='star' />
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
                          }
                        })
                      }

                  </div>
                  
                )

              })
            }

            <div className="comments">
                <h1>Comments</h1>
                    <div className="article-container">
                        <Disqus.DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                        />
                    </div>
            </div>

            </div>
        )
    }
}

export default Reviews