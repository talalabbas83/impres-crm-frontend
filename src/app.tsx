import { BrowserRouter } from 'react-router-dom';

import { Dashboard } from './components/dashboard';
import { Navbar } from './components/layout/navbar';
import RootProvider from './providers/root';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RootProvider>
        <Dashboard />
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
