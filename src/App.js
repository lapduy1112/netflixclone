import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '~/components/Navbar/Navbar';
import Intro from '~/components/Intro/Intro';
import Contents from '~/components/Contents/Contents';
import Menus from '~/components/Menus/Menus';
import MoviesDetail from '~/components/MoviesDetail/MoviesDetail';
import {useSelector} from 'react-redux'
import '~/App.scss';
function App() {
    const {MoviesDetail}=useSelector(state=>state.infoMovies)
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Intro />
                <Contents />
                <Menus />
                <MoviesDetail movie={MoviesDetail} showModal={MoviesDetail ? true : false} />
            </div>
        </Router>
    );
}
export default App;
