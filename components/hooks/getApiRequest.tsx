import { useEffect, useState } from "react";
import axios from "axios";

const getApiRequest = (url: string) => {
  const [data, setData] = useState<Array<any>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          setIsLoaded(true);
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });
      fetchData();
    };
  }, [url]);
  return { error, isLoaded, data };
};
export default getApiRequest;
