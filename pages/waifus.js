import React from "react"
import Head from "next/head"
import waifus from "../components/waifu_list.js"
import Disqus from "disqus-react"

class Waifus extends React.Component {
    render() {
        const disqusShortname = "oniichann-tk"
        const disqusConfig = {
          url: "https://oniichann.tk",
          identifier: "waifus",
          title: "waifus"
        }

        const bgImg = `../waifu-images/harem.jpg`
        const url = 'https://oniichann.tk/waifus'
        const desc = "I have a harem that almost everyone is jealous of. It consists of lolis, milfs and normal girls"

        return (
            <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Waifus</title>
                <link rel="icon" href="../waifu-images/icon.png" />

                <meta property="og:title"       content="Onii Chan's Waifus"    data-vue-meta="true"></meta>
                <meta property="og:description" content={desc}                  data-vue-meta="true"></meta>
                <meta property="og:image"       content={bgImg}                 data-vue-meta="true"></meta>
                <meta property="og:url"         content={url}                   data-vue-meta="true"></meta>
                <meta name="description"        content={desc}                  data-vue-meta="true"></meta>
                <meta name="twitter:card"       content="summary_large_image"   data-vue-meta="true"></meta>

                <meta name="description" content="My waifus" />
                <meta property="og:image" content="./images/icon.png" />
                <meta name="keywords" content="Waifus" />
                <meta name="keywords" content="Waifu" />
            </Head>

            <div className="nav_bar">
                <a href="https://oniichann.tk">Home</a>
                <a href="https://oniichann.tk/waifus">Waifus</a>
                <a href="https://oniichann.tk/reviews">Reviews</a>
            </div>

            <div class="body">
                {
                    waifus.waifus.map(waifu => {
                        const img = `../waifu-images/${waifu.img}`
                        const bg = `../waifu-images/${waifu.bg}`

                        function toPropercase(string){
                            return string.replace(/(\b\w)/gi, w => w.toUpperCase())
                        }

                        return (
                            <div className='waifu_card'>
                                <div className='waifu_card_bg_layer'></div>
                                <img className='waifu_card_bg' src={ bg } />

                                <div className='waifu_card_content'>
                                    <div className='waifu_card_left'>
                                        <img className='waifu_card_img' src={ img } />
                                    </div>

                                    <div className='waifu_card_right'>
                                        <h1 className='waifu_card_name'> { toPropercase(waifu.name) } </h1>
                                        <a className='waifu_card_anime' href={'../review/' + waifu.anime.toLowerCase().replace(/ /g,'_')}> { toPropercase(waifu.anime) } </a>
                                    </div>
                                </div>

                           </div>
                        )
                    })
                }
            </div>

            <div className="comments">
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

export default Waifus