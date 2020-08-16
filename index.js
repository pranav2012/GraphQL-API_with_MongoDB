const express = require('express');
const port = 1337 || process.env.PORT;
var { graphqlHTTP } = require('express-graphql');
const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const app = express();

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:"pranavagarwal",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => "hello pranav"
            }
        })
    })
});

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(port, () => console.log('server running on ' + port + "\ngoto server: http://localhost:" + port));