import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import TodoProvider from "./Providers/TodoProvider";

function Home() {
  /*TODO: 
  - We have to manage all the state from the App component alone
  - We can use local storage to persist the to-do items
  - Also, sub components of App need a way to modify the state by
    passing in the functions as props.

    FIXME: 
    - Use Typescript
    - Refactor to use React Context API
  */
  return (
    <TodoProvider>
      <div className="container">
        <Header />
        <Main/>
        <Footer/>
      </div>
    </TodoProvider>
  );
}

export default Home;