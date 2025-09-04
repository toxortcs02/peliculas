import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import moviesjson from './movies.json';
// <>
function App() {
  let movies = moviesjson;

  return (

    <PageWrapper>
      {movies.map(movie =>
        <Movie img={movie.img} title={movie.title} score={movie.score} director={movie.director} stars={movie.stars} release={movie.release} duration={movie.duration} mmpa={movie.mmpa}  >
          {movie.children}
        </Movie>
      )}
      <Pagination pagina={2} total ={4} onChange={(pagina) => {
        alert('Cambiando a la pagina ${pagina}')
      } 
        
      } />
      
    </PageWrapper>





  );
}

export default App;
