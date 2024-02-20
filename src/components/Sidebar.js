import React, { useState } from "react";
import "./Sidebar.scss";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "720px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    padding: "50px",
  },
};

const Sidebar = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <aside>
        <div className="logo">
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li onClick={openModal}>
              <a>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          style={{ position: "absolute", right: "30px" }}
          className="close-btn"
          onClick={closeModal}
        >
          <GrClose />
        </button>
        <div className="modal">
          <h3>About BrandColors</h3>
          <p>
            BrandColors was created by DesignBombs. The goal was to create a
            helpful reference for the brand color codes that are needed most
            often.{" "}
          </p>
          <br></br>
          <p>
            It's been featured by Smashing Magazine, CSS-Tricks, Web Design
            Depot, Tuts+, and over 2 million pageviews. There are now over 600
            brands with 1600 colors and the collection is always growing.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
