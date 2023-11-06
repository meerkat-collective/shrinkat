<script>
	import Modal from "$lib/features/Modal.svelte";
	import "../style.css";
	/** @type {import('./$types').LayoutData} */
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
		<a href="/login">login</a>

		<div />

		<Modal title="Login" buttonText="Login">
			<svelte:fragment slot="body">inner content</svelte:fragment>
		</Modal>
	</nav>
</header>

<main class="py-12 max-w-5xl mx-auto">
	<slot />
</main>
