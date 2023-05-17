import Card from "./Card";
import thankYouImg from "../images/illustration-thank-you.svg";

import "../components/ThankYou.css";

export default function ThankYou ({rating}) {
    return(
        <Card>
            <div className="thankyou_img_container">
                <img src={thankYouImg} alt="" />
            </div>
            
            <div className="selected">
                <p>You selected {rating} out of 5</p>
            </div>

            <h2 className="title_ty">Thank you!</h2>
            <p className="text_ty">We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch!</p>
        </Card>
    )
}