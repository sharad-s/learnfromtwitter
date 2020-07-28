import Link from 'next/link'
import { useRouter } from 'next/router'
import useSwr from 'swr'

// Components
import Thread from "../../components/Thread"

// Styles
import styles from '../../styles/Home.module.css'


const fetcher = (url) => fetch(url).then((res) => res.json())

const Test = () => (
    <a href="https://nextjs.org/docs" className={styles.card}>
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
    </a>
)

let thing = thread => <Thread thread={thread} key={thread.id} />
// thing = thread => <Test />

export default function User() {
    const router = useRouter()
    const { data, error } = useSwr(`/api/threads/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load threads for tag "{router.query.id}"</div>
    if (!data) return <div>Loading...</div>

    // console.log({ data })

    return (
        <>
            <Link href="/">
                <button>
                    Go Back
                </button>
            </Link>
            <h1> Threads for tag {router.query.id}</h1>
            <div className={styles.grid} style={{ width: "100%" }}>
                {data.map(thread => thing(thread))}
            </div>
        </>
    )

}
