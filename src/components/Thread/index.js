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
const fetcher = (url) => fetch(url).then((res) => res.json())

// Colors
const colorHash = new ColorHash();

const Thread = ({
    thread:
    { fields: {
        Author,
        URL,
        Title,
        Summary,
        Tags },
        id }
}) => {

    const [tags, setTags] = React.useState([])


    // Have to query Airtable for Tag Data for each TagID >:(
    // For each tagId in Tags, make an API request
    React.useEffect(() => {
        if (!!Tags) {
            let tagsArr = []

            Tags.forEach((tagId, i) => {
                tagsArr.push(fetcher(`/api/tags/id/${tagId}`))
            })

            Promise.all(tagsArr).then(res => setTags(res))
        }
    }, [Tags])

    const borderColor = colorHash.hex(Author);

    const tweetId = URL.substr(URL.lastIndexOf('/') + 1)

    const renderedTags = tags.map((tag, i) => (
        <Tag tag={tag} key={i} showNum={false} />
    )
    )

    const handleClick = () => {
        // console.log('clicked thread:', { Author, Title, URL, id })
        // clickedThread({ Author, Title, URL, id })
    }



    return (

        <a href={URL} target="_blank" className={styles.card} style={{ borderColor: borderColor }} onClick={handleClick}>
            <h3> {Author} </h3>
            <h4 className={styles.title}> {Title} </h4>
            <div className={styles.tagsRow}>
                {renderedTags}
            </div>
            <p>{Summary}</p>
            <br />
            <span href={URL} className={styles.link}>{URL}</span>
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