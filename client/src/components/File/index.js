import React from "react";
import picfile from "../../media/file.jpeg";

function File(color, filename, filespace) {
    return (
        <div className={color}>
            <img className="mx-auto d-flex" width="120" src={picfile}></img>
            <div className="document-footer">
                <span className="document-name"> {filename} </span>
                <span className="document-description"> {filespace} </span>
            </div>
        </div>
    );
}

export default File;