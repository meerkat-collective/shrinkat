<script>
	import { createEventDispatcher } from "svelte";
	import { scale, slide } from "svelte/transition";
	const dispatch = createEventDispatcher();

	export let open = false;
	export let title;
	export let buttonText;

	function clickOutside(element) {
		function handleClick(event) {
			const targetEl = event.target;

			if (element && !element.contains(targetEl)) {
				const clickOutsideEvent = new CustomEvent("outside");
				element.dispatchEvent(clickOutsideEvent);
			}
		}

		document.addEventListener("click", handleClick, true);

		return {
			destroy() {
				document.removeEventListener("click", handleClick, true);
			}
		};
	}

	function closeModal() {
		open = false;
	}

	function openModal() {
		open = true;
	}
</script>

<button
	on:click={openModal}
	class="py-2 px-5 bg-amber-700 rounded text-blue-50 hover:bg-amber-600 transition duration-300"
	>{buttonText}</button
>
{#if open}
	<section
		class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-4 lg:p-0"
	>
		<!-- overlay -->
		<div class="modal-overlay fixed h-full w-full bg-gray-900 opacity-50" />
		<!-- modal content -->
		<div
			transition:scale
			use:clickOutside
			on:outside={closeModal}
			use:clickOutside
			class="bg-slate-800 w-full lg:h-max lg:w-1/2 mx-auto rounded-md shadow-xl z-50 overflow-y-auto"
		>
			<div class="head border-b border-slate-700 p-4 flex justify-between">
				<h3 class="text-lg font-semibold">{title}</h3>
				<button
					on:click={closeModal}
					class="p-2 hover:bg-slate-600 text-slate-300 transition duration-300 rounded"
				>
					<svg
						class="w-3 h-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
						/>
					</svg>
				</button>
			</div>
			<div class="content p-6">
				<slot name="body" />
			</div>
			<div class=" border-t py-3 px-4 border-slate-700">
				<button
					on:click={closeModal}
					class=" text-sm py-2 px-4 rounded border border-slate-600 hover:bg-slate-700 transition duration-300"
					>Cancel</button
				>
			</div>
		</div>
	</section>
{/if}
