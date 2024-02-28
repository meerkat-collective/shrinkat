import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	return new Response();
}

export function POST({ locals }) {
	locals.pb.authStore.clear();
	locals.user = undefined;

	redirect(303, "/login");
}
