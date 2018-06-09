import React from 'react';
import { Route } from 'react-router-dom';
import ListImage from '../pages/listImage';
import ViewImage from '../pages/viewImage';

/**
 * mapping the route (sub path of URL) to the handling component
 * With the help of react-router, we can easily manage different page separately
 * However notice it doesn't change the fact it's still SPA (Single Page Application), because only one js bundle is created
 */
const App = () => (
  <div>
    <main>
      <Route exact path="/" component={ListImage} />
      <Route exact path="/viewImage" component={ViewImage} />
    </main>
  </div>
);

export default App;
