<script lang="ts">
	import { Check } from 'lucide-svelte';
	import type { PageData } from './$types';
	import CalendarCheck_2 from 'lucide-svelte/icons/calendar-check-2';

	export let data: PageData;
	console.log('data', data);
</script>

<div class="mt-52 flex w-full items-end justify-center gap-2">
	<h1 class="font-title text-5xl">Booking modtaget</h1>
	<CalendarCheck_2 class="size-8" />
</div>

<p class="mt-4 text-center font-body">Tak for din booking. Tjek din email for bekræftelse.</p>
