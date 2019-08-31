import React from 'react';
import Routes from '../../Routes/Routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faCoffee,faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee,faPlay)

const App = () => {
  return (
    <Routes/>
  );
};

export default App;