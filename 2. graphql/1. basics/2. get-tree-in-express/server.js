const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const app = express();

const trees = [
  { id: 1, name: "oak", age: "100" },
  { id: 2, name: "accasia", age: "200" },
  { id: 3, name: "mahogany", age: "400" },
];

const TreeType = new GraphQLObjectType({
  name: "tree",
  description: "this represents a tree",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    age: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "this query gives trees with fields specified by user in graph query",
  fields: () => ({
    tree: {
      type: new GraphQLList(TreeType), //custome type
      description: "list of all trees",
      resolve: () => trees, //return tree const you have written in line 7
    },
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log(expressGraphQL));
