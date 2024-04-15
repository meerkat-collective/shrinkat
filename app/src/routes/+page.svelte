<script>
	export let form, data;

	const { topLinks } = data;

	import Input from "$ui/Input.svelte";
	import Button from "$ui/Button.svelte";

	let copied;

	$: {
		if (copied) {
			setTimeout(() => (copied = false), 3000);
		}
	}
	function copy(text) {
		navigator.clipboard.writeText(text);
		copied = true;
	}
</script>

<svelte:head>
	<title>Shrinkat</title>
	<meta name="title" content="Shrinkat" />
	<meta name="description" content="A URL Shortener" />
</svelte:head>

<!-- <h1>{data.user.name}</h1> -->
<section class="">
	<h1 class="text-4xl text-center font-bold">shrinkat</h1>

	<div class=" grid place-items-center mt-12">
		<img src="/images/meerkat.png" alt="" class="w-24" />
		<p class="text-xl">
			This is <spann class="italic text-kat-100">shrinky</spann>, he likes making things tiny. Give
			him a link and see...
		</p>
	</div>

	<!-- <form action="?/shrink" method="post" class="max-w-lg mx-auto">
		<Input
			type="url"
			name="url"
			label="Link for shrinky"
			value={form?.url || ""}
			placeholder="https://..."
		/>
		<Button type="submit">Get <span class="italic font-bold">shrinky</span> to work</Button>

		{#if form?.shrinkedLink}
			<button
				type="button"
				on:click={() => copy(form.shrinkedLink)}
				class="py-2 px-4 bg-slate-600 w-full mt-4 rounded hover:bg-slate-700"
			>
				{#if copied}
					<p>📋 Copied to clipboard!</p>
				{:else}
					<p>{form.shrinkedLink}</p>
				{/if}
			</button>
		{/if}
	</form> -->
</section>

<section class="mt-5">
	{#if !data.user}
		<a
			href="/auth/login"
			class="py-2 w-fit px-10 mx-auto text-lg font-semibold bg-kat-400 block rounded text-slate-200 hover:bg-kat-300 transition duration-300"
			>Login</a
		>
	{/if}
</section>

<section class="mt-14">
	<h2 class="text-center text-xl font-medium capitalize">Shrinky's Top Links</h2>
	<div class="max-w-2xl mx-auto mt-3">
		<table class="table-auto w-full">
			<thead class="bg-slate-800">
				<tr class="text-left">
					<th class="p-2">#</th>
					<th class="p-2">Link</th>
					<th class="p-2">Shrinked</th>
					<th class="p-2 text-left">Clicks</th>
				</tr>
			</thead>
			<tbody>
				{#each topLinks as link, i}
					<tr>
						<td class="p-2 border-b border-slate-700">{i + 1}</td>
						<td class="p-2 border-b border-slate-700">{link.url}</td>
						<td class="p-2 border-b border-slate-700">
							<a
								href={`http://localhost:5173/${link.shrinked}`}
								target="_blank"
								class="text-kat-100">{link.shrinked}</a
							>
						</td>
						<td class="p-2 border-b border-slate-700">{link.clicks}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
