import { Link } from 'react-router-dom';
import React,{useState} from 'react';
function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    // Vérifier les informations d'identification de l'utilisateur

    // Si les informations sont correctes, naviguer vers la page suivante avec l'email comme paramètre d'URL
  }

  return (
    <div>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Se connecter</button>

      {/* Naviguer vers la page suivante avec l'email comme paramètre d'URL */}
      <Link to={`/confirmation`}>
        <button>Page suivante</button></Link>
    </div>
  );
}
export default Signin;
