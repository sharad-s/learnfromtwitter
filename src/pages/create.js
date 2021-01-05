import { useState } from 'react'
import Searchbar from 'components/SearchBar'

// GQL

export const CreatePage = () => {
    const [tags, setTags] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <div>
            <h1> Create Thread </h1>

            <form onSubmit={handleSubmit}>
                URL: <input type="text" name="url" />
                title: <input type="text" name="title" />
                author: <input type="text" name="author" />
                <h2> Tags</h2>
                <input type="text" name="title" />
                <Searchbar hideButton setParentTags={setTags} />
                <button type="submit">Go </button>
            </form>

        </div>
    )
}

export default CreatePage

