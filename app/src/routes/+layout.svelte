<script>
	import "../style.css";

	export let data;
</script>

<div class="max-w-6xl mx-auto p-3">
	<header class=" flex items-center justify-between py-2 border-b border-slate-700">
		<a href="/" class="text-2xl font-bold">shrinkat</a>
		{#if !data.user}
			<div class="flex">
				<a href="/auth/login">Login</a>
				<a href="/auth/register">Register</a>
			</div>
		{:else}
			<form action="/auth/logout" method="post">
				<button type="submit" class="py-1 px-5 block w-full hover:bg-kat-400">Logout</button>
			</form>
		{/if}
	</header>

	<main class="py-20">
		<slot />
	</main>
</div>
