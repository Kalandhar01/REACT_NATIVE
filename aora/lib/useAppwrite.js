import { useEffect, useState } from "react";
import { Alert } from "react-native";


const useAppwrite =(fn)=>{
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fn();
        setData(response || []); // Ensure response is an array
      } catch (error) {
        Alert.alert("Error", error.message || "Something went wrong while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Call fetchData inside useEffect
  }, []);

  const refetch = () => fetchData();

  

  return { data ,isLoading,refetch}
}

export default useAppwrite;