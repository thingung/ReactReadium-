import { useParams, Outlet} from 'react-router-dom';
import React, { useEffect } from "react";
import {fetchSingleStory} from "../store/singleStory"
import { useSelector } from "react-redux";

const SingleStory = (props) => {
    const params = useParams();
    const stori = useSelector((state) => state);
    console.log("This is the state before", stori); 
    console.log(params.storyId)
    fetchSingleStory(params.storyId);
    // console.log("This is temp:", temp);
    const story = useSelector((state) => state);
    console.log("This is the story after fetch", story);

    const fakeStory = {
        title: 'Ships',
        id: 2,
        content: "A ship in port is safe,\nbut that's not what ships are built for",
        author: {
          id: 1,
          name: 'Grace Hopper'
        },
        comments: [
          {
            id: 4,
            content: 'I like ships!',
            author: {
              id: 2,
              name: 'Alan Turing',
              imageUrl: 'default-author.png'
            }
          }
        ]
      }
  return (
<div id='single-story' className='column'>
  <h1>fakeStory.title</h1>
  <p>fakeStory.content</p>
  <h3>Responses:</h3>
  <div id='comments'>
    <div className='comment row'>
      <img src='COMMENT_1_AUTHOR_IMAGE_URL' />
      <div className='column'>
        <a>
          <h5>fakeStory.comments[0].author.name</h5>
        </a>
        <div>COMMENT_1_CONTENT</div>
      </div>
    </div>
    <div className='comment row'>
      <img src='COMMENT_2_AUTHOR_IMAGE_URL' />
      <div className='column'>
        <a>
          <h5>COMMENT_2_AUTHOR_NAME</h5>
        </a>
        <div>COMMENT_2_CONTENT</div>
      </div>
    </div>
  </div>
</div>
  )
}
export default SingleStory;