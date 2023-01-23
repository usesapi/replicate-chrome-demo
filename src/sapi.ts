const SAPI_BASE_URL = "https://api.usesapi.com/";
export const proxyId = "api-replicate-com-3rfnmb";

export const createToken = async (): Promise<string> => {
  const res = await fetch(`${SAPI_BASE_URL}v1/token?code=${proxyId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tokenOwner: "anno",
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
