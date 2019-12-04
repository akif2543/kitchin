import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Post = ({_id, profilePhoto, userName, date, image, postBody, caption, commentButton, comments, likeButton, likeStatus, likeCounter, shareStatus, shares}) => {
  
  const [state, setState] = useState({
    likeButton: likeButton,
    likeStatus: likeStatus,
    likeCounter: likeCounter,
    shareButton: shareStatus
  });

  const like = async () => {
      setState({...state, likeButton: <FontAwesomeIcon icon={faSpinner} spin />})
    let response = await fetch('http://localhost:3001/feed/post/like', {
      method: 'POST',
      body: JSON.stringify({
        postid: _id
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(sessionStorage.getItem('jwt'))
      }
    })
    let json = await response.json();
    console.log(json);
    console.log(state.likeStatus)
    if (!state.likeStatus) {
      setState({...state, likeButton: <FontAwesomeIcon icon={['far', 'heart']} />, likeStatus: true, likeCounter: likeCounter})
    } else if (state.likeStatus) {
      setState({...state, likeButton: <FontAwesomeIcon icon={['fas', 'heart']} />, likeStatus: false, likeCounter: likeCounter})
    }
    console.log(state.likeStatus)
  };

  const share = async () => {
    let response = await fetch('http://localhost:3001/feed/post/share', {
      method: 'POST',
      body: JSON.stringify({
        postid: _id
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(sessionStorage.getItem('jwt'))
      }
    })
    let json = await response.json();
    console.log(json);
    if (state.shareButton === <FontAwesomeIcon icon={['far', 'share-square']} />) {
      setState({...state, shareButton: <FontAwesomeIcon icon={['fas', 'share-square']} />})
    } else if (state.shareButton === <FontAwesomeIcon icon={['fas', 'share-square']} />) {
      setState({...state, shareButton: <FontAwesomeIcon icon={['far', 'share-square']} />})
    }
  };

  return (
    <div className="card w-75">
        <div className="card-body">
            <img src={profilePhoto} className="profile-photo" />
            <h5 className="card-title post-username">{userName}</h5>
            <span className="card-text post-date">{date}</span>
            <p className="card-text post-body">{postBody}</p>
            <img src={image} alt={caption} className="post-image" />
            <div className="flex-container">
                <button href="#"><FontAwesomeIcon icon={['far', 'comment']} /></button>
                <span className="card-text count">{comments}</span>
                <button href="#" onClick={like}>{state.likeButton}</button>
                <span className="card-text count">{state.likeCounter}</span>
                <button href="#" onClick={share}>{state.shareButton}</button>
                <span className="card-text count">{shares}</span>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Show comments
                </button>
            </div>
            <div class="collapse" id="collapseExample">
  <div class="card card-body">
    <img src={profilePhoto} className="profile-photo" />
    <h6 className="card-title post-username">{userName}</h6>
    <span className="card-text post-date">{date}</span>
    <p className="card-text post-body">{postBody}</p>
  </div>
</div>
        </div>
    </div>
  );
};

export default Post;
