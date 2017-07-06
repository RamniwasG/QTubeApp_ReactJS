import React from 'react';

const Comment = () => {

  return (
    <div className="col-lg-8">
      <div>
        <strong>comment here</strong><br />
        <textarea name="text" rows="4" className="form-control"></textarea>
        <button type="button" className="btn btn-primary" >Post</button>
      </div>
    </div>
  );
}

export default Comment;
