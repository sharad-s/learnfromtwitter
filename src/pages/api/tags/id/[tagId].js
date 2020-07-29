
// Utils
import { makeRequest } from "../../../../utils/api"

export default (req, res) => {
    const {
        query: { tagId },
    } = req


    const url = `https://api.airtable.com/v0/appBCTqZwhbBqSEuz/Tags/${tagId}`

    makeRequest({ url }).then(({ data }) => {
        // const { records } = data

        res.statusCode = 200
        res.json(data)
    }).catch(err => {
        console.error(err)
    })
}

export const config = {
    api: {
        externalResolver: true,
    },
}

