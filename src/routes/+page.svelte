<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="container mx-auto">
	<div class="mt-20 flex flex-col justify-center text-pretty md:mt-52">
		<h1 class="font-title text-5xl leading-snug md:text-7xl">Hjemmesider af højeste kvalitet.</h1>
		<p class="mt-4 font-body text-2xl">
			Nedenfor præsenteres et udvalg af de projekter, hvortil jeg har bidraget med udviklingen.
		</p>
	</div>
</div>

<Separator class="my-10 mt-36 bg-black" />

<div class="container mx-auto">
	<div class="grid grid-cols-1 gap-8 *:h-full md:grid-cols-2 xl:grid-cols-3">
		<div class="flex flex-col justify-between gap-4">
			<div class="flex flex-col gap-4">
				<h3 class="font-title text-3xl">BetterLectio</h3>
				<p class="text-pretty text-justify font-body text-xl">
					BetterLectio er den ultimative forberedelse af Lectio. Et program det bruges af mange
					gymnasier. BetterLectio har opnået stor succes og har over 400 brugere på over 60 skoler.
					Programmet er bygget med SvelteKit og Tauri.
				</p>
			</div>
			<div class="flex gap-4">
				<Button href="https://betterlectio.dk/">Besøg</Button>
				<Button variant="outline" href="https://github.com/BetterLectio/betterLectio">Github</Button
				>
			</div>
		</div>
		<div class="flex flex-col justify-between gap-4">
			<div class="flex flex-col gap-4">
				<h3 class="font-title text-3xl">Simple-SaaS</h3>
				<p class="text-pretty text-justify font-body text-xl">
					Sveltekit drevet SaaS platform, der gør det nemt at oprette og administrere abonnementer.
					bruger Supabase, Stripe og MobilePay samt mange andre moderne teknologier.
				</p>
			</div>
			<div class="flex gap-4">
				<Button disabled>Kommer snart</Button>
			</div>
		</div>
		<div class="flex flex-col justify-between gap-4">
			<div class="flex flex-col gap-4">
				<h3 class="font-title text-3xl">SEO Optimeret Blog</h3>
				<p class="text-pretty text-justify font-body text-xl">
					SEO optimeret blog, der er bygget med SvelteKit og TailwindCSS. Bloggen er optimeret til
					at rangere højt i søgeresultaterne. Bygget med Supabase og TailwindCSS. Med support for
					Markdown, Katex og MermaidJS.
				</p>
			</div>
			<div class="flex gap-4">
				<Button disabled>Kommer snart</Button>
			</div>
		</div>
	</div>
</div>

<Separator class="my-10 bg-black" />

<div class="container mx-auto">
	<div class="flex flex-col justify-between gap-8 lg:flex-row">
		<div class="lg:w-1/2">
			<h3 class="font-title text-5xl leading-normal">Om mig</h3>
			<p class="mt-4 text-pretty text-justify font-body text-xl">
				Jeg er en passioneret webudvikler, der brænder for at skabe brugervenlige og moderne
				hjemmesider. Jeg har erfaring med en bred vifte af teknologier, og jeg er altid klar på at
				lære nyt. Jeg har over 3 års erfaring med undervisning af unge indenfor teknologi, matematik
				og programmering og har derfor en god forståelse for at formidle komplekse emner på en
				letforståelig måde.
			</p>
		</div>
		<div class="overflow-hidden rounded-3xl lg:w-1/2">
			<enhanced:img src="/static/landing.png" class="rounded-3xl" alt="tools i love" />
		</div>
	</div>
</div>

<Separator class="my-10 bg-black" />
