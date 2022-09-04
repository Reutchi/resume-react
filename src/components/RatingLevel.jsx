import { RatingDots } from "./RatingDots";
import './css/rating-level.scss';

export const RatingLevel = function ({name, rate}) {
    return (
        <div cy='rating-level' className="rating-level">
            <span>{name}</span>
            <RatingDots rate={rate} />
        </div>
    )
}