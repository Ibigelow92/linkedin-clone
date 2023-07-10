import React, { useState, useMemo } from "react";
import { postStatus, getStatus } from "../../../api/FirestoreAPI";
import ModalComponent from "../Modal";
import PostsCard from "../PostsCard";
import { getUniqueID } from "../../../helpers/getUniqueId";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import "./index.scss";

export default function PostStatus({ currentUser }) {
  let userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([])
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail,
      userName: currentUser.name,
      postID: getUniqueID(),
    };
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  return (
    <div className="post-status-main">
        <div className="post-status">
          <button className="open-post-modal" onClick={() => setModalOpen(true)}>
            Start a post
          </button>
        </div>

        <ModalComponent 
        setStatus={setStatus} 
        modalOpen={modalOpen}  
        setModalOpen={setModalOpen} 
        status={status}
        sendStatus={sendStatus}
        />

        <div>
          {allStatuses.map((posts) => {
            // The timestamp and the key weren't in the tutorial. 
            return <PostsCard posts={posts} timeStamp={posts.timeStamp} key={posts.id} />;
          })}
        </div>
    </div>
  );
}
