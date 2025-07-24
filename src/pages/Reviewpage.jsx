import React from 'react';
import reviews from './Reviewsection'; // Adjust the path according to your folder structure

const ReviewsPage = () => {
    return (
        <div className="container my-3">
            <h2 className="text-center">Customer Reviews</h2>
            <div className="row">
                {reviews.map((review) => (
                    <div className="col-md-4" key={review.id}>
                        <div className="card my-2">
                            <div className="card-body">
                                <h5 className="card-title">{review.name}</h5>
                                <p className="card-text">{review.comment}</p>
                                <p className="card-text"><strong>Rating: {review.rating}/5</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsPage;
