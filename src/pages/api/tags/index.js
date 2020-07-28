
import mockTags from "../../../mocks/tags"

export default (req, res) => {
    res.statusCode = 200
    res.json(mockTags["records"])
  }
  