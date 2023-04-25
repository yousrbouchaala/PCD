import React, { useState } from "react";
import { Button, Table, } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Visits = () => {
  const [date, setDate] = useState("");
  const [datee, setDatee] = useState("");
  const [label, setlabel] = useState("");
  const [motif, setMotif] = useState("");
  const [num, setnum] = useState("");
  const [med, setmed] = useState("");
  const [visits, setVisits] = useState([  { num: "1244", date: "1-04-2023", motif: "Consultation" },
  { num: "2456", date: "20-04-2023", motif: "Suivi" }, { num: "12244", date: "13-04-2023", motif: "CoNTROL" }]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showFormM, setShowFormM] = useState(false);
  const [shoowForm, setShoowForm] = useState(false);
  const [visitEs, setVisitEs] = useState([  { num: "1244", date: "1-04-2023", label: "Melanome" },
  { num: "2456", date: "20-04-2023", label: "Carcinome spinocellulaire" }]);

  const handleAddVisit = (e) => {
    e.preventDefault();
    const newVisit = {
      date,
      motif,
    };

    setVisits([...visits, newVisit]);
    setDate("");
    setMotif("");
  };
  const handleAddVisite = (e1) => {
    e1.preventDefault();
    const newVisit = {
      date,
      med,
    };

    setVisits([...visits, newVisit]);
    setDate("");
    setmed("");
  };

  const handleDeleteVisit = (index) => {
    const updatedVisits = [...visits];
    updatedVisits.splice(index, 1);
    setVisits(updatedVisits);
  };
  const handleDeleteVisite = (index1) => {
    const updatedVisits = [...visits];
    updatedVisits.splice(index1, 1);
    setVisits(updatedVisits);
  };

  const handleEditVisit = (index) => {
    const updatedVisits = [...visits];
    updatedVisits[index] = { date, motif };
    setVisits(updatedVisits);
    setDate("");
    setmed("");
  };
  const handleEditVisite = (index1) => {
    const updatedVisits = [...visits];
    updatedVisits[index1] = { date, motif };
    setVisits(updatedVisits);
    setDate("");
    setmed("");
  };

  
  

  return (

    

    <div>
        <div style={{textAlign:"center", marginTop:"90px" ,  color:"#3431f3" }}>
        <h1 >
            Patient details
        </h1>
        </div>
    <div style={{display:"flex"}}>
        
        
    <div style={{width:"50%" ,height:"60%" , marginLeft:"40px" , marginTop:"140px"}}>
    <div className="container" style={{border:"2px solid black", }}>
      <div className="row" >
        <div style={{width:"120%" ,height:"45%",marginTop:"-30px"}}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{marginLeft:"30px"}}>
              Visits
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="TRUE"
              aria-label="Toggle navigation"
            >
              
            </button>
            
                <form onSubmit={handleAddVisit}>
                  <button className="btn btn-primary"  style={{marginLeft:"555px"}} onClick={() => setShowForm(true)} >
                    Add
                  </button>
                  </form>
                
             
            
          </nav>
          {showForm && (
          <form onSubmit={handleAddVisit}>
            <div className="form-group">
              <label htmlFor="date">number dossier</label>
              <input
                type="number"
                className="form-control"
                id="num"
                value={num}
                onChange={(e) => setnum(e.target.value) }
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="motif">Motif</label>
              <input
                type="text"
                className="form-control"
                id="motif"
                value={motif}
                onChange={(e) => setMotif(e.target.value)}
              />
            </div>
           
          </form>)}
        </div>
        <div className="col-md-9">
          <Table striped bordered hover style={{width:"135%" ,height:"50%",marginTop:"20px"}}>
            <thead>
              <tr>
                <th>Number file</th>
                <th>Date</th>
                <th>Motif</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit, index) => (
                <tr key={index}>
                <td>{visit.num}</td>
                <td>{visit.date}</td>
                <td>{visit.motif}</td>
                
                  

                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleEditVisit(index)} >
                                Modifier
                              </Button>{" "}
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDeleteVisit(index)}
                              >
                                Supprimer
                              </Button>
                            </td>
                    
                          </tr>
                        ))}
                        
                      </tbody>
                      </Table>
                </div>
                </div>
               </div> 
               </div> 
                
    <div style={{width:"40%" ,height:"50%" , marginLeft:"50px" , marginTop:"140px"}}>
    <div className="container" style={{border:"2px solid black", }}>
      <div className="row" >
        <div style={{width:"120%" ,height:"45%",marginTop:"-30px"}}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#EE" style={{marginLeft:"30px"}}>
            Prescription
            </a>
            
            
             
                <form onSubmit={handleAddVisite}>
                  <button type="submit" className="btn btn-primary"  style={{marginLeft:"358px"}} onClick={() => setShowFormM(true)} >
                    Add
                  </button>
                  </form>
                
             
          
          </nav>
          <div>
          <Form.Group controlId="formSearch" style={{ width: "200px" , marginLeft:"190px", marginLeft:"350px", marginTop:"6px" }} >
          <Form.Control
            type="text"
            placeholder="Search a date..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
          </div>
          {showFormM && (
          <form onSubmit={handleAddVisite}>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="motif">Medications</label>
              <input
                type="text"
                className="form-control"
                id="med"
                value={med}
                onChange={(e) => setmed(e.target.value)}
              />
            </div>
           
          </form>)}
        </div>
        <div className="col-md-9">
          <Table striped bordered hover style={{width:"135%" ,height:"50%",marginTop:"20px"}}>
            <thead>
              <tr>
            
                <th>Date</th>
                <th>Medications</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit, index1) => (
                <tr key={index1}>
                
                <td>{visit.date}</td>
                <td>{visit.med}</td>
                
                  

                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleEditVisite(index1)} >
                                Modifier
                              </Button>{" "}
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDeleteVisite(index1)}
                              >
                                Supprimer
                              </Button>
                            </td>
                    
                          </tr>
                        ))}
                        
                      </tbody>
                      </Table>
                </div>

                </div>
                </div>
    <div style={{width:"120%" ,height:"50%" , marginLeft:"-390px" , marginTop:"60px"}}>
    <div className="container" style={{border:"2px solid black", }}>
      <div className="row" >
        <div style={{width:"130%" ,height:"45%",marginTop:"-30px"}}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{marginLeft:"30px"}}>
              Bilans
            </a>
            
            
                <form onSubmit={handleAddVisit}>
                  <button className="btn btn-primary" href="#" style={{marginLeft:"520px"}} onClick={() => setShoowForm(true)} >
                    Add
                  </button>
                  </form>
                
             
            
          </nav>
          {shoowForm && (
          <form onSubmit={handleAddVisit}>
            <div className="form-group">
              <label htmlFor="date">number dossier</label>
              <input
                type="number"
                className="form-control"
                id="num"
                value={num}
                onChange={(e) => setnum(e.target.value) }
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="number"
                className="form-control"
                id="date"
                value={datee}
                onChange={(e) => setDatee(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Label</label>
              <input
                type="text"
                className="form-control"
                id="label"
                value={label}
                onChange={(e) => setlabel(e.target.value)}
              />
            </div>

          
           
          </form>)}
        </div>
        <div className="col-md-9">
          <Table striped bordered hover style={{width:"135%" ,height:"50%",marginTop:"20px"}}>
            <thead>
              <tr>
                <th>Number file</th>
                <th>Date</th>
                <th>Label</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visitEs.map((visit, index) => (
                <tr key={index}>
                <td>{visit.num}</td>
                <td>{visit.date}</td>
                <td>{visit.label}</td>
                
                  

                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleEditVisit(index)} >
                                Modifier
                              </Button>{" "}
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDeleteVisit(index)}
                              >
                                Supprimer
                              </Button>
                            </td>
                    
                          </tr>
                        ))}
                        
                      </tbody>
                      </Table>
                </div>
                </div>
               </div> 
               <div>
           
               </div>
               </div> 
                 </div>
                </div>
                </div>
  )}

  export default Visits;
                      