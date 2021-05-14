import React from 'react';
import randomJoke from './jokes/randomJoke';

export default function App() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20vh',
        fontSize: '5vw',
        fontStyle: 'italic',
        color: 'red',
        fontWeight: 'bold',
      }}>
      {randomJoke()}
    </div>
  );
}
