import React, { useEffect } from 'react'
import Head from "next/head"
import Disqus from "disqus-react"
import Navbar from "../components/navbar"

import animeModule from "../components/review_list"
const animes = animeModule.animes

import propercaseModule from "../components/propercase"
const toProPercase = propercaseModule.toProperCase

class Animes extends React.Component {
    render() {
      const disqusShortname = "oniichann-tk"
      const disqusConfig = {
        url: "https://oniichann.tk/animes",
        identifier: "animes",
        title: "animes"
      }

        return (
        <div>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Animes</title>
                <link rel="icon" href="../images/icon.png"></link>
            </Head>

            <Navbar></Navbar>
            <div className='animes'>
                {
                    animes.map(anime => {
                        const bg = `../anime-images/${anime.bg}`
                        const img = `../anime-images/${anime.img}`

                        return (
                        <div className='anime_card' id={ anime.title.replace(/ /g,'-') }>
                            <div className='anime_card_left'>
                                <img className='anime_card_bg' src={ bg }></img>
                                <div className='anime_card_bg_layer'></div>
                                <h1 className='contents anime_card_title'>{ toProPercase(anime.title) }</h1>
                                <img className='anime_card_img' src={ img }></img>
                            </div>

                            <div className='anime_card_right'>
                                <h2 className='contents anime_card_genres'>{ anime.genres.map(g => {
                                    return (
                                        <strong>{ toProPercase(g) }</strong>
                                    )
                                }) }</h2>
                                <h2 className='contents anime_card_date'>{ anime.date }</h2>
                                <h2 className='contents anime_card_type'>{ toProPercase(anime.type) }</h2>
                            </div>
                        </div>
                        )
                    })
                }
            </div>

            <div className="bot_comments">
                <h1>Comments</h1>
                <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
                />
            </div>
        </div>
        )
    }
}

export default Animes