import { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render = () => <ErrorBoundary />;
}

export default App;
