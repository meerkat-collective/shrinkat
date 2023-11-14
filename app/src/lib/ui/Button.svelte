<script>
	export let classes = "";
</script>

<button
	on:click
	{...$$restProps}
	class={`py-2 px-4  bg-brand1/80 rounded text-slate-200 hover:bg-brand1 transition duration-300 ${classes}`}
>
	<slot />
</button>
