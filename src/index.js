import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// 1. Change serviceWorker.unregister(); to serviceWorker.register();
// then go to public/manifest.json  where you can change icon, names and so on
// then use "yarn build"
// then "yarn global add serve" (if we haven't) and "serve -s build"   that use http://localhost:5000/. Ok, we ran our app as PWA


serviceWorker.register();
