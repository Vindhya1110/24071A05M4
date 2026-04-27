import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    alert('Registered successfully!');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input style={styles.input} placeholder="Full Name"
            value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
          <input style={styles.input} type="email" placeholder="Email"
            value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
          <input style={styles.input} type="password" placeholder="Password"
            value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
          <button style={styles.btn} type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { display:'flex', justifyContent:'center', alignItems:'center', height:'90vh', background:'#f5f5f5' },
  card: { background:'#fff', padding:'40px', borderRadius:'8px', boxShadow:'0 2px 10px rgba(0,0,0,0.1)', minWidth:'320px' },
  input: { display:'block', width:'100%', padding:'10px', margin:'10px 0', borderRadius:'4px',
           border:'1px solid #ddd', boxSizing:'border-box', fontSize:'14px' },
  btn: { width:'100%', padding:'10px', background:'#2c3e50', color:'#fff', border:'none',
         borderRadius:'4px', cursor:'pointer', fontSize:'15px', marginTop:'8px' }
};

export default Register;
