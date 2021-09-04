const port = 8080;

const server = Deno.listen({ port });
console.log(`Started on port ${port}`);

async function handle(connection){
	const httpConnection = Deno.serveHttp(connection);
	for await(const requestEvent of httpConnection){
		const message = Deno.env.get("MESSAGE") ?? "";
		requestEvent.respondWith(new Response(`${message} from Application!`, {
			status: 200,
			header: {
				"Content-Type" : "text/plain"
			}
		}))
	}
}

for await (const connection of server){
	handle(connection);
}