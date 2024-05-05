<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher, setMode } from 'mode-watcher';
	setMode('light');

	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';

	import { crossfade, fade } from 'svelte/transition';
	import { quintInOut, quintOut } from 'svelte/easing';

	let showFullName = false;

	onMount(() => {
		if (window.innerWidth > 600) {
			setTimeout(() => {
				showFullName = true;
			}, 2000);
		} else showFullName = true;
	});

	let logoText: { char: string; id: string }[] = [];
	$: if (showFullName) {
		console.log('showFullName', showFullName);
		logoText = [
			{ char: 'V', id: '1' },
			{ char: 'Ø', id: '8' },
			{ char: '.', id: '30' },
			{ char: 'd', id: '31' },
			{ char: 'k', id: '33' }
		];
	} else {
		logoText = [
			{ char: 'V', id: '1' },
			{ char: 'i', id: '2' },
			{ char: 'c', id: '3' },
			{ char: 't', id: '4' },
			{ char: 'o', id: '5' },
			{ char: 'r', id: '6' },
			{ char: ' ', id: '7' },
			{ char: 'Ø', id: '8' },
			{ char: 's', id: '9' },
			{ char: 't', id: '10' },
			{ char: 'e', id: '11' },
			{ char: 'r', id: '12' },
			{ char: 'g', id: '13' },
			{ char: 'a', id: '14' },
			{ char: 'a', id: '15' },
			{ char: 'r', id: '16' },
			{ char: 'd', id: '17' },
			{ char: '.', id: '30' },
			{ char: 'd', id: '31' },
			{ char: 'k', id: '33' }
		];
	}

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 400,
				delay: showFullName ? 0 : params.delay,
				easing: quintInOut,
				css: (t) => `opacity: ${t}`
			};
		}
	});
</script>

<div class="mx-8 flex h-20 items-center justify-between gap-4">
	<div class="font-title flex gap-0 text-3xl">
		{#each logoText as { char, id }, i (id)}
			<span
				in:receive={{ key: id, delay: i * 30 + 200 }}
				out:send={{ key: id, delay: i * 30 + 200 }}
				animate:flip={{ duration: 750, delay: 300, easing: quintOut }}
				class="m-0 p-0"
			>
				{char}
			</span>
		{/each}
	</div>
	<div class="font-title flex justify-start gap-4">
		<a href="/" class="text-2xl">Forside</a>
		<span>/</span>
		<a href="/about" class="text-2xl">Om</a>
		<span>/</span>
		<a href="/projects" class="text-2xl">Projekter</a>
	</div>
</div>

<ModeWatcher />
<slot></slot>
