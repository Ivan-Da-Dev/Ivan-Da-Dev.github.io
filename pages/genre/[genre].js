import React from 'react'
import data from '../../components/review_list.js'
import Disqus from "disqus-react"
import Head from "next/head"
import markdown from "../../components/markdown"
import ProperCaseModule from "../../components/propercase"
const toProperCase = ProperCaseModule.toProperCase
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import getSeasonModule from "../../components/getseason"
const getSeason = getSeasonModule.getSeason

export default function Genre({ reviews,genre }){
    const title = toProperCase(genre.replace(/_/g," "))
    const meta_desc = `${reviews.length} results`
    const bgImg = "../images/bg.jpg"
    const url = `https://oniichann.tk/genre/${genre.replace(/ /g,'_')}`

    return(
        <div>
            <Head>
                <link rel="icon" href="../review-images/icon.png" />
                <title>{ toProperCase(genre.replace(/_/g," ")) }</title>

                <meta property="og:title"       content={ title }                 data-vue-meta="true"></meta>
                <meta property="og:description" content={ meta_desc }             data-vue-meta="true"></meta>
                <meta property="og:image"       content={ bgImg }                 data-vue-meta="true"></meta>
                <meta property="og:url"         content={ url }                   data-vue-meta="true"></meta>
                <meta name="description"        content={ meta_desc }             data-vue-meta="true"></meta>
                <meta name="twitter:card"       content="summary_large_image"   data-vue-meta="true"></meta>

                
                <meta name="keywords" content="Onii Chan" />
                <meta name="keywords" content="Onii-Chan" />
                <meta name="keywords" content="Anime Reviews" />
                <meta name="keywords" content="Shitty Anime Reviews" />
                <meta name="keywords" content={ genre } />

            </Head>

            <Navbar></Navbar>

            <div className='genre_animes'>
                <h1 id='label'>{ toProperCase(genre.replace(/_/g," ")) }</h1>
                <h2 id='results'>{ reviews.length + " results" }</h2>

                {
                    reviews.map(review => {
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

        <div className="footer">
            <div className='row'>
                <a href='https://discord.gg/ev6jaTB648'>
                    <svg width="46px" height="46px" viewBox="0 0 236 150">
                        <g>
                            <path d="M226.011429,0 Z M169.545143,191.049143 C169.545143,191.049143 164.278857,184.758857 159.890286,179.2 C179.053714,173.787429 186.368,161.792 186.368,161.792 C180.370286,165.741714 174.665143,168.521143 169.545143,170.422857 C162.230857,173.494857 155.209143,175.542857 148.333714,176.713143 C134.290286,179.346286 121.417143,178.614857 110.445714,176.566857 C102.107429,174.957714 94.9394286,172.617143 88.9417143,170.276571 C85.5771429,168.96 81.92,167.350857 78.2628571,165.302857 C77.824,165.010286 77.3851429,164.864 76.9462857,164.571429 C76.6537143,164.425143 76.5074286,164.278857 76.3611429,164.132571 C73.728,162.669714 72.2651429,161.645714 72.2651429,161.645714 C72.2651429,161.645714 79.2868571,173.348571 97.8651429,178.907429 C93.4765714,184.466286 88.064,191.049143 88.064,191.049143 C55.7348571,190.025143 43.4468571,168.813714 43.4468571,168.813714 C43.4468571,121.709714 64.512,83.5291429 64.512,83.5291429 C85.5771429,67.7302857 105.618286,68.1691429 105.618286,68.1691429 L107.081143,69.9245714 C80.7497143,77.5314286 68.608,89.088 68.608,89.088 C68.608,89.088 71.8262857,87.3325714 77.2388571,84.8457143 C92.8914286,77.9702857 105.325714,76.0685714 110.445714,75.6297143 C111.323429,75.4834286 112.054857,75.3371429 112.932571,75.3371429 C121.856,74.1668571 131.949714,73.8742857 142.482286,75.0445714 C156.379429,76.6537143 171.300571,80.7497143 186.514286,89.088 C186.514286,89.088 174.957714,78.1165714 150.089143,70.5097143 L152.137143,68.1691429 C152.137143,68.1691429 172.178286,67.7302857 193.243429,83.5291429 C193.243429,83.5291429 214.308571,121.709714 214.308571,168.813714 C214.308571,168.813714 201.874286,190.025143 169.545143,191.049143 Z M101.522286,122.733714 C93.184,122.733714 86.6011429,130.048 86.6011429,138.971429 C86.6011429,147.894857 93.3302857,155.209143 101.522286,155.209143 C109.860571,155.209143 116.443429,147.894857 116.443429,138.971429 C116.589714,130.048 109.860571,122.733714 101.522286,122.733714 M154.916571,122.733714 C146.578286,122.733714 139.995429,130.048 139.995429,138.971429 C139.995429,147.894857 146.724571,155.209143 154.916571,155.209143 C163.254857,155.209143 169.837714,147.894857 169.837714,138.971429 C169.837714,130.048 163.254857,122.733714 154.916571,122.733714"></path>
                        </g>
                    </svg>
                    Discord Server
                </a>
            </div>
        </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const reviews = data.getReviewByGenre(params.genre).reviews
    const genre = params.genre

    return {
      props: {
        reviews,
        genre
      }
    }
}

export async function getStaticPaths() {
    const paths = data.genreIds()

    return {
      paths,
      fallback: false
    }
}
