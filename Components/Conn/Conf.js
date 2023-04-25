import { useLocation } from 'react-router-dom';
import React from 'react';
function PageSuivante() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  return (
    <div>
      <p>Email : {email}</p>
    </div>
  );
}
export default PageSuivante;