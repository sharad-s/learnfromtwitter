import Link from 'next/link'
import { useRouter } from 'next/router'
import useSwr from 'swr'

// Components
import Thread from "../../components/Thread"
// import Tag from "../../components/Tag"


// Styles
import styles from '../../styles/Threads.module.css'
import ColorHash from 'color-hash'
const colorHash = new ColorHash();


const fetcher = (url) => fetch(url).then((res) => res.json())

const Test = () => (
    <a href="https://nextjs.org/docs" className={styles.card}>
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
    </a>
)

let thing = thread => <Thread thread={thread} key={thread.id} />
// thing = thread => <Test />



// Gets all threads under a specific Tag 
export default function TagName() {
    const router = useRouter()
    const threads = useSwr(`/api/threads/${router.query.tagName}`, fetcher)
    const tag = useSwr(`/api/tags/${router.query.tagName}`, fetcher)

    const threadData = threads.data
    const threadError = threads.error
    const tagData = tag.data
    const tagError = tag.error

    if (threadError) return <div>Failed to load threads for tag "{router.query.id}"</div>
    if (!threadData) return <div>Loading Threads...</div>

    if (tagError) return <div>Failed to load tag "{router.query.id}"</div>
    if (!tagData) return <div>Loading Tag...</div>

    const bgColor = colorHash.hex(tagData.id);

    const renderedTag = !!tagData.fields.Name ? tagData.fields.Name : router.query.id

    return (

        <>

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
