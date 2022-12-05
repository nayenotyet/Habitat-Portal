import HeadNav from "../components/HeadNav/index";
import LeftNav from "../components/LeftNav/index";
import React from "react";

export default function Orientation() {
    return (


        <div>
            {HeadNav()}
            <div className="d-flex container h-90">
                {LeftNav()}
                <div className="col-sm-8 mt-5 mx-5">


                    <h2 className="mt-3">Atlanta Habitat for Humanity</h2>
                    <p>What we do</p>
                    <p></p>
                    <p>Habitat for Humanity International(HFHI) is a global non-profit organization whose mission is to build strength, stability and self-reliance in partnership with families in need of safe and affordable housing. Habitat volunteers help homeowners build homes and pay affordable mortgages. Established in 1976, its operational headquarters are in Americus, Georgia, and its administrative headquarters are in Atlanta, Georgia.
                    </p>
                    <p> Habitat for Humanity International operates at the local level through its network of affiliates, which are separate legal entities from HFHI. Each Habitat for Humanity coordinates its own construction, selects local homebuyer applicants, and many operate local ReStore home improvement centres.
                    </p>
                    <p>Atlanta Habitat for Humanity(Atlanta Habitat, or AHFH) is a top-ten affiliate of Habitat for Humanity International. Atlanta Habitat envisions an Atlanta where all people have access to quality affordable housing in safe, vibrant neighbourhoods with opportunities to thrive. We have worked with more than 6,000 family members to achieve the dream of affordable homeownership since 1983. Our mission is to transform communities by acting as a catalyst for neighbourhood revitalization through education, innovative development, partnerships, and long-term relationships with families. Working to advance this mission is our staff and volunteers and, more importantly, the board of directors.
                    </p>

                    <h2>Portal User Guide</h2>
                    <p>This portal is tailored to Atlanta Habitat for Humanity’s specific needs in order to provide a communication platform for the organization’s Board of Directors, Advisory Council, and Executive team. The portal is designed to enable users with self-guided information updates and provide a unified space for all AHFH-related information.
                    </p>

                    <h2>Onboarding</h2>
                    <p>For newly initiated board members, please also refer to the onboarding guide for next steps.
                    </p>

                    <h2>Contacts </h2>
                    <p>For any questions regarding technical glitches and information display, please contact Anna Liu at anna.liu@emory.edu.
                    </p>
                    <p>For any questions regarding log-in information or retracting password, please contact Drew McGuffin.
                    </p>
                    <p>For any questions regarding any events or information related to AHFH, please contact Ife Jacobs.
                    </p>

                    <h2>Frequently Asked Questions</h2>
                    <p>Q: What should I do if I can’t make it to an event marked on my calendar? <br></br>
                        A: Please message the event organizer, as listed on the event page, and let them know your reason for absence.
                    </p>

                    <p>
                        Q: How should I find a person in the People Directory?<br></br>
                        A: In People Directory, you can apply filters based on certain departments and functions, and you’ll be able to message them directly from there.
                    </p>







                    {/* <ul class="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
     <li class="nav-item" role="presentation">
       <a
         class="nav-link active"
         id="ex2-tab-1"
         data-mdb-toggle="tab"
         href="#HumanitiesForHabitat"
         role="tab"
         aria-controls="ex2-tabs-1"
         aria-selected="true"
         >
           What We Do
         </a>
     </li>
     <li class="nav-item" role="presentation">
       <a
         class="nav-link"
         id="ex2-tab-2"
         data-mdb-toggle="tab"
         href="#ex2-tabs-2"
         role="tab"
         aria-controls="ex2-tabs-2"
         aria-selected="false"

         >
          <Link to="/Orientation/UserGuide">Portal User Guide</Link>
           </a >
     </li>
     <li class="nav-item" role="presentation">
       <a
         class="nav-link"
         id="ex2-tab-3"
         data-mdb-toggle="tab"
         href="#ex2-tabs-3"
         role="tab"
         aria-controls="ex2-tabs-3"
         aria-selected="false">
           <Link to='/Orientation/Onboarding'>Onboarding</Link>
       </a>
     </li>

     <li class="nav-item" role="presentation">
       <a
         class="nav-link"
         id="ex2-tab-3"
         data-mdb-toggle="tab"
         href="#ex2-tabs-3"
         role="tab"
         aria-controls="ex2-tabs-3"
         aria-selected="false">
           <Link to='/Orientation/Contact'>Contact</Link>
       </a>
     </li>

     <li class="nav-item" role="presentation">
       <a
         class="nav-link"
         id="ex2-tab-3"
         data-mdb-toggle="tab"
         href="#ex2-tabs-3"
         role="tab"
         aria-controls="ex2-tabs-3"
         aria-selected="false">
           <Link to='/Orientation/FAQ'>FAQ</Link>
       </a>
     </li>
   </ul>

   <div class="tab-content" id="ex2-content">
     {whatwedo()}
     <div
       class="tab-pane fade"
       id="ex2-tabs-2"
       role="tabpanel"
       aria-labelledby="ex2-tab-2"
     >
       {portalguide()}
     </div>
     <div
       class="tab-pane fade"
       id="ex2-tabs-3"
       role="tabpanel"
       aria-labelledby="ex2-tab-3"
     >
       Tab 3 content
     </div>
     </div> */}

                    {/* <ul class="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
 <li class="nav-item" role="presentation">
   <a
     class="nav-link active"
     id="ex2-tab-1"
     data-mdb-toggle="tab"
     href="#ex2-tabs-1"
     role="tab"
     aria-controls="ex2-tabs-1"
     aria-selected="true"
     >Link</a
   >
 </li>
 <li class="nav-item" role="presentation">
   <a
     class="nav-link"
     id="ex2-tab-2"
     data-mdb-toggle="tab"
     href="#ex2-tabs-2"
     role="tab"
     aria-controls="ex2-tabs-2"
     aria-selected="true"
     >Very very very very long link</a
   >
 </li>
 <li class="nav-item" role="presentation">
   <a
     class="nav-link"
     id="ex2-tab-3"
     data-mdb-toggle="tab"
     href="#ex2-tabs-3"
     role="tab"
     aria-controls="ex2-tabs-3"
     aria-selected="true"
     >Another link</a
   >
 </li>
</ul>
<div class="tab-content" id="ex2-content">
 <div
   class="tab-pane fade show active"
   id="ex2-tabs-1"
   role="tabpanel"
   aria-labelledby="ex2-tab-1"
 >
   Tab 1 content
 </div>
 <div
   class="tab-pane fade"
   id="ex2-tabs-2"
   role="tabpanel"
   aria-labelledby="ex2-tab-2"
 >
   Tab 2 content
 </div>
 <div
   class="tab-pane fade"
   id="ex2-tabs-3"
   role="tabpanel"
   aria-labelledby="ex2-tab-3"
 >
   Tab 3 content
 </div>
</div> */}
                </div>
            </div>
        </div>

    )
}




