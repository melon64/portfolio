import React, { useState, useEffect } from 'react';
import Desktop from './Desktop';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';


function DesktopPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

    return (
        <div className='desktop-container'>
            {loading ? <LoadingScreen /> : <Desktop />}
        </div>
    );
}

export default DesktopPage;
