import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { isValidImageURL } from "../lib";
import Backdrop from "./Backdrop";
import Button from "./Button";
import InputField from "./InputField";

const ModalOverlay = (props) => {
  const [inputs, setInputs] = useState({
    photoLabel: "",
    photoURL: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await isValidImageURL(inputs.photoURL);

    if (!isValid) {
      alert("Please enter a valid image URL.");
      return;
    }

    const requestBody = {
      photoLabel: inputs.photoLabel,
      photoURL: inputs.photoURL,
    };

    const request = await fetch(
      import.meta.env.VITE_SERVER_ADDRESS + "/api/uploadphoto",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    const response = await request.json();
    props.setPhotos((prev) => [response.data, ...prev]);
    console.log(response.message);
    setInputs({
      photoLabel: "",
      photoURL: "",
    });
    props.handleModal();
  };

  const content = (
    <div
      onClick={(e) => e.stopPropagation()}
      className="modal"
      ref={props.nodeRef}
    >
      <div className="text-lg">{props.title}</div>
      <form className="flex flex-col gap-4">
        <InputField
          name={"photoLabel"}
          type="text"
          placeholder="Cute cat"
          value={inputs.photoLabel}
          label={"Label"}
          paddingX={10}
          paddingY={8}
          onChange={handleChange}
        />
        <InputField
          name={"photoURL"}
          type="text"
          placeholder="https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=477&q=80"
          value={inputs.photoURL}
          label={"Photo URL"}
          paddingX={10}
          paddingY={8}
          onChange={handleChange}
        />
        <div className="flex flex-row-reverse gap-2">
          <Button
            type={"submit"}
            backgroundColor={"#3DB46D"}
            textColor={"#FFFFFF"}
            onClick={handleSubmit}
            padding={16}
          >
            Submit
          </Button>
          <Button
            type={"button"}
            backgroundColor={"#FFFFFF"}
            textColor={"#BDBDBD"}
            onClick={() => props.handleModal()}
            padding={16}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

const Modal = (props) => {
  const nodeRef = useRef(null);

  return (
    <>
      {props.show && <Backdrop onClick={props.handleModal} />}
      <CSSTransition
        in={props.show}
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} nodeRef={nodeRef} />
      </CSSTransition>
    </>
  );
};

export default Modal;
