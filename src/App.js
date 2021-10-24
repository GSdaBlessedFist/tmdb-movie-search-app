import Title from "./components/Title";
import SearchMovies from "./components/SearchMovies";
import "./scss/styles.scss";

export default function App(){
  
  return (
    <div className="container">
        <Title title="React Movie Search"/>
        <SearchMovies/>
    </div>)
}
