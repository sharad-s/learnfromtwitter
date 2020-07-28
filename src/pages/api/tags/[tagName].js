
// Utils
import { makeRequest } from "../../../utils/api"

export default (req, res) => {
    const {
        query: { tagName },
    } = req

    const tag = tagName.trim().split(' ').join('+')

    // const url = `https://api.airtable.com/v0/appBCTqZwhbBqSEuz/Tags?fields%5B%5D=Name&fields%5B%5D=Amount&filterByFormula=FIND(%${tagName}%22%2C+Name)`
    const url = `https://api.airtable.com/v0/appBCTqZwhbBqSEuz/Tags?fields%5B%5D=Name&fields%5B%5D=Amount&filterByFormula=FIND(%22${tag}%22%2C+Name)`

    makeRequest({ url }).then(({ data }) => {
        const { records } = data
        res.statusCode = 200
        res.json(records[0])
    })
}

export const config = {
    api: {
        externalResolver: true,
    },
}

