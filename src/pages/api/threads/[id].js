import mockThreads from "../../../mocks/threads"

export default (req, res) => {
  const {
    query: { id },
  } = req

  // let threads = mockThreads["records"]

  // // Find threads that match the tagID
  // const foundThreads = threads.find(thread => {
  //   // const { Tags } = thread.fields;
  //   return true;
  // })

  res.statusCode = 200
  res.json(mockThreads["records"])
}

