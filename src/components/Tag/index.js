import React from 'react'
import Link from 'next/link'

// Styles
import styles from './Tag.module.css'

// Colors
import ColorHash from 'color-hash'

const colorHash = new ColorHash();

const Tag = ({ tag, showNum }) => {

    const bgColor = colorHash.hex(tag.id);

    return (
        <Link href={`/tags/[tagName]`} as={`/tags/${tag.fields.Name}`}>
            <a>
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