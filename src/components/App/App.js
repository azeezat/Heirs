import React from 'react';
import Routes from '../../Routes/Routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faPlay,faSignInAlt ,faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSignInAlt,faPlay,faSearch)

const App = () => {
  return (
    <Routes/>
  );
};

export default App;