import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// GQL
import { useLazyQuery } from "@apollo/client"
import { SEARCH_TAGS } from "gql/queries"

import ReactTags from 'react-tag-autocomplete'

var x = 3;

const SearchBar = ({ showButton, setParentTags }) => {

    const [tags, setTags] = useState([])
    const reactTagsRef = useRef(null)

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

    useEffect(() => {

        if (tags && setParentTags) setParentTags(tags)
    }, [tags])

    const handleSearch = (search) => {
        performSearch({ variables: { search } })
    }

    const handleChange = ({ target: { value } }) => {
        setSearchVal(value)
        handleSearch(value)
    }

    const onDelete = (i) => {
        tags.splice(i, 1)

        setTags(tags)
    }

    const onAddition = (tag) => {
        const oldTags = [...tags]
        const newTags = [...tags, tag]
        console.log({ oldTags, newTags })
        setTags(newTags)
        x = 4;
    }

    const onValidate = (tag) => {
        const ye = !tags.map(({ id }) => id).includes(tag.id)
        return ye
    }

    const onInput = (query) => {
        console.log({ query })
        setSearchVal(query)
        handleSearch(query)
    }

    const suggestionsFilter = (suggestion) => {
        const { name } = suggestion
        const tagNames = tags.map(({ name }) => name.toLowerCase())
        return !tagNames.includes(name.toLowerCase())
    }

    const suggestions = matchedTags.map(({ id, name }) => ({ id, name }))

    const handleSubmit = (e) => {
        alert('form submit')
    }

    const link = '/tags/' + tags.map(({ name }) => name).join('/')

    return (
        <>
            {/* <input onChange={handleChange} value={searchVal} /> */}
            {/* {error && <p>Query Error :(</p>}
            {loading && <p>Loading...</p>} */}
            <ReactTags
                ref={reactTagsRef}
                tags={tags}
                suggestions={suggestions}
                onDelete={onDelete}
                onAddition={onAddition}
                onInput={onInput}
                onValidate={onValidate}
                suggestionsFilter={suggestionsFilter}
                placeholderText="Search Tags"
            />
            {showButton && (<button >
                Go
            </button>)}

        </>
    )
}

export default SearchBar