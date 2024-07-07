import { useState, useEffect} from 'react';
//custom hook to fetch the store api data anywhere, returns 3 states, data loading and error, so I will be able to handle async tasks
const useFetchData = (url) => {
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(false)

  useEffect(() => {
   
    const fetchData = async () => {
        console.log('fetchin data')
        console.log(url)
        setLoading(true)
        console.log(loading)
        
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
         setError(true)
        }

        const jsonData = await response.json();
        
        setLoading(false)
        
        setData(jsonData);
      } catch (error) {
        console.error('Fetch error:', error.message);
        setData(null); 
      }
      finally{
        setLoading(false)
      }
    };

    fetchData();
  },[url]);

  return {data, loading, error}; 
};

export default useFetchData;
