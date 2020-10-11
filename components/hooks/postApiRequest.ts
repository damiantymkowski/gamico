import { useEffect, useState } from "react";
import axios from "axios";

const postApiRequest = (url: string, postData: object) => {
  const [data, setData] = useState<Array<any>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .post(url, {
          postData,
        })
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
export default postApiRequest;
