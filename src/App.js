import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
// <>
function App() {
      let peliculas = [
        {            
            img: "images/uploads/mv1.jpg",
            title: "oblivion (2012) component",
            score: "8.1",
            director: "Joss Whedon",
            stars: "Robert Downey Jr , Chris Evans , Chris Hemsworth",
            release: "Release 1 May 2015",
            duration: "2h 21min",
            mmpa: "MMPA: PG-13",
            children: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
        },
        {            
            img: "images/uploads/mv2.jpg",
            title: "into the wild (2014) component",
            score: "7.8",
            director: "Anthony Russo, Joe Russo",
            stars: "Chris Evans , Samuel L. Jackson , Scarlett Johansson",
            release: "Release: 1 June 2015",
            duration: "2h 21min",
            mmpa: "MMPA: PG-13",
            children: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat..."
        }
    ]
  return (

    <PageWrapper>

   <Movie img="images/uploads/mv1.jpg"  title="oblivion (2012) component" score="8.1" director="Joss Whedon" stars="Robert Downey Jr , Chris Evans , Chris Hemsworth " release="Release 1 May 2015" duration="2h 21min" mmpa="MMPA: PG-13" >
	  Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity... 
	  </Movie>

	  <Movie img="images/uploads/mv2.jpg" title="into the wild (2014) component" score="7.8" director="Anthony Russo, Joe Russo" stars="Chris Evans , Samuel L. Jackson , Scarlett Johansson" 
    release="Release: 1 June 2015" duration="2h 21min" mmpa="MMPA: PG-13" >
      As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...
	  </Movie>  
    </PageWrapper>




  );
}

export default App;
