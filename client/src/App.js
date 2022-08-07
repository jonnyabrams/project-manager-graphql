import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <h1>Oi oi</h1>
        </div>
      </ApolloProvider>
    </>
  );
};

export default App;
