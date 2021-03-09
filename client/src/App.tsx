import React from 'react';
import {useQuery, gql} from '@apollo/client';

import styles from './App.module.css';

function App() {
  const {data} = useQuery(gql`
    query userList {
      users {
        id
        name
        subscription
        cars {
          brand
          licensePlate
        }
      }
    }
  `);

  const result = JSON.stringify(data?.users, null, 2);

  return (
    <div>
      <h1 className={styles.header}>React + Apollo Client</h1>
      <pre className={styles.content}>{result}</pre>
    </div>
  );
}

export default App;
