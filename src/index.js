import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import './index.css'
import './theme/globalStyle'
import registerServiceWorker from './registerServiceWorker';

require('font-awesome-webpack');

ReactDOM.render(routes, document.getElementById('root'));

// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root')
//   )
// };
// render(routes);
registerServiceWorker();
