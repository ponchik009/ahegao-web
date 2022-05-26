import React from "react";

export const useFetch = (fetchFunction, initalValue) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(initalValue);

  return [
    data,
    function (...args) {
      setIsLoading(true);
      fetchFunction(...args)
        .then((data) => setData(data))
        .finally(() => setIsLoading(false));
    },
    isLoading,
  ];
};
