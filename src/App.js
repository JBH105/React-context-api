import React from 'react';
import { Container } from 'semantic-ui-react';

import CounterView from './views/counter-view';
import ContactView from './views/contact-view';

function App() {
  return (
    <Container>
      <h1>React Context Demo</h1>
      <CounterView />
      <ContactView />
    </Container>
  );
}

export default App;
