import React from 'react';
import ClippedDrawer from './components/Navbar';
import OrderTrackingApp from './components/TableData';
import HorizontalMenu from './components/Menu';
import TextButtons from './components/Button';
import SettingsIcon from './components/Setting';




function App() {
  return (
    <div>
      <ClippedDrawer />
      <TextButtons />
      <HorizontalMenu />
      <SettingsIcon />
      <OrderTrackingApp />    
    </div>
  );
}

export default App;