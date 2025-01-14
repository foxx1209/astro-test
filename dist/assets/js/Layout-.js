import { c as createComponent, r as renderTemplate, f as renderHead, g as renderSlot, b as renderScript, d as createAstro } from './astro/server-.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  ${renderScript($$result, "/Users/mizukawahiroshikana/Desktop/astro-sass-build-css-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/mizukawahiroshikana/Desktop/astro-sass-build-css-main/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
