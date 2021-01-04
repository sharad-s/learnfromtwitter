import Head from 'next/head'
import styles from '../styles/Home.module.css'

// GQL
import { useQuery } from "@apollo/client"
import { GET_ALL_TAGS } from "gql/queries"

// Mixpanel
import { loadedHomePage as trackHomePageLoad } from "../utils/mixpanel"

// Components
import Tag from "components/Tag"
import SearchBar from "components/SearchBar"


const thing = tag => <Tag tag={tag} key={tag.id} showNum={true} />

export default function Home() {

  const { data, error, loading } = useQuery(GET_ALL_TAGS)

  React.useEffect(() => {
    console.log("loaded homepage")
    trackHomePageLoad()
  }, [])

  if (error) return <div>Failed to load tags :(</div>
  if (loading) return (
    <main className={styles.main}>
      <div>Loading...</div>
    </main>
  )

  const tags = data.tags.map((t) => ({
    id: t.id,
    name: t.name,
    count: t.tag_threads_aggregate.aggregate.count
  }))

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


          <SearchBar />
          <div className={styles.grid}>
            {tags.map(tag => thing(tag))}
          </div>
    
        </main>

      </div>
    </>
  )
}
