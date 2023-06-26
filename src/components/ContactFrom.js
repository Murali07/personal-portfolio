import React, { useState , useRef} from "react";
import styled from "@emotion/styled";
import emailjs from '@emailjs/browser';

const FormStyles = styled.div`
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 20px;
    padding: 1.2rem;
    color: yellow;
    background-color: #21325e;
    outline: none;
    border: none;
    border-radius: 8px;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: #21325e;
    color: yellow;
    font-size: 22px;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1.2rem 3rem;
    border-radius: 8px;
    cursor: pointer;
  }
  button[type="submit"]:hover{
    background: red;
  }
  @media only screen and (max-width: 768px) {
    input,
    textarea {
      font-size: 16px;
    }
    button[type="submit"] {
      font-size: 19px;
      padding: 1rem 2.5rem;
    }
  }
`;

function ContactFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_5yrrtlk",
  //       "template_zx5ex5o",
  //       e.target,
  //       "BBfHU0viPtfXiGN50"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5yrrtlk', 'template_zx5ex5o', form.current, 'BBfHU0viPtfXiGN50')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
      <FormStyles ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </div>
        <button type="submit">Send</button>
      </FormStyles>
    </div>
  );
}

export default ContactFrom;
