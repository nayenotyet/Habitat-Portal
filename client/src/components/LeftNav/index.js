import React from "react";
import NavItem from "./navitem";
import * as Icon from 'react-bootstrap-icons';

function LeftNav() {
    return (
            <div className="d-flex flex-column flex-shrink-0 w-small mt-5">
                <ul className="leftnav nav nav-pills flex-column mb-auto pt-2">
                    {/*{NavItem("/Register","Home")}*/}
                    {NavItem("/Messages","Messages", <Icon.ChatDotsFill className="mx-2"/>)}
                    {NavItem("/Calendar","Calendar", <Icon.Calendar2CheckFill className="mx-2"/>)}
                    {NavItem("/Library","Library", <Icon.FileEarmarkTextFill className="mx-2"/>)}
                    {NavItem("/Orientation","Orientation", <Icon.ClockFill className="mx-2"/>)}
                    {NavItem("/Directory","People Directory", <Icon.PeopleFill className="mx-2"/>)}
                </ul>
            </div>
    );
}

export default LeftNav;