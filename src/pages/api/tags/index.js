
import mockTags from "../../../mocks/tags"

// API
// import Airtable from 'airtable'
// const base = new Airtable({ apiKey }).base('appBCTqZwhbBqSEuz');

// Utils
import { makeRequest } from "../../../utils/api"


export default (req, res) => {

  // const tags = await base('Tags').select().eachPage(
  //   (records, fetchNextPage) => {
  //     records.forEach(function (record) {
  //       console.log('Retrieved', record.get('ID'));
  //     });
  //   }
  // )


  // base('Tags').select({
  //   // Selecting the first 3 records in Grid view:
  //   // maxRecords: 10,
  //   // view: "Grid view"
  //   sort: [{field: "Amount", direction: "desc"}]
  // }).eachPage(function page(records, fetchNextPage) {
  //   // This function (`page`) will get called for each page of records.

  //   records.forEach(function (record) {
  //     console.log('Retrieved', record.get('Name'));
  //   });

  //   // To fetch the next page of records, call `fetchNextPage`.
  //   // If there are more records, `page` will get called again.
  //   // If there are no more records, `done` will get called.
  //   fetchNextPage();

  // }, function done(err) {
  //   if (err) { console.error(err); return; }
  // });

  const url = "https://api.airtable.com/v0/appBCTqZwhbBqSEuz/Tags?fields%5B%5D=Name&fields%5B%5D=Amount&sort%5B0%5D%5Bfield%5D=Amount&sort%5B0%5D%5Bdirection%5D=desc"

  makeRequest({ url }).then(({ data }) => {

    const { records } = data

    res.statusCode = 200
    res.json(records)
  })


}


export const config = {
  api: {
      externalResolver: true,
  },
}