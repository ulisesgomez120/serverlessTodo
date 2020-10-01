const axios = require("axios");
require("dotenv").config();

exports.handler = async (event) => {
  const GET_TODOS = `
        query{
            allTodos{
                data {
                _id
                title
                completed
                }
            }
        }
    `;
  try {
    const { data } = await axios({
      url: "https://graphql.fauna.com/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
      },
      data: { query: GET_TODOS, variables: {} },
    });
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ msg: err.message }) };
  }
};
