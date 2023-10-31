import { Component } from 'react';
import './App.css';
// import Searcher from './components/Searcher';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render = () => <ErrorBoundary />;
}

export default App;
