import React from "react";
import {AuthConsumer} from"../authContext";

const Logout = () =>(
    <AuthConsumer>
        {({logout})=>(
            <button className="btn btn-sm btn-dafualt" onClick={logout}>
                Logout
            </button>
        )}
    </AuthConsumer>
);

export default Logout;