import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MessagingBox = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState([]);
  const [MSG, setMSG] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const newMessage = {
      subject,
      message,
      email,
      date: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
    setSubject("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="messaging-box" style={{display:"flex"
    }}>
      <div className="send-message" style={{ width: "400px",height:" 500px", border:" 3px solid ", color:"var(--main-color)"}}>
        
        <h4 style={{textAlign:"center" }}> Send a message</h4>
        <Form onSubmit={handleSend}>
          <Form.Group controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button  type="submit" color="black">
            submit
          </Button>
        </Form>
        </div>
      

      <div className="received-messages" style={{ width: "400px",height: "500px", marginLeft:"300px" ,border:" 3px solid ",color:"var(--main-color)" }}>
        <h4 style={{textAlign:"center"}}>Received Messages</h4>
        <Form.Group controlId="formSearch" style={{ width: "200px" , marginLeft:"190px" }} >
          <Form.Control
            type="text"
            placeholder="Search a message..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formSearch" style={{ width: "400px" , marginTop:"20px"}}>
          <Form.Control
            type="text"
            placeholder="Message received..."
            value={MSG}
            onChange={(e) => setMSG(e.target.value) }
          />
        </Form.Group>
        {messages
          .filter((msg) =>
            msg.subject.toLowerCase().includes(search.toLowerCase())
          )
          .map((msg, index) => (
            <div key={index} className="message">
              <p>
                <b>Sujet:</b> {msg.subject}
              </p>
              <p>
                <b>Message:</b> {msg.message}
              </p>
              <p>
                <b>De:</b> {msg.email}
              </p>
              <p>
                <b>Date:</b> {msg.date}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MessagingBox;
