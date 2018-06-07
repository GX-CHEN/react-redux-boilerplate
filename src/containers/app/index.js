import React from 'react';
import { Route } from 'react-router-dom';
import ListImage from '../pages/listImage';
import ViewImage from '../pages/viewImage';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={ListImage} />
      <Route exact path="/viewImage" component={ViewImage} />
    </main>
  </div>
);

export default App;
