import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import PNF from "../components/PNF";
import Spinner from "../components/Spinner";

const AdminRoute = () => {
      const [ok, setOk] = useState(false);
      const [auth, setAuth] = useAuth();

      useEffect(() => {
            const authCheck = async () => {
                  const res = await axios.get('/auth/admin-auth');
                  if (res.statusText === "OK") {
                        setOk(true);
                  } else {
                        setOk(false);
                  }
            };
            if (auth?.token) authCheck();
      }, [auth?.token]);

      return ok ? <Outlet /> : <PNF />;
};

export default AdminRoute;
