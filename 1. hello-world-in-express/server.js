const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    //write query to get the data
    //GraphQLObjectType allows you to create dynamic object ...since graphql is strictly typed we should use object
    name: "HelloWorld", //name should not have space
    fields: () => ({  //everything inside ({}) is treated as return only.....no need to write return if you are using paranthesis
      //HelloWorld returns these fields
      //define here what fields you want to return
      //the first field im returning is message field
      //message field returns a string
      message: {
        //message is an object of type GraphQLString object
        // m returning an object
        type: GraphQLString, //object is of this type
        //resolve is --what actual information we are returning for this field
        resolve: () => "hello world", //resolve is a function that tells GraphQL where to get the information from
        //this func returns "hello world" string
        //resolve can take arguments like -- resolve: (parent, args) =>
      },
    }),
  }),
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,  //gives UI in browser
  })
);
app.listen(5000, () => console.log(expressGraphQL));
