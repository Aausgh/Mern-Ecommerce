import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import PNF from "../PNF";
import Spinner from "../Spinner";

const PrivateRoute = () => {
      const [ok, setOk] = useState(false);
      const [auth, setAuth] = useAuth();

      useEffect(() => {
            const authCheck = async () => {
                  const res = await axios.get('/auth/user-auth');
                  if (res.statusText === "OK") {
                        setOk(true);
                  } else {
                        setOk(false);
                  }
            };
            if (auth?.token) authCheck();
      }, [auth?.token]);

      return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;
