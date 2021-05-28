import React from 'react'
import data from '../../components/review_list.js'
import Disqus from "disqus-react"
import Head from "next/head"
import markdown from "../../components/markdown"

export default function Review({ reviewObj }){
    const review = reviewObj.review
    const img = `../review-images/${review.img}`

    const disqusShortname = "oniichann-tk"
    const disqusConfig = {
      url: "https://oniichann.tk/review/" + review.id.replace(/ /g,'_'),
      identifier: review.id.toLowerCase().replace(/ /g,'_') + `_${reviewObj.id}`,
      title: review.title
    }

    const bgImg = `../review-images/${review.bg}`
    const title = `${review.title.substring(0,1).toUpperCase()}${review.title.slice(1)}`
    const meta_desc = `Read Onii-chan's review on ${review.title} with a rating of ${review.rating}. ${review.desc}`
    const _review = 
    `${markdown.markdown(review.review)}`

    return (
        <div>
            <Head>
                <link rel="icon" href="../review-images/icon.png" />
                <title>{title}</title>

                <meta name="description" content={meta_desc} />
                <meta property="og:image" content={bgImg} data-vue-meta="true"></meta>
                
                <meta name="keywords" content="Onii Chan" />
                <meta name="keywords" content="Onii-Chan" />
                <meta name="keywords" content="Anime Reviews" />
                <meta name="keywords" content="Shitty Anime Reviews" />
                <meta name="keywords" content={review.title} />
            </Head>

            <div className="nav_bar">
                <a href="https://oniichann.tk">Home</a>
                <a href="https://oniichann.tk/waifus">Waifus</a>
                <a href="https://oniichann.tk/reviews">Reviews</a>
            </div>

            <img className='view_bg' src={bgImg}></img>
            <div className="view">

                <div className="nsfw_layer" style={{
                    display: review.nsfw ? 'block' : 'none'
                }}>
                    <img src="../review-images/chotto_matte.jpg" />
                    <h1>This review contains NSFW content that may be unsuitable for some users, do you wish to proceed?</h1>
                    <button className="proceed">Yes, let me in</button>
                    <a className="go_back" href='https://oniichann.tk/reviews'>No, take me back</a>
                </div>

                <div class="view_layer"></div>

                <div className="view_content">

                    <div className="view_container" id='left'>
                        <h1 className="view_title">{title}</h1>
                        <h2 className="view_genres">{
                        review.genres.map(g => {
                            return (
                                <strong>{`${g.substring(0,1).toUpperCase()}${g.slice(1)}`}</strong>
                            )
                        })
                        }</h2>
                        <h3 className="view_rating">
                            <img src='../review-images/star.png' className='star' />
                            <strong className='card_rating_bigger'>{review.rating}</strong>
                        </h3>
                        <h4 className='view_desc'>
                            {review.desc}
                        </h4>
                    </div>

                    <div className='view_container' id='right'>
                        <img id="view_img" src={img} />
                    </div>

                </div>

                <div className='view_container' id='mid'>
                    <h1 className='label'>Review</h1>
                    <h4 className="view_review" dangerouslySetInnerHTML={{__html: _review}}></h4>
                </div>

            </div>

            <div className="view_comments">
                <h1>Comments</h1>
                    <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                    />
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const reviewObj = data.getReviewData(params.review)

    return {
      props: {
        reviewObj
      }
    }
}

export async function getStaticPaths() {
    const paths = data.ids()

    return {
      paths,
      fallback: false
    }
}
