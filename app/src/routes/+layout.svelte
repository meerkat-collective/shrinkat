<script>
	import "../style.css";

	import { Modal } from "$lib/features";
	import { Input, Button } from "$lib/ui";
	// export let data;f
</script>

<svelte:head>
	<script
		defer
		src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.13.2/cdn.js"
		integrity="sha512-lNq2c0EZyCnieSFk9jEWqD60SbJY/6MWMaJsEHk1Tq3y8N5c9E9PuNlSq1jhf499bTkTslfexdzcz7zSTk9Qzw=="
		crossorigin="anonymous"
		referrerPolicy="no-referrer"
	></script>
</svelte:head>

<header class="px-4">
	<nav class="flex items-center justify-between py-3 border-b border-slate-700 max-w-5xl mx-auto">
		<a href="/" class="flex items-center">
			<img src="/images/meerkat.png" alt="shrinkat" class="w-12" />
			shrinkat</a
		>

		<div class="flex gap-2">
			<Modal title="Login" buttonText="Login" classes="bg-transparent border border-brand1 ">
				<svelte:fragment slot="body">
					<form action="" class="max-w-xl mx-auto">
						<Input label="email" type="email" placeholder="Email" />
						<Input label="password" type="text" placeholder="Password" classes="mb-5" />
						<Button classes="w-full">Login</Button>
					</form>
				</svelte:fragment>
			</Modal>

			<a
				href="/login"
				class="py-2 px-5 bg-brand1/80 rounded text-blue-50 hover:bg-brand1 transition duration-300"
				>Register</a
			>
		</div>
	</nav>
</header>

<main class="py-12 px-4 max-w-5xl mx-auto">
	<Input label="email" type="email" placeholder="Email" />
	<slot />
</main>
