
import mockTags from "../../../mocks/tags"

// API
// import Airtable from 'airtable'
// const base = new Airtable({ apiKey }).base('appBCTqZwhbBqSEuz');

// Utils
import { makeRequest } from "../../../utils/api"


export default (req, res) => {

  const url = "https://api.airtable.com/v0/appBCTqZwhbBqSEuz/Threads"

  makeRequest({ url }).then(({ data }) => {

    const { records } = data

    res.statusCode = 200
    res.json(records)
  })


}
