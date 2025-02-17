import { AutoRouter } from "itty-router";
import { ResponseJSON, ResponseHTML } from "./response";

const REST = AutoRouter();


REST.get("/", async (req) => {
    return ResponseHTML("<h1>STFU</h1>");
});

REST.get("/api/instancias", async (req) => {
    return ResponseHTML("<h1>Instancias</h1>");
});

REST.post("/api/reiniciar", async (req, env) => {
    if (req.headers.get("mp-key") !== env.HEADER_ACCESS_VALUE) {
        return ResponseJSON({ error: "Unauthorized" }, 401);
    }

    const response = await fetch(`https://compute.googleapis.com/compute/v1/projects/${env.GCLOUD_PROJECT_ID}/zones/${env.GCLOUD_PROJECT_ZONE}/instances/${env.GCLOUD_INSTANCE_NAME}/reset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${env.GCLOUD_ACCESS_TOKEN}`
        }
    });

    return ResponseJSON(await response.json());
});


export default {
    fetch: REST.fetch
}