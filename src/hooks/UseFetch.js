import React from "react";

export const useFetch = (fetchFunction) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState();

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
