"use strict";

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// RESOLVERS
const app = (0, _express.default)();
const server = new _apolloServerExpress.ApolloServer({
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default
});
server.applyMiddleware({
  app
});
app.listen({
  port: 3008
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwaS9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJzZXJ2ZXIiLCJBcG9sbG9TZXJ2ZXIiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsImFwcGx5TWlkZGxld2FyZSIsImxpc3RlbiIsInBvcnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFGQTtBQUlBLE1BQU1BLEdBQUcsR0FBRyx1QkFBWjtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxpQ0FBSixDQUFpQjtBQUM1QkMsRUFBQUEsUUFBUSxFQUFSQSxpQkFENEI7QUFFNUJDLEVBQUFBLFNBQVMsRUFBVEE7QUFGNEIsQ0FBakIsQ0FBZjtBQUtBSCxNQUFNLENBQUNJLGVBQVAsQ0FBdUI7QUFBRUwsRUFBQUE7QUFBRixDQUF2QjtBQUVBQSxHQUFHLENBQUNNLE1BQUosQ0FBVztBQUFFQyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUFYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiO1xyXG5cclxuLy8gUkVTT0xWRVJTXHJcbmltcG9ydCByZXNvbHZlcnMgZnJvbSBcIi4vcmVzb2x2ZXJzXCI7XHJcbmltcG9ydCB0eXBlRGVmcyBmcm9tIFwiLi90eXBlRGVmc1wiO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XHJcbiAgICB0eXBlRGVmcyxcclxuICAgIHJlc29sdmVyc1xyXG59KVxyXG5cclxuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KVxyXG5cclxuYXBwLmxpc3Rlbih7IHBvcnQ6IDMwMDggfSkiXX0=