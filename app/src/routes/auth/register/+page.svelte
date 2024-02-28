<script>
	import Input from "$ui/Input.svelte";
	import Button from "$ui/Button.svelte";
	import { tick } from "svelte";

	export let form;
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<h1 class="text-xl text-center font-semibold">Register</h1>

<form action="?/register" method="POST">
	<Input label="name" name="name" type="text" placeholder="Name" required />
	<Input label="email" name="email" type="email" placeholder="Email" required />
	<Input
		label="password"
		name="password"
		type="password"
		minlength="8"
		placeholder="Password"
		required
	/>
	<Input
		label="Confirm Password"
		name="passwordConfirm"
		type="password"
		minlength="8"
		placeholder="Confirm Password"
		required
	/>
	<Button>Register</Button>

	{#if form?.error}
		<p class="text-red-600 font-bold">{form.error}</p>
	{/if}
</form>
<p class="mt-2 text-slate-400 text-center">
	Already have an account? <a href="/auth/login" class="text-kat-200 underline capitalize">login</a>
</p>
