import { useState, useCallback } from "react";

export default (intialValue = null) => {
  const [value, setter] = useState(intialValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};
