import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import axios from "axios";
import { saveAs } from 'file-saver';
import "./Liste.css"
function ListePatients () {
    const [patients, setPatients] = useState([]);
  const doctor = localStorage.getItem('doctor');
  console.log(doctor); 

  useEffect(() => {
    axios.get(`http://localhost:5000/Listepatients/${doctor}`)
      .then(response => {
        setPatients(response.data);
        console.log(patients); 
      })
      .catch(error => {
        console.log(error);
      });
  }, [doctor]);

    return ( 

      <div id="patient">
        <div className="text-center my-3">
  <h2 className="fw-bold">Patients List</h2>
</div>
<Table striped bordered hover responsive>
  <thead className="thead-dark">
    <tr>
      <th>Full Name</th>
      <th>Phone Number</th>
      <th>Patient's PDF</th>
    </tr>
  </thead>
  <tbody>
    {patients.map((patient) => (
      <tr key={patient._id}>
        <td>{patient.FullName}</td>
        <td>{patient.phone}</td>
        <td>
          <a
            href="#"
            onClick={() => {
              const file = new Blob([new Uint8Array(patient.pdf)], {
                type: "application/pdf",
              });
              saveAs(file, `${patient.FullName}.pdf`);
            }}
          >
            {patient.FullName}.pdf
          </a>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

     
    </div>


    )}
export default ListePatients ;
