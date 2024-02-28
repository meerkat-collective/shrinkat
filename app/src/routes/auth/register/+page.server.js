import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	register: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());
		let username = data.name.split(" ").join("");
		username = username.toLowerCase();

		try {
			await locals.pb.collection("users").create({ username, ...data });

			locals.pb.authStore.clear();
		} catch (err) {
			console.log("Error", err);
			throw error(500, "Something went wrong...");
		}
		redirect(303, "/auth/login");
	}
};
