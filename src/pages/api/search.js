import axios from 'axios';

export default async function handler(req, res) {
	const options = {
		method: 'GET',
		url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
		params: {
			query: req.query.keyword,
			diet: req.query.diet,
			excludeIngredients: req.query.exclude,
			number: '20',
			offset: '0'
		},
		headers: {
			'x-rapidapi-host':
				'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
			'x-rapidapi-key': '4b85dac196msh1c5ec46173bded3p17e40fjsn036ec7c31cae'
		}
	};
	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error.response);
	}
}
