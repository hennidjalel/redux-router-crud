// css
import { Button } from 'react-bootstrap';
import './errorPage.css'
// react router
import { useRouteError, useNavigate } from "react-router-dom";



const ErrorPage = () => {

    const error = useRouteError();

    const navigate = useNavigate()
    return (
        <div className="error">
            <div className="container-floud">
                <div className="col-xs-12 ground-color text-center">
                    <div className="container-error-404">
                        <div className="clip"><div className="shadow"><span className="digit thirdDigit">4</span></div></div>
                        <div className="clip"><div className="shadow"><span className="digit secondDigit">0</span></div></div>
                        <div className="clip"><div className="shadow"><span className="digit firstDigit">4</span></div></div>
                        <div className="msg">OH!<span className="triangle"></span></div>
                    </div>
                    <h2 className="h1">Sorry! {error.statusText || error.message}</h2>
                    <Button variant='link' onClick={() => navigate("/", { replace: true })}>Go Back</Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage