import React from 'react'
import Link from 'next/link'

// Styles
import styles from './Tag.module.css'

// Colors
import ColorHash from 'color-hash'

// Mixpanel
import { clickedTag } from "../../utils/mixpanel"

const colorHash = new ColorHash();

const Tag = ({ tag, showNum = false }) => {

    const { 
        name,
        id,
        count
    } = tag

    const bgColor = colorHash.hex(id);

    const handleClick = () => {
        console.log('clicked tag:', name)
        clickedTag(name)
    }

    return (
        <Link href={`/tags/[tagName]`} as={`/tags/${name}`}>
            <a onClick={handleClick}>
                <div className={styles.card} style={{ background: bgColor }}>
                    <div className={styles.innerCard}>
                        {`${name} `}

                        {showNum && count && `(${count})`}
                    </div>
                </div>
            </a>
        </Link>

    )
}

export default Tag;