/* eslint-disable unicode-bom */
import React from 'react';

function About() {
  return (
    <div style={{ padding:'40px', maxWidth:'700px', margin:'0 auto', lineHeight:'1.8' }}>
      <h2>About Job Portal</h2>
      <p>
        This portal helps job seekers discover opportunities, submit their applications, and track progress.
        It is built with React and React Router to provide a smooth navigation experience.
      </p>
      <h3>What we offer</h3>
      <p>
        - Curated jobs across frontend, backend, design, and product roles.
        - A friendly registration and login flow for candidates.
        - A seamless application process to keep your job search organized.
      </p>
      <h3>Our mission</h3>
      <p>
        To connect talented professionals with meaningful career opportunities and simplify the hiring experience.
      </p>
    </div>
  );
}

export default About;
