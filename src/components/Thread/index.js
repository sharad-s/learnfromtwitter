import React from 'react'
import Link from 'next/link'

// Styles
import styles from './Thread.module.css'

// Colors
import ColorHash from 'color-hash'

// Twitter
import { TwitterTweetEmbed } from 'react-twitter-embed'

// API
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

// Colors
const colorHash = new ColorHash();

const Thread = ({ thread }) => {


    const { fields, id } = thread;
    const { Author, URL, Title, Summary, Tags } = fields;

    const borderColor = colorHash.hex(Author);

    const tweetId = URL.substr(URL.lastIndexOf('/') + 1)

    console.log({Tags})
    // Have to query Airtable for Tag Data for each TagID >:(


    return (

        <a href={URL} target="_blank" className={styles.card} style={{ borderColor: borderColor }}>
            <h3> {Author} </h3>
            <h4> {Title} </h4>
            <p>{Summary}</p>
            <a href={URL} className={styles.link}>{URL}</a>
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