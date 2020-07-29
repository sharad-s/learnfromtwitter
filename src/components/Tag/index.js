import React from 'react'
import Link from 'next/link'

// Styles
import styles from './Tag.module.css'

// Colors
import ColorHash from 'color-hash'

// Mixpanel
import { clickedTag } from "../../utils/mixpanel"

const colorHash = new ColorHash();

const Tag = ({ tag, showNum }) => {

    const bgColor = colorHash.hex(tag.id);

    const handleClick = () => {
        console.log('clicked tag:', tag.fields.Name)
        clickedTag(tag.fields.Name)
    }

    return (
        <Link href={`/tags/[tagName]`} as={`/tags/${tag.fields.Name}`}>
            <a onClick={handleClick}>
                <div className={styles.card} style={{ background: bgColor }}>
                    <div className={styles.innerCard}>
                        {`${tag.fields.Name} `}

                        {showNum && `(${tag.fields.Amount})`}
                    </div>
                </div>
            </a>
        </Link>

    )
}

export default Tag;