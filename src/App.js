import React, { useState } from 'react';
import randomJoke from './jokes/randomJoke';
import { Button, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
  },
  joke: {
    fontSize: '1rem',
    fontStyle: 'italic',
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  title: {
    fontSize: '2rem',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,

    padding: '2px',

    marginTop: '30px',

    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '15px',
  },
  button: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '30px',
  },
}));

const jk = randomJoke();
export default function App() {
  const [joke, setJoke] = useState(jk);

  const classes = useStyles();

  const handleNewJoke = () => setJoke(randomJoke());

  return (
    <React.Fragment>
      <Container className={classes.container} fixed maxWidth='sm'>
        <Typography className={classes.title}>Yo Mamma Jokes</Typography>
        <Button className={classes.button} onClick={handleNewJoke} color='secondary' variant='outlined'>
          NEW JOKE
        </Button>
        <Typography className={classes.joke}>{joke}</Typography>
      </Container>
    </React.Fragment>
  );
}
