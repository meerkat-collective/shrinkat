import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ locals, params }) {
	let link;
	try {
		link = await locals.pb.collection("links").getFirstListItem(`shrinked="${params.shrinked}"`);

		await locals.pb.collection("links").update(link.id, {
			clicks: link.clicks + 1
		});
	} catch (e) {
		console.log(e);
	}

	if (link?.url) throw redirect(303, link?.url);
	redirect(303, "/");
}
