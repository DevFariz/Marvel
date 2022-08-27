import {Link} from "react-router-dom";

import ErrorMessage from "../errorMessage/ErrorMessage"

const Page404 = () => {

  return (
    <div>
      <ErrorMessage />
      <p style={{"fontSize": "24px", "textAlign": "center", "fontWeight": "bold", "marginTop": "24px"}}>Page does not exist</p>
      <Link style={{"display": "block", "fontSize": "24px", "textAlign": "center", "fontWeight": "bold", "marginTop": "24px"}} to="/">Back to Main Page</Link>
    </div>
  )
}

export default Page404;