import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './routes/Router';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
