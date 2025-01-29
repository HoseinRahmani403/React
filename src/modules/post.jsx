
import React, { useState } from "react";

function Post() {
  let list = [];
  const [postData, setPostData] = useState(list);
  const [inputValues, setInputValues] = useState({ one: "", two: "", three: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((x) => ({ ...x, [name]: value }));
  }

  const handleSubmit = () => {
    setPostData((x) => [...x, inputValues]);
    setInputValues({ one: "", two: "", three: "" });
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <input type="text" name="one" placeholder="User Name" value={inputValues.one} onChange={handleInputChange} />
          <br />
          <input type="email" name="two" placeholder="Email" value={inputValues.two} onChange={handleInputChange} />
          <br />
          <input type="text" name="three" placeholder="Post" value={inputValues.three} onChange={handleInputChange} />
          <br />
          <p>{postData.map((post, index) => (
            <div key={index}>
              <p>User Name: {post.one}</p>
              <p>You Email: {post.two}</p>
              <p>Post: {post.three}</p>
            </div>
          ))}</p>
          <button onClick={handleSubmit}>Post</button>
        </div>
      </div>
    </>
  )
}
export default Post;