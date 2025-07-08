import React from "react";
import "./CustomDetails.css"

import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

export default function CustomDetails({summary, children}) {
    return(
        <details className="custom-details">
            <summary>{summary}</summary>
            <div className="custom-details-content">{children}</div>
        </details>
    )
}