import React, { useState } from 'react';
import randomJoke from './jokes/randomJoke';
import { Button } from '@material-ui/core';

const jk = randomJoke();
export default function App() {
  const [joke, setJoke] = useState(jk);

  const handleNewJoke = () => setJoke(randomJoke());

  return (
    <React.Fragment>
      <Button onClick={handleNewJoke} color='secondary' variant='outlined'>
        NEW JOKE
      </Button>
      <div
        style={{
          textAlign: 'center',
          marginTop: '20vh',
          fontSize: '5vw',
          fontStyle: 'italic',
          color: 'red',
          fontWeight: 'bold',
        }}>
        {joke}
      </div>
    </React.Fragment>
  );
}
