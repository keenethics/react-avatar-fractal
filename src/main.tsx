import React from 'react';
import ReactDOM from 'react-dom/client';
import AvatarFractal from '../lib/AvatarFractal.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AvatarFractal value="Test" size={600} />
  </React.StrictMode>,
);
