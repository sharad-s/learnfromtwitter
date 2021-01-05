import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

// GQL
import { useQuery } from "@apollo/client"
import { GET_THREADS_BY_TAG } from "gql/queries"

// Components
import Thread from "components/Thread"

// Styles
import styles from 'styles/Threads.module.css'
import ColorHash from 'color-hash'
const colorHash = new ColorHash();

// Mixpanel
import { loadedTagPage as trackTagPageLoad } from "../../utils/mixpanel"


// Gets all threads under a specific Tag 
export default function TagName() {
    const router = useRouter()
    const { tagName } = router.query

    const { data, error, loading } = useQuery(GET_THREADS_BY_TAG, { variables: { tagName } })

    React.useEffect(() => {
        console.log("loaded page for tag:", router.query.tagName)
        trackTagPageLoad(router.query.tagName)
    }, [])

    if (error) return <div>Failed to load threads for tag "{router.query.id}"</div>
    if (loading) return (
        <main className={styles.main}>
            <div>Loading Threads...</div>
        </main>
    )

    const count = data.threads_aggregate.aggregate.count

    const threads = data.threads_aggregate.nodes.map(t => ({
        id: t.id,
        url: t.url,
        author: t.author,
        title: t.title,
        tags: t.thread_tags.map(({ tag }) => ({ id: tag.id, name: tag.name }))
    }))

    const color = colorHash.hex(tagName)
    console.log('header color', {color})

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
                        Threads about <span style={{ color }}>{tagName} ({count})</span>
                    </h1>

                    <h2 className={styles.goBack}>
                        <Link href="/">
                            <a> Go Back </a>
                        </Link>
                    </h2>

                    <div className={styles.grid}>
                        {threads.map(t => <Thread thread={t} />)}
                    </div>

                </main>

            </div>
        </>

    )
}
