import { BrowserRouter } from 'react-router-dom';

import { Dashboard } from './components/dashboard';
import RootProvider from './providers/root';

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <Dashboard />
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
