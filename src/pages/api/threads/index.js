
import mockTags from "../../../mocks/threads"

export default (req, res) => {
    res.statusCode = 200
    res.json(mockTags["records"])
  }
  