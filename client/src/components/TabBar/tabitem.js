import React from "react";

// function Material(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

function TabItem(activestate, link, tabtitle) {
    var navclass;
    var truthval;
    if (activestate == true){
        navclass = "nav-link active";
        truthval = "true";
    }
    else{
        navclass = "nav-link";
        truthval = "false";
    }

    return (
        <li className="nav-item" role="presentation">
            <a
                className={navclass}
                id="ex2-tab-1"
                data-mdb-toggle="tab"
                href={link}
                role="tab"
                aria-controls="ex2-tabs-1"
                aria-selected={truthval}
            >
                {tabtitle}
            </a>
        </li>
    );
}

export default TabItem;