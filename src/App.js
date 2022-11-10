import './App.css';
import requests from './request';
import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className="row">
        <Row fetchUrl={requests.fetchNetflixOriginals} title={'Netflix Original'} isLargeRow/>
        <Row fetchUrl={requests.fetchTreding} title={'Trending Now'} />
        <Row fetchUrl={requests.fetchTopRated} title={'Top Rated'} />
        <Row fetchUrl={requests.fetchActionMovies} title={'Action Movies'} />
        <Row fetchUrl={requests.fetchComedyMovies} title={'Comedy Movies'} />
        <Row fetchUrl={requests.fetchHorrorMovies} title={'Horror Movies'} />
        <Row fetchUrl={requests.fetchRomanceMovies} title={'Romance Movies'} />
        <Row fetchUrl={requests.fetchDocumentaries} title={'Documentaries'} />
      </div>
    </div>
  );
}

export default App;