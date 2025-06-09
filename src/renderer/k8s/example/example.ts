import { Renderer } from "@freelensapp/extensions";
import { NamespacedObjectReference } from "./types";

type KubeObjectMetadata = Renderer.K8sApi.KubeObjectMetadata;

const KubeObject = Renderer.K8sApi.KubeObject;
const KubeObjectStore = Renderer.K8sApi.KubeObjectStore;

export interface ExampleSpec {
  title?: string;
  description?: string;
  examples?: NamespacedObjectReference[];
}

export interface ExampleStatus {}

export class Example extends KubeObject<KubeObjectMetadata, ExampleStatus, ExampleSpec> {
  static readonly kind = "Example";
  static readonly namespaced = true;
  static readonly apiBase = "/apis/example.freelens.app/v1alpha1/examples";
}

export class ExampleApi extends Renderer.K8sApi.KubeApi<Example> {}
export const exampleApi = new ExampleApi({ objectConstructor: Example });
export class ExampleStore extends KubeObjectStore<Example> {
  api = exampleApi;
}
export const exampleStore = new ExampleStore();
Renderer.K8sApi.apiManager.registerStore(exampleStore);

export const exampleObject = {
  kind: "Example",
  apiVersions: ["example.freelens.app/v1alpha1"],
  api: exampleApi,
};
