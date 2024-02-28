<script>
	export let label = "";
	export let name = "";
	export let type = "";
	export let value = "";
	export let placeholder = "";
	export let classes = "";

	export let disabled = false;
</script>

<div class={`mb-2 ${classes}`}>
	<label for={name} class="uppercase font-bold text-slate-600 text-xs">{label}</label>
	<input
		{type}
		{name}
		{value}
		{placeholder}
		{disabled}
		{...$$restProps}
		class={`mt-1 w-full rounded bg-slate-800 block p-2  border border-slate-400 placeholder:text-slate-400 outline-none ${
			disabled ? "bg-slate-400 font-medium" : ""
		}`}
	/>
</div>
