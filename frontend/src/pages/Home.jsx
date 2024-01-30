import React from 'react';
import { useAuth } from '../context/auth';

const Home = () => {
      const [auth, setAuth] = useAuth();
      return (
            <main className=" relative w-full m-auto">
                  <div>Home</div>
                  <pre>{JSON.stringify(auth, null, 4)}</pre>
            </main>
      );
}

export default Home;
