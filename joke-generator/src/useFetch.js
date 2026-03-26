import { useState } from "react";

// Complete the following hook
const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getJoke = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (err) {
      console.log("Inside error", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  //It should return data returned from fetch, loading, error and getJoke
  return { data, loading, error, getJoke };
};
// export the useFetch hook as a default export
export default useFetch;
