// CSS
import './index.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import ReachMe from './components/ReachMe';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App font-serif bg-background text-font">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/reachme">
						<ReachMe />
					</Route>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
