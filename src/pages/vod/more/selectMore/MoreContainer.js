import React from 'react';
import More from './More';
import { useEffect ,useState} from 'react';

const MoreContainer = () => {


  const [plays, setPlays] = useState(null);
  
  useEffect(() => {
    const fetchPlays = async () => {
      try {
        const response = await fetch('http://localhost:4000/play');
        const data = await response.json();
        setPlays(data);  
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchPlays();
  }, []);
  return (
    <div>
      <More plays={plays}/>
    </div>
  );
};

export default MoreContainer;