import React from "react";
import LeftNav from "../components/LeftNav";
import HeadNav from "../components/HeadNav";
import picfile from "../media/file.jpeg";
import File from "../components/File"

function Library() {
    return (
        <div>
        {HeadNav()}
        <div className="d-flex container h-90">
            {LeftNav()}
                        <div className="tab-pane active documents documents-panel">
                            {File("document success", "Excel database 2017", "1.2 MB")}
                            {File("document info", "Excel database 2016", "1.1 MB")}
                            {File("document danger", "PDF file 2016", "4.4 MB")}
                            {File("document dark", "Video file 2017", "98 MB")}
                            {File("document warning", "Video file 2016", "154 MB")}
                            {File("document danger", "Video file 2017", "98 MB")}
                            {File("document info", "Classy Logo", "4.3 MB")}
                            {File("document warning", "Holiday Greetings From Family Services", "18 KB")}
                            {File("document dark", "Sales Quote Parameters", "1.1 MB")}
                            {File("document info", "Proposal Template", "430 KB")}
                            {File("document success", "Word file 2017", "932 KB")}
                            {File("document success", "Word file 2016", "426 MB")}
                            {File("document warning", "Presentation 2017", "2.7 MB")}
                            {File("document dark", "Presentation 2016", "1.9 MB")}
                            {File("document danger", "CGA 2018 Summer Scholarship Applicationn", "0.8 MB")}
                            {File("document warning", "Computer Basic Class Application", "754 KB")}
                            {File("document danger", "Housing Resources", "1.9 MB")}
                        </div>
        </div>
        </div>
    );
}

export default Library;