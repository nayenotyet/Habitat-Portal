import React from "react";

function Activity(info) {
   return (
       <div className="d-flex bg-white text-dark mb-3" aria-current="true">
           <div className="vl"></div>
               <span className="mt-1 dot"></span>
           <p className="mx-3 mb-1">{info}</p>
       </div>
   );
}

export default Activity;