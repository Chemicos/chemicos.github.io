import Card from "./Card";
import starImg from "../images/icon-star.svg"
import { useState } from "react";

export default function Rating ({rating, setRating, setShowThankYouPage}) {
    const [activeRatings, setActiveRatings] = useState({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false
    });

    const handleSubmit = () => {
        if(!rating) return;

        setShowThankYouPage(true);
    };

    return (
        <Card>
            <div className="star-img-container">
                <img src={starImg} alt="star-icon" />
            </div>
            <h2 className="title">How did we do?</h2>
            <p className="text">Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!</p>
            <div className="rating">
                <p className={activeRatings.oneStar ? "rating-container active" : "rating-container"} 
                onClick={() => {setActiveRatings({
                    oneStar: true,
                    twoStars: false,
                    threeStars: false,
                    fourStars: false,
                    fiveStars: false
                })
                setRating(1);
                }}>1</p>

                <p className={activeRatings.twoStars ? "rating-container active" : "rating-container"}
                onClick={() => {setActiveRatings({
                    oneStar: false,
                    twoStars: true,
                    threeStars: false,
                    fourStars: false,
                    fiveStars: false
                })
                setRating(2);
                }}>2</p>

                <p className={activeRatings.threeStars ? "rating-container active" : "rating-container"}
                onClick={() => {setActiveRatings({
                    oneStar: false,
                    twoStars: false,
                    threeStars: true,
                    fourStars: false,
                    fiveStars: false
                })
                setRating(3);
                }}>3</p>

                <p className={activeRatings.fourStars ? "rating-container active" : "rating-container"}
                onClick={() => {setActiveRatings({
                    oneStar: false,
                    twoStars: false,
                    threeStars: false,
                    fourStars: true,
                    fiveStars: false
                })
                setRating(4);
                }}>4</p>

                <p className={activeRatings.fiveStars ? "rating-container active" : "rating-container"}
                onClick={() => {setActiveRatings({
                    oneStar: false,
                    twoStars: false,
                    threeStars: false,
                    fourStars: false,
                    fiveStars: true
                })
                setRating(5);
                }}>5</p>
            </div>
            <button className="submit-btn" onClick={handleSubmit}>SUBMIT</button>
        </Card>
        )
}