import React, { useEffect } from 'react';
import axios from 'axios';

function FirstRequest() {
  const url = 'https://course-api.com/react-store-products';

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>FirstRequest</div>;
}

export default FirstRequest;
