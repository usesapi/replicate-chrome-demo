const SAPI_ID = "api-replicate-com-XXXXX"; // TODO: replace with your Sapi ID

const SAPI_BASE_URL = "https://api.usesapi.com/";
export const SAPI_API_URL = `https://${SAPI_ID}.proxy.usesapi.com/`;

export const createToken = async (): Promise<string> => {
  const res = await fetch(`${SAPI_BASE_URL}v1/token?code=${SAPI_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tokenOwner: "anonymous",
      metadata: {
        platform: "chrome-ext",
      },
    }),
  });
  if (res.status >= 400) {
    throw new Error("Error while trying to create a Sapi token.");
  }
  const json = await res.json();
  return json["token"];
};
