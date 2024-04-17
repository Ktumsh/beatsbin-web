/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, h as renderTransition, e as renderComponent } from '../astro_DhVfD08P.mjs';
import 'kleur/colors';
import 'html-escaper';
import { C as CardPlayButton, $ as $$PageHeader, p as playlists, m as morePlaylists, b as $$Layout } from './_id__RR1EM4Uu.mjs';

const $$Astro$2 = createAstro();
const $$PlaylistCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PlaylistCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="group relative hover:bg-ebony-clay-900 hover:shadow-lg rounded-md transition-all duration-300"> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-card transition-all flex relative p-3 overflow-hidden gap-2 pb-6 rounded-md w-44 flex-col"${addAttribute(color.dark, "data-color")}${addAttribute(renderTransition($$result, "ulho7qtv", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "c6dkd3ch", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col px-2"> <h4 class="text-white text-sm"${addAttribute(renderTransition($$result, "a6ylar77", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-xs text-ebony-clay-100/70"${addAttribute(renderTransition($$result, "gjisd2u4", "", `playlist ${id} artists`), "data-astro-transition-scope")}> ${artistsString} </span> </div> </a> <div${addAttribute(`absolute right-4 bottom-20 translate-y-4
    transition-all duration-300 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    z-10`, "class")}${addAttribute(renderTransition($$result, "ng2wh52p", "", `playlist ${id} play`), "data-astro-transition-scope")}> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/workspace/beatsbin-web/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> </article>`;
}, "C:/workspace/beatsbin-web/src/components/PlaylistCard.astro", "self");

const $$Astro$1 = createAstro();
const $$PlaylistItemCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlaylistItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, color } = playlist;
  return renderTemplate`${maybeRenderHead()}<article class="group relative shadow-lg rounded-md bg-ebony-clay-800/30 hover:bg-ebony-clay-700/40 focus:bg-ebony-clay-700/40 transition-all duration-300"> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative transition-all duration-300 overflow-hidden items-center gap-5"${addAttribute(color.dark, "data-color")}${addAttribute(renderTransition($$result, "nsdsmds5", "", `playlist ${id} box`), "data-astro-transition-scope")}> <div class="h-14 w-14"> <img${addAttribute(cover, "src")}${addAttribute(title, "alt")} class="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"${addAttribute(renderTransition($$result, "yxukvssh", "", `playlist ${id} image`), "data-astro-transition-scope")}> </div> <div class="font-medium block"${addAttribute(renderTransition($$result, "nsgf3hxi", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </div> </a> <div class="absolute right-4 top-1 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"${addAttribute(renderTransition($$result, "l3uzvahc", "", `playlist ${id} play`), "data-astro-transition-scope")}> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/workspace/beatsbin-web/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> </article>`;
}, "C:/workspace/beatsbin-web/src/components/PlaylistItemCard.astro", "self");

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/* C:/workspace/beatsbin-web/src/components/Greeting.svelte generated by Svelte v4.2.14 */

const Greeting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const currentTime = /* @__PURE__ */ new Date();
	const currentHour = currentTime.getHours();
	let greeting = "";

	if (currentHour >= 5 && currentHour < 12) {
		greeting = "Buenos d\xEDas";
	} else if (currentHour >= 12 && currentHour < 18) {
		greeting = "Buenas tardes";
	} else {
		greeting = "Buenas noches";
	}

	return `<h1 class="text-3xl font-bold">${escape(greeting)}</h1>`;
});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-context" style="min-height:300px;--context-color:#252841;"> ${renderComponent($$result2, "PageHeader", $$PageHeader, {})} <div class="relative z-10 px-6"> ${renderComponent($$result2, "Greeting", Greeting, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Greeting.svelte", "client:component-export": "default" })} <div class="grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlaylistItemCard", $$PlaylistItemCard, { "playlist": playlist })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-ebony-clay-950 via-ebony-clay-950/80"></div> </div> <div class="px-6 relative z-10 mt-4"> <h2 class="text-2xl font-bold">Hecho para ti</h2> <div class="flex flex-wrap mt-6 gap-4"> ${morePlaylists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlaylistCard", $$PlaylistCard, { "playlist": playlist })}`)} </div> </div> ` })}`;
}, "C:/workspace/beatsbin-web/src/pages/index.astro", void 0);

const $$file = "C:/workspace/beatsbin-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
