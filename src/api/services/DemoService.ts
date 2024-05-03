import { ApiURLs, httpClient } from "api/core";
import { Demo } from "types";

const URL = ApiURLs.demo
async function getDemo() {
  return await httpClient.get<Demo[]>(`${URL}`)
}

async function createDemo(data: unknown) {
    return await httpClient.post<Blob>(`${URL}`, data)
}

export const DemoService = {
  list: {
    request: getDemo,
    queryKey: "get-demo-list"
  },
  create: {
    request: createDemo,
    mutationKey: "create-demo"
  }
};
