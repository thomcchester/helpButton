import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

<Router history={browserHistory}>
  <Route path="/" component={Root}>
  </Route>
</Router>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
