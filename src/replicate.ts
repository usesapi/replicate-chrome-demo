import { createToken, proxyId } from "./sapi";

const modelId =
  "9a535b24c359049e4e7c44a976a6a54e3a1a348650084b23545fe7b55de95c2d";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const replicateApiUrl = `https://${proxyId}.proxy.usesapi.com/`;

const checkResult = async (
  id: string,
  token: string
): Promise<string | null> => {
  console.log("checking results", Date.now());
  const res = await fetch(`${replicateApiUrl}v1/predictions/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const json = await res.json();
  if (!json["completed_at"]) {
    return null;
  }
  if (json.error) {
    throw new Error(json.error);
  }
  return json["output"];
};

export const createHighRes = async (imageUrl: string): Promise<string> => {
  const token = await createToken();
  const res = await fetch(`${replicateApiUrl}v1/predictions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({
      version: modelId,
      input: {
        pretrained: "sketch_multi",
        alpha: 1,
        input_face: imageUrl,
      },
    }),
  });
  const json = await res.json();
  const id = json["id"];
  let result = await checkResult(id, token);
  while (!result) {
    await sleep(1000);
    result = await checkResult(id, token);
  }
  return result;
};
