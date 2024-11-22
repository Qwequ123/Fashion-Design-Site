import axios from "axios";


// const API = axios.create({
export default axios.create({
	baseUrl: "https://api.unsplash.com/",
	headers: {
		Authorization: "Client-ID r1iMroyHzKA231YINLHLjrby4eYfRDUHhB9SPIcrO9s",
	},
});