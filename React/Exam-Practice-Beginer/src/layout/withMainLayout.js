import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function withMainLayout(Component) {
    function layout(props) {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-lg-2 p-0">
                            <Sidebar />
                        </div>
                        <div className="col-md-9 col-lg-10">
                            <Component {...props} />  
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return layout;
}