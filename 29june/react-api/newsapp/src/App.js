import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
import "./App.css";

const App = () => {
  // const data = useGlobalContext();
  return (
    <>
      {/* <div>Welcome to my news website</div> */}
      <Search />
      <Stories />
      <Pagination />
 
    </>

  );
};

export default App