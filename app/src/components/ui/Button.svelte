<script>
	export let classes = "";
</script>

<button
	on:click
	{...$$restProps}
	class={`py-2 px-4 w-full bg-kat-500 rounded text-slate-200 hover:bg-kat-300 transition duration-300 ${classes}`}
>
	<slot />
</button>
