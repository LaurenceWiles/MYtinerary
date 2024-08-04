// src/utils/parseQueryParams.js
export const parseQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const error = params.get("error");
  return { error };
};
