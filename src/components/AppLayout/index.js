import React from 'react';
import './styles.css';

const AppLayout = (props) => {
  return (
    <div className="app-layout"> 
      { props.children } 
    </div>
  );
};

export default AppLayout;