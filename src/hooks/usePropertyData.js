import axios from "axios";
import { useEffect, useState } from "react";

export const usePropertyData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("./property.json").then((res) => setData(res.data));
  }, []);
  return data;
};
