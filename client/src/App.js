import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import MovieList from './components/MovieList';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap'
import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <MovieList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
