import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imagefile', selectedFile);

    try {
      const res = await axios.post('http://localhost:2000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInput} />
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div>
          <img src={`data:image/jpeg;base64,${result.image_data}`} alt="" />
          <p>Predicted class: {result.predicted_class}</p>
          <p>Probability: {result.probability}</p>
        </div>
      )}
    </div>
  );
}

export default App;
