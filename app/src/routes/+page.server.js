import { nanoid } from "nanoid";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	shrink: async ({ locals, request }) => {
		const data = await request.formData();

		try {
			const url = data.get("url");
			const shrinked = await nanoid(6);

			await locals.pb.collection("links").create({ url, shrinked, createdBy: locals.user.id });

			return {
				shrinkedLink: `http://localhost:5173/${shrinked}`,
				url
			};
		} catch (e) {
			console.log(e);
			error(e.status, { error: e.message });
		}
	}
};
