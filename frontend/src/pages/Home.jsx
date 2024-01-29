import React from 'react';
import { useAuth } from '../context/auth';

const Home = () => {
      const [auth, setAuth] = useAuth();
      return (
            <>
                  <div>Home</div>
                  <h1>{JSON.stringify(auth, null, 4)}</h1>
            </>
      );
}

export default Home;
