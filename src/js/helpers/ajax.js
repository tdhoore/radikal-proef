export const fetchAPI = (url) => {
  return fetch(`${process.env.PUBLIC_URL}${url}`).then((r) => r.json());
};

export const fetchPostAPI = (params = { url, formData, method: "POST" }) => {
  return fetch(`${process.env.PUBLIC_URL}${params.url}`, {
    method: params.method ? params.method : "POST",
    body: params.formData,
  }).then((r) => r.json());
};

export const fetchPostJsonAPI = (params = { url, json, method: "POST" }) => {
  return fetch(`${process.env.PUBLIC_URL}${params.url}`, {
    method: params.method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(params.json),
  }).then((r) => r.json());
};
