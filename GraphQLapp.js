const GRAPHQL_URL = 'http://localhost:9000/';

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `,
    }),
  });

  const responseBody = await response.json();
  console.log(responseBody);
  //const { data } = await response.json();
  const { data } = responseBody;   //data and greeting are fixed names.
  return data;
}

fetchGreeting().then(
    ({ greeting }) => { //data and greeting are fixed names.

    const title = document.querySelector('h2');
    title.textContent = greeting;
                      }
);



