import { nanoid } from "nanoid";
import { error, redirect } from "@sveltejs/kit";

import { BASE_URL } from "$env/static/private";

export async function load({ locals }) {
	if (!locals.user) {
		redirect(303, "/auth/login");
	}
	const top10Links = await locals.pb.collection("links").getFullList(10, {
		sort: "-clicks",
		filter: `createdBy="${locals.user?.id}"`
	});

	return {
		top10Links: structuredClone(top10Links)
	};
}

export const actions = {
	shrink: async ({ locals, request }) => {
		const data = await request.formData();

		try {
			const url = data.get("url");
			const shrinked = await nanoid(6);

			await locals.pb.collection("links").create({ url, shrinked, createdBy: locals.user.id });
			const shrinkedLink = `${BASE_URL}/${shrinked}`; // this is fine, I needed to test something

			return {
				shrinkedLink: `${BASE_URL}/${shrinked}`,

				url
			};
		} catch (e) {
			console.log(e);
			error(e.status, { error: e.message });
		}
	}
};
