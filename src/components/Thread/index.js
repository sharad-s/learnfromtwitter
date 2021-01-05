import React from 'react'
import Link from 'next/link'

// Components
import Tag from "../Tag"

// Styles
import styles from './Thread.module.css'

// Colors
import ColorHash from 'color-hash'

// Twitter
import { TwitterTweetEmbed } from 'react-twitter-embed'

// Mixpanel
import { clickedThread } from "../../utils/mixpanel"

// API

// Colors
const colorHash = new ColorHash();

const Thread = ({thread}) => {

    const {
        id,
        url,
        title,
        author,
        description,
        tags
    } = thread

    const borderColor = colorHash.hex(author);

    const tweetId = url.substr(url.lastIndexOf('/') + 1)

    const renderedTags = tags.map((tag) => (
        <Tag tag={tag} key={tag.id} />
    )
    )

    const handleClick = () => {
        // console.log('clicked thread:', { Author, Title, URL, id })
        // clickedThread({ Author, Title, URL, id })
    }



    return (

        <a href={url} target="_blank" className={styles.card} style={{ borderColor: borderColor }} onClick={handleClick}>
            <h3> {author} </h3>
            <h4 className={styles.title}> {title} </h4>
            <div className={styles.tagsRow}>
                {renderedTags}
            </div>
            <p>{description}</p>
            <br />
            <TwitterTweetEmbed
                tweetId={tweetId}
            />
        </a>


        // <a href={thread.URL} >
        //     <div className={styles.card}  key={thread.id}>
        //         <h3> {Author} </h3>
        //         <h4> {Title} </h4>
        //         <a href={URL} className={styles.link}>{URL}</a>
        //         <TwitterTweetEmbed
        //             tweetId={tweetId}
        //         />
        //     </div>
        // </a>

    )
}

export default Thread;