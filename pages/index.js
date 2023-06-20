import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
  }
  header {
    display: none;
  }
`;
const LandingPage = () => {
  return (
    <>
    <GlobalStyles />
    <div>
          <div style=
          {{
            display:'flex', 
            flexDirection:'column', 
            width:'100vw', 
            height:'100vh',
            background: 'linear-gradient(119deg, rgba(10,8,20,1) 0%, rgba(39,35,62,1) 50%, rgba(137,138,207,1) 100%)',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif',
          }}>
            <div style= {{
              display:'flex', 
              flexDirection:'column',   
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'space-around',
            }}>
              <p style={{fontSize: '5em', color:"white", textAlign:'center'}}>Coming soon.</p>
              <a href="/docs/what-is-leveling" style={{fontSize: '2em', color:"white", fontWeight:"200"}}>leveling</a>
            </div>
            
          </div>        
          
    </div>
    </>
  );
};

export default LandingPage;
