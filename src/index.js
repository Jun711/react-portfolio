import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css'
import './theme/globalStyle'
import registerServiceWorker from './registerServiceWorker';

require('font-awesome-webpack');

ReactDOM.render(<App/>, document.getElementById('root'));

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
