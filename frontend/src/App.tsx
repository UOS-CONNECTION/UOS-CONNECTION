import { Provider } from 'react-redux';
import './App.css';
import Router from './Routes';
import store from './Store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
