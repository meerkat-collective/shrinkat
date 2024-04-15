<script>
	import "../style.css";

	export let data;
</script>

<div class="max-w-6xl mx-auto">
	<header class=" flex items-center justify-between py-5 px-4 border-b border-slate-700">
		<div>
			<a href="/" class="text-2xl font-bold">shrinkat</a>
			{#if data.user}
				<a href="/my-links" class="ml-6 font-medium">My Links</a>
			{/if}
		</div>
		{#if !data.user}
			<div class="flex gap-3">
				<a href="/auth/login">Login</a>
				<a href="/auth/register">Register</a>
			</div>
		{:else}
			<div class="flex items-center gap-6">
				<div>
					<small class="text-xs text-slate-600">Logged in as:</small>
					<p class="font-semibold text-sm">{data.user.name}</p>
				</div>

				<form action="/auth/logout" method="post" class="block">
					<button
						type="submit"
						class="py-1 px-5 block w-full text-slate-400 border border-slate-600 rounded hover:text-slate-400"
						>Logout</button
					>
				</form>
			</div>
		{/if}
	</header>

	<main class="py-16">
		<slot />
	</main>
</div>
