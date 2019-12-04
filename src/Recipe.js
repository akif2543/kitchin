import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Recipe = ({_id, profilePhoto, userName, date, recipeTitle, prepTime, cookTime, tags, image, recipeDescription, caption, ingredientList, recipeDirections, commentButton, comments, likeStatus, likes, shareButton, shares}) => {
  
    const [state, setState] = useState({
      likeButton: likeStatus,
      shareLabel: shareButton
    });

    return (
        <div className="card w-75">
            <div className="card-body">
                <img src={profilePhoto} className="profile-photo" />
                <h5 className="card-title post-username">{userName}</h5>
                <span className="card-text post-date">{date}</span>
                <h6 className="card-title recipe-title">{recipeTitle}</h6>
                <span className="card-text recipe-time">{prepTime}</span>
                <span className="card-text recipe-time">{cookTime}</span>
                <p className="card-text post-body">{recipeDescription}</p>
                <span className="card-text recipe-tags">{tags}</span>
                <img src={image} alt={caption} className="post-image" />
                <ul className="card-text ingredient-list">{ingredientList}</ul>
                <ol className="card-text recipeDirections">{ingredientList}</ol>
                <div className="flex-container">
                    <button href="#">{commentButton}</button>
                    <span className="card-text count">{comments}</span>
                    <button href="#">{state.likeButton}</button>
                    <span className="card-text count">{likes}</span>
                    <button href="#">{state.shareLabel}</button>
                    <span className="card-text count">{shares}</span>
                </div>
            </div>
        </div>
      );
};

export default Recipe;