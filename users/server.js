const express = require('express');
const expressGraphQL = require('express-graphql');

const app = new express();
const PORT = process.env.PORT || 4000;

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});