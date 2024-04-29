import React, {useEffect, useState} from 'react';
import './App.css';
import Desktop from './pages/DesktopPage/Desktop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {loading ? <LoadingScreen /> : <Desktop />}
    </div>
  );
}

export default App;
