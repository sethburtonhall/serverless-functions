import fetch from 'node-fetch';

exports.handler = async function (event, context) {
  const eventBody = JSON.parse(event.body);
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`;

  console.log(eventBody);

  const response = await fetch(POKE_API);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
