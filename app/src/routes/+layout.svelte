<script>
	import "../style.css";

	export let data;
</script>

<div class="container mx-auto p-3">
	<header class=" flex items-center justify-between py-2 border-b border-slate-700">
		<a href="/" class="text-2xl font-bold">shrinkat</a>
		{#if !data.user}
			<a href="/auth/login">Login</a>
			<a href="/auth/login">Login</a>
		{:else}
			<form action="/logout" method="post">
				<button class="py-1 px-5 block w-full hover:bg-kat-400">Logout</button>
			</form>
		{/if}
	</header>

	<main>
		<slot />
	</main>
</div>
