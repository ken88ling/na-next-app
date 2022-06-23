import qs from "qs";

export function getRequestURL(path = "") {
  console.log(process.env.NEXT_PUBLIC_STRAPI_API_URL)
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// return `https://cdn.sanity.io/${src}?w=${width}&q=${quality || 75}`

// Helper to make GET requests to Strapi
export async function fetchQuery(
  path,
  urlParamsObject = {},
  options = {}
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getRequestURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);
  
  console.log('response', response)

  // Handle response
  if (!response.ok) {
    console.error("response status", response.statusText);
  }
  const data = await response.json();
  return data;
}