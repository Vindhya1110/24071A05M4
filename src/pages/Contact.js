import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const handleSubmit = (e) => { e.preventDefault(); alert('Message sent!'); };

  return (
    <div style={{ padding:'24px', maxWidth:'500px', margin:'0 auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input style={styles.input} placeholder="Your Name"
          value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input style={styles.input} type="email" placeholder="Email"
          value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <textarea style={{...styles.input, height:'100px'}} placeholder="Your message..."
          value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />
        <button style={styles.btn} type="submit">Send Message</button>
      </form>
    </div>
  );
}

const styles = {
  input: { display:'block', width:'100%', padding:'10px', margin:'10px 0', borderRadius:'4px',
           border:'1px solid #ddd', boxSizing:'border-box', fontSize:'14px' },
  btn: { padding:'10px 24px', background:'#2c3e50', color:'#fff', border:'none',
         borderRadius:'4px', cursor:'pointer' }
};

export default Contact;