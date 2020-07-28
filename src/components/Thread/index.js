import React from 'react'
import Link from 'next/link'

// Styles
import styles from './Thread.module.css'

// Colors
import ColorHash from 'color-hash'

import { TwitterTweetEmbed } from 'react-twitter-embed'

const colorHash = new ColorHash();

const Test = () => (
    <a href="https://nextjs.org/docs" className={styles.card}>
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
    </a>
)

const Thread = ({ thread }) => {


    const { fields, id } = thread;
    const { Author, URL, Title } = fields;

    const borderColor = colorHash.hex(Author);

    const tweetId = URL.substr(URL.lastIndexOf('/') + 1)

    return (

        <a href={URL} target="_blank" className={styles.card} style={{ borderColor: borderColor }}>
            <h3> {Author} </h3>
            <h4> {Title} </h4>
            <p>Find in-depth information about Next.js features and API.</p>
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