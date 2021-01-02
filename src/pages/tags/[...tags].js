import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

// GQL
import { useQuery } from "@apollo/client"
import { GET_THREADS_BY_TAGS } from "gql/queries"

// Components
import Thread from "components/Thread"

// Styles
import styles from 'styles/Threads.module.css'
import ColorHash from 'color-hash'
const colorHash = new ColorHash();

// Mixpanel
import { loadedTagPage as trackTagPageLoad } from "utils/mixpanel"


// Gets all threads under a specific Tag 
export default function TagNames() {
    const router = useRouter()
    const { tags } = router.query
    console.log(tags)

    const { data, error, loading } = useQuery(GET_THREADS_BY_TAGS, { variables: { tagNames: tags } })

    React.useEffect(() => {
        console.log("loaded page for tag:", router.query.tagName)
        trackTagPageLoad(router.query.tagName)
    }, [])

    if (error) return <div>Failed to load threads for tags</div>
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

    console.log({ count, threads, data })

    return (

        <>
            <Head>
                <title> Learn From Twitter </title>
            </Head>

            <div className={styles.container}>

                <main className={styles.main}>

                    {/* <h1 className={styles.title}>
                        Threads about <span style={{ color: colorHash.hex(tagName) }}>{tagName} ({count})</span>
                    </h1> */}

                    <h2 className={styles.goBack}>
                        <Link href="/" passHref>
                            <a> Go Back </a>
                        </Link>
                    </h2>

                    <div className={styles.grid}>
                        {threads.map(t => <Thread thread={t} key={t.id} />)}
                    </div>

                </main>

            </div>
        </>

    )
}
