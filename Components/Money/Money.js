import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Button} from 'react-bootstrap';
import "./Money.css"
function AccountingPage() {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addTransaction = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      amount: parseFloat(event.target.amount.value),
      date: event.target.date.value,
    };
    setTransactions([...transactions, newTransaction]);
    setTotalAmount(totalAmount + newTransaction.amount);
    event.target.reset();
  };

  return (
    <div className="eco">
      <h1 style={{color:"#d3a573" ,marginTop:"60px", marginRight:"400px"}}>Accounting Page</h1>
      <form onSubmit={addTransaction}>
        <div className="mb-3">
          <label htmlFor="amount"  style={{color:"black"}}>
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            step="0"
            required
            style={{width:"50%"}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date"  style={{color:"black"}}>
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            required
            style={{width:"50%"}}
          />
        </div>
        <Button type="submit" variant="button" style={{backgroundColor:"#d3a573", marginTop:"10px"}}>
          Add Transaction
        </Button>
      </form>
      {transactions.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {transactions.length > 0 && (
        <div>
          <h5 style={{marginTop:"20px"}}>Total Amount: {totalAmount}</h5>
        </div>
      )}
    </div>
  );
}

export default AccountingPage;
