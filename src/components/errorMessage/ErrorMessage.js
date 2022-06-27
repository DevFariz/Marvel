import img from "./error.gif"

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="error" style={{display: "block", width: "200px", height: "200px", margin: "0 auto"}}/>
        </>
    )
}

export default ErrorMessage;