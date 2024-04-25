import { nanoid } from "nanoid";
import { error } from "@sveltejs/kit";

import { BASE_URL } from "$env/static/private";

export async function load({ locals }) {
	// ? How to get the first 3 links sorted by clicks
	const topLinks = await locals.pb.collection("links").getFullList(3, {
		sort: "-clicks"
	});

	console.log(topLinks);

	const res = await locals.pb.collection("links").getList(1, 3, {
		sort: "-clicks",
		skipTotal: true // optional if you don't need the total* count fields
	});
	console.log(res.items);

	return {
		topLinks: structuredClone(res.items)
	};
}

export const actions = {
	shrink: async ({ locals, request }) => {
		const data = await request.formData();

		try {
			const url = data.get("url");
			const shrinked = await nanoid(6);

			await locals.pb.collection("links").create({ url, shrinked, createdBy: locals.user.id });
			// const shrinkedLink = `${BASE_URL}/${shrinked}`; // this is fine, I needed to test something

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
