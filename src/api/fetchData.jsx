import { useState, useEffect} from 'react';
//custom hook to fetch the store api data anywhere, returns 3 states, data loading and error, so I will be able to handle async tasks
const useFetchData = (category) => {
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data ran')
        setLoading(true)
        console.log(loading)
        
      try {
        const response = await fetch(
          `https://fakestoreapi.com/${category ? `products/category/${category}` : 'products'}`
        );
        
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
    };

    fetchData();
  },[category]);

  return {data, loading, error}; 
};

export default useFetchData;
