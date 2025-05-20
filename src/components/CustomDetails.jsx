import React from "react";
import "./CustomDetails.css"

export default function CustomDetails({summary, children}) {
    return(
        <details className="custom-details">
            <summary>{summary}</summary>
            <div className="custom-details-content">{children}</div>
        </details>
    )
}