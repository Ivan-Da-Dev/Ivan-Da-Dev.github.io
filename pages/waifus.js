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

        return (
            <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Waifus</title>
                <link rel="icon" href="../waifu-images/icon.png" />

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

            {/* <div id="nsfw_layer">
                <img src="./images/chotto_matte.jpg" />
                <h1>This review contains NSFW content that may be unsuitable for some users, do you wish to proceed?</h1>
                <button id="proceed" onclick="proceed()">Yes, let me in</button>
                <button id="go_back" onclick="go_back()">No, take me back</button>
            </div> */}

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
                                        <a className='waifu_card_anime' href={'../review/' + encodeURIComponent(waifu.anime.toLowerCase())}> { toPropercase(waifu.anime) } </a>
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