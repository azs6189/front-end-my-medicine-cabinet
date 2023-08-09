import logo from './logo.svg';
import './App.css';
import MedicationInfo from './components/MedicationLog';

function App() {
	return (
		<div id="App">
			<header>
				<h1>My Medicine Cabinet</h1>
			</header>

			<main>
				<MedicationInfo></MedicationInfo>
			</main>
		</div>
	);
}

export default App;
