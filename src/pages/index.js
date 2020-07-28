import Head from 'next/head'
import styles from '../styles/Home.module.css'

// API
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

// Components
import Tag from "../components/Tag"


const Test = () => (
  <a href="https://nextjs.org/docs" className={styles.card}>
    <h3>Documentation &rarr;</h3>
    <p>Find in-depth information about Next.js features and API.</p>
  </a>
)

const thing = tag => <Tag tag={tag} key={tag.id} showNum={true} />


export default function Home() {

  const { data, error } = useSwr('/api/tags', fetcher)

  if (error) return <div>Failed to load tags</div>
  if (!data) return (
    <main className={styles.main}>
      <div>Loading...</div>
    </main>
  )

  return (
    <>

      <div className={styles.container}>
        <Head>
          <title>Learn From Twitter</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>


          <h1 className={styles.title}>
            Learn anything from Twitter.
            </h1>


          <div className={styles.grid}>
            {data.map(tag => thing(tag))}
          </div>

        </main>

      </div>
    </>
  )
}
