import pb from "$lib/poecketbase";

// hooks run on every request to the applicating

export async function handle({ event, resolve }) {
	// grab cookie from browser
	pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

	// check if cookie is valid
	if (pb.authStore.isValid) {
		try {
			// if cookie is valid refresh the session
			await pb.collection("users").authRefresh();
		} catch (_) {
			// if it isn't, clear the session
			event.locals.user = undefined;
			await pb.authStore.clear();
		}
	}

	// include pocketbase instannce and user (optional, but useful)
	event.locals.pb = pb;
	event.locals.user = structuredClone(pb.authStore.model);

	// resolve sends event to intended server function and return its reponse
	const response = await resolve(event);
	// set new sesssion cookie to response header
	response.headers.set("set-cookie", pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
}
