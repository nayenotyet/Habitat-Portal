import React from 'react';
import Activity from "../components/Activity/index";
import LeftNav from "../components/LeftNav/index";
import HeadNav from "../components/HeadNav/index";
import piccal from "../media/calendar.png";
import picgroup from "../media/Group 1.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext"


// import { Link } from "react-router-dom";


export const Landpage = () => {

   const { currentUser } = useContext(AuthContext);


   return (
       <header className="pb-3">
           {HeadNav()}
           <div className="d-flex justify-content-between container h-90">
               {LeftNav()}
               <div className="list-group mt-5 pt-3 w-50">
                   <div className="col-md-12">
                       <h2>Good Morning  { currentUser?.split("@")[0] }!</h2>
                       <div className="mt-3 bg-green rounded-3">
                           <p className="p-3"> Announcements: Welcome to Atlanta Habitat for Humanity's first board portal!</p>
                       </div>
                       <div className="bg-green rounded-3">
                           <p className="p-3"> Suggested Actions: check your personal information and make sure it's all up-to-date</p>
                       </div>


                       <div className="mt-3 bg-lightgrey rounded-3 d-flex">
                           <img className="m-2" width="40" height="40" src={piccal}></img>
                           <div>
                               <h1 className="p-2"> Onboarding Meeting</h1>
                               <p className="p-2 text-secondary"> Friday, October 20, 2022 <br></br>
                                   Time: 8am - 8pm<br></br>
                                   Attendance Required:  New Board Members<br></br>
                                   Location: 1762 Clifton Rd<br></br>
                               </p>
                           </div>
                           <img className="m-4" width="120" height="50" src={picgroup}></img>
                       </div>

                       <div className="mt-3 bg-lightblue rounded-3 d-flex">
                           <img className="m-2" width="40" height="40" src={piccal}></img>
                           <div>
                               <h1 className="p-2"> Fundraising Gala</h1>
                               <p className="p-2 text-secondary"> Friday, October 20, 2022 <br></br>
                                   Time: 8am - 8pm<br></br>
                                   Attendance Required:  New Board Members<br></br>
                                   Location: 1762 Clifton Rd<br></br>
                               </p>
                           </div>
                           <img className="m-4 ms-5" width="120" height="50" src={picgroup}></img>
                       </div>
                   </div>
               </div>

               <div className="list-group mt-5 pt-4 w-25">
                   <h4 className="mb-4 mx-2">Activity Log</h4>
                   {Activity("October 24, 2022")}
                   {Activity("Updated Meeting: Client Meeting")}
                   {Activity("Updated Event: Fundraising Gala")}
                   <span className="h-10"></span>
                   {Activity("October 20, 2022")}
                   {Activity("New Document: Orientation Must-Read")}
               </div>

           </div>
       </header>
   )
}

export default Landpage