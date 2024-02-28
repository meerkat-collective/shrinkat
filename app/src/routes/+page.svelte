<script>
	export let form;

	console.log(form);

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
<section class="py-12">
	<h1 class="text-4xl text-center font-bold">shrinkat</h1>

	<div class=" grid place-items-center my-16">
		<img src="/images/meerkat.png" alt="" class="w-20" />
		<p>This is <spann class="italic text-kat-100">shrinky</spann>, he likes making things tiny.</p>
	</div>

	<form action="?/shrink" method="post" class="max-w-lg mx-auto">
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
				class="py-2 px-4 bg-slate-600 mt-4 rounded hover:bg-slate-700"
			>
				{#if copied}
					<p>📋 Copied to clipboard!</p>
				{:else}
					<p>{form.shrinkedLink}</p>
				{/if}
			</button>
		{/if}
	</form>
</section>
