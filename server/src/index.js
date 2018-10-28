import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// proxy
// any request sent to route '/api' will sent off to this domain
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  // returns an array of promises of all the pending network requests
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    // check if loadData exists
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    // data loading requests are completed
    // store is now loaded with data
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

//An app to learn how Server Side Rendering works
