import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";


import ErrorMessage from "../errorMessage/ErrorMessage"

const Page404 = () => {

  return (
    <div>
      <Helmet>
          <title>Error Page</title>
      </Helmet>
      <ErrorMessage />
      <p style={{"fontSize": "24px", "textAlign": "center", "fontWeight": "bold", "marginTop": "24px"}}>Page does not exist</p>
      <Link style={{"display": "block", "fontSize": "24px", "textAlign": "center", "fontWeight": "bold", "marginTop": "24px"}} to="/">Back to Main Page</Link>
    </div>
  )
}

export default Page404;