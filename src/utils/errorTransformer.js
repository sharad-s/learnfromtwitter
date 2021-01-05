// Gets error object from Joi
// Transforms it into a json object of just errors
const errorTransformer = error => {

	console.log('errorTransformer',{ error })

	const errors = {}

	error.details.forEach(detail => {
		// console.log("Context:", detail.context);
		let { key } = detail.context
		if (typeof key === Number) key = "tags"
		// Hack as fuck
		let message = detail.message
		if (key in errors) return
		else errors[key] = message
	})
	return { errors }
}

export default errorTransformer