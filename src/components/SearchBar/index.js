import { useState, useEffect } from 'react'
import Link from 'next/link'

// GQL
import { useLazyQuery } from "@apollo/client"
import { SEARCH_TAGS } from "gql/queries"

const SearchBar = () => {
    const [searchVal, setSearchVal] = useState('')

    const [matchedTags, setMatchedTags] = useState([])

    const [performSearch, { loading, error, data }] = useLazyQuery(SEARCH_TAGS)

    useEffect(() => {
        if (data && data.search_tags.length) {
            const matchedTags = data.search_tags
            setMatchedTags(matchedTags)
        } else {
            setMatchedTags([])
        }
    }, [data])

    const handleSearch = (search) => {
        performSearch({ variables: { search } })
    }

    const handleChange = ({ target: { value } }) => {
        setSearchVal(value)
        handleSearch(value)
    }

    return (
        <div>
            <input onChange={handleChange} value={searchVal} />
            {error && <p>Query Error :(</p>}
            {loading && <p>Loading...</p>}
            <ul>
                {matchedTags && matchedTags.map(t => (
                    <li key={t.id}>
                        <Link href={`/tags/${t.name}`} passHref>
                            <a>
                                {t.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar