import Link from 'next/link'
import Head from 'next/head'

import { useRouter } from 'next/router'
import useSwr from 'swr'

// Components
import Thread from "../../components/Thread"
// import Tag from "../../components/Tag"

// Styles
import styles from '../../styles/Threads.module.css'
import ColorHash from 'color-hash'
const colorHash = new ColorHash();

// Mixpanel
import { loadedTagPage as trackTagPageLoad } from "../../utils/mixpanel"



const fetcher = (url) => fetch(url).then((res) => res.json())

let thing = thread => <Thread thread={thread} key={thread.id} />

// Gets all threads under a specific Tag 
export default function TagName() {
    const router = useRouter()
    const threads = useSwr(`/api/threads/${router.query.tagName}`, fetcher)
    const tag = useSwr(`/api/tags/${router.query.tagName}`, fetcher)

    React.useEffect(() => {
        console.log("loaded page for tag:", router.query.tagName)
        trackTagPageLoad(router.query.tagName)
    }, [])

    const threadData = threads.data
    const threadError = threads.error
    const tagData = tag.data
    const tagError = tag.error

    if (threadError) return <div>Failed to load threads for tag "{router.query.id}"</div>
    if (!threadData) return (
        <main className={styles.main}>
            <div>Loading Threads...</div>
        </main>
    )

    if (tagError) return <div>Failed to load tag "{router.query.id}"</div>
    if (!tagData) return (
        <main className={styles.main}>
            <div>Loading Tag...</div>
        </main>
    )

    const bgColor = colorHash.hex(tagData.id);

    const renderedTag = !!tagData.fields.Name ? tagData.fields.Name : router.query.id

    return (

        <>

            <Head>
                <title>{router.query.tagName} | Learn From Twitter | </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                {/* <Head>
                    <title>Tag | {router.query.id}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head> */}

                <main className={styles.main}>

                    <h1 className={styles.title}>
                        Threads about <span style={{ color: bgColor }}>{renderedTag}</span>
                    </h1>

                    <h2 className={styles.goBack}>
                        <Link href="/">
                            <a> Go Back </a>
                        </Link>
                    </h2>

                    <div className={styles.grid}>
                        {threadData.map(thread => thing(thread))}
                    </div>

                </main>

            </div>
        </>

        //     <>


        //         <div className={styles.grid} style={{ width: "100%" }}>

        //         </div>
        //     </>
        // )
    )
}
