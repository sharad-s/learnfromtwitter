// 

export default async (req, res) => {
  if (req.method === "GET") {
    return res.status(200).json({ success: true })
  }
  else if (req.method === "POST") {
     return res.status(200).json({success: true })
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
      .required()
  })
  return schema.validate(threadData, { abortEarly: false });
};