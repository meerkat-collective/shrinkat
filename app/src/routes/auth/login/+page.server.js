import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	login: async ({ locals, request }) => {
		// const body = Object.fromEntries(await request.formData());

		// const { formData, errors } = await request.formData();

		// if (errors) {
		// 	return invalid(400, {
		// 		data: formData,
		// 		errors: errors.fieldErrors
		// 	});
		// }

		const data = await request.formData();

		try {
			await locals.pb.collection("users").authWithPassword(data.get("email"), data.get("password"));

			/* 
			! For the fact that this requires an email service, I most likely won't implement
			if did the email verification stuff
			if (!locals.pb?.authStore?.model.verified) {
				locals.pb.authStore.clear();
				return {
					notVerifie: true
				};
			}
			*/
		} catch (err) {
			console.log("Error", err);
			throw error(500, "It all went tits up...");
		}

		throw redirect(303, "/");
	}
};
