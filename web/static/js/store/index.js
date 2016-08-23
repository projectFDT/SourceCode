import { createStore, applyMiddleware }     from 'redux';
import { routerMiddleware }                 from 'react-router-redux';

import reducers                             from '../reducers';

export default function configureStore(browserHistory){
  const reduxRouterMiddleware = routerMiddleware(browserHistory)
  const middlewares = [reduxRouterMiddleware];

  if (process.env.NODE_ENV === `development`) {
    const createLogger = require(`redux-logger`);
    const logger = createLogger({
        level: 'info',
        collapsed: true,
    });
    middlewares.push(logger);
  }


  return applyMiddleware(...middlewares)(createStore)(reducers);
}
