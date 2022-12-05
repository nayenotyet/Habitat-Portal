import React from "react";
import HeadNav from "../components/HeadNav";
import LeftNav from "../components/LeftNav";


export const Hours = () => {
    return (
        <div>
            {HeadNav()}
            <div className="d-flex container h-90">
                {LeftNav()}
                <p className="d-block mx-5 px-5 w-90 hours">
                    <div>In Operation Year 2022-2023, you’ve volunteered 66 hours</div>
                    <div>20 hours were spent in regular meetings;</div>
                    <div>44 hours were spent in on-site events.</div>
                    <h1 className="h-10"></h1>
                    <div>We appreciate your work and contribution to Atlanta Habitat for Humanity.</div>
                    Together, we’re building a world where everyone has a decent place to live.
                </p>
            </div>
        </div>
    )
}

export default Hours;