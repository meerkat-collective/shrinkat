<script>
	/** @type {import('./$types').PageData} */
	// export let data;
	import Input from "$ui/Input.svelte";
	import Button from "$ui/Button.svelte";
</script>

<h1 class="text-xl text-center font-semibold">Login</h1>

<form action="?/login" method="POST">
	<Input label="email" name="email" type="email" placeholder="Email" required />
	<Input label="password" name="password" type="password" placeholder="Password" required />
	<Button>Login</Button>
</form>
<p class="mt-2 text-slate-400 text-center">
	Don't have an account? <a href="/auth/register" class="text-kat-200 underline capitalize"
		>register</a
	>
</p>
