// 

// GQL
import { makeGqlRequest } from "utils/gql"
import { CREATE_THREAD } from 'gql/mutations'

// Error Transformer
import errorTransformer from 'utils/errorTransformer'
import Joi from "joi";

const formatTags = tagStrings => ({
  data: tagStrings.map(t => ({
    tag: {
      data: {
        name: t
      },
      on_conflict: {
        constraint: "tags_name_key",
        update_columns: "name"
      }
    }
  }))
})


export default async (req, res) => {
  if (req.method === "GET") {
    return res.status(200).json({ success: true })
  }
  else if (req.method === "POST") {
    try {

      // Validating request params
      const { errors, error } = validateInput(req.body)
      if (errors) return res.status(404).json(errorTransformer(errors))
      if (error) return res.status(404).json(errorTransformer(error))

      // Construct query 
      const variables = {
        tweet_id: req.body.tweetId,
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        thread_tags: formatTags(req.body.tags),
      }

      // Make query
      try {
        const data = (
          await makeGqlRequest(CREATE_THREAD, variables)
        ).insert_threads.returning

        return res.status(200).json({ success: true, data })

      } catch (err) {
        return res.status(400).json({ error: err.message })
      }

    } catch (err) {
      console.log("Internal Server Error:", err)
      res.status(500).json({ error: "Internal Server Error." })
    }

  }
}

const validateInput = (threadData) => {
  const schema = Joi.object({
    tweetId: Joi.string()
      .min(5)
      .max(25)
      .required(),
    author: Joi.string()
      .min(1)
      .max(15)
      .required(),
    title: Joi.string()
      .min(3)
      .max(255)
      .required(),
    description: Joi.string()
      .min(3)
      .max(255)
      .allow(null),
    tags: Joi
      .array()
      .items(Joi.string())
  })
  return schema.validate(threadData, { abortEarly: false });
};