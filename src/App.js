import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SearchBar />
        <SearchResults />
      </div>
    </>
  );
}

export default App;
