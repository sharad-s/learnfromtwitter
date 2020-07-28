
// Utils
import { makeRequest } from "../../../utils/api"

export default (req, res) => {
  const {
    query: { tagName },
  } = req

  const tag = tagName.trim().split(' ').join('+')

  const url = `https://api.airtable.com/v0/appBCTqZwhbBqSEuz/Threads?filterByFormula=FIND(%22${tag}%22%2C+Tags)`

  makeRequest({ url }).then(({ data }) => {

    const { records } = data

    res.statusCode = 200
    res.json(records)
  })
}
