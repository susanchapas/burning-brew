# burning-brew
coffee that defies expectations

## ✨ Live Site ✨

https://susanchapas.github.io/burning-brew/index.html

## Created by ##

Susan Chapas - https://github.com/susanchapas 
&
Bridget McTiernan - https://github.com/mcbridgeee

## Brand Archetype, Cialdini Principles, and Competitive Research

Burning Brew embodies the Outlaw archetype — rebellious, raw, and honest. It rejects the over-sweetened “dessert coffee” culture and celebrates the grind itself. The tone is unapologetic, blunt, and rooted in authenticity. This archetype appeals to people who see coffee as fuel, not decoration — those who value grit, focus, and intensity over comfort.

### Cialdini’s Persuasion Principles in Action: ###

Authority: Emphasis on authentic sourcing, honest labeling, and a straightforward presentation builds credibility.

Social Proof: Testimonials and shareable copy like “Join the Grindhouse” connect users through identity.

Scarcity: Limited roasts and exclusive blends create a sense of urgency.

Commitment & Consistency: Returning customers can join a subscription (“The Fossil Order”) that reinforces belonging.

Reciprocity: Visitors receive value first — through guides, brewing tips, or rewards — before being asked to buy.

Unity: Language like “We praise the grind” invites alignment with a shared mindset, not just a product.

### Competitive Landscape: ###

Most competitors (e.g., Black Rifle Coffee, Death Wish Coffee, Onyx Coffee Lab) position themselves as either patriotic, edgy, or artisan. Burning Brew differentiates itself through tone — it’s rebellious without cliché. Instead of nationalism or luxury, it sells truth and intensity — a brutal honesty that resonates with young adults tired of corporate flavor marketing.

## Target Customer Segment ##

Burning Brew targets urban 20–35-year-olds who are independent, ambitious, and skeptical of mainstream branding. They’re creatives, night workers, gym-goers, and entrepreneurs who see coffee as a weapon, not a treat. They’re drawn to authenticity, aesthetic minimalism, and emotional realism — people who value brands that say what they mean.

They’ve outgrown the polished “latte art” scene and want something more grounded: real caffeine, real attitude, no sugarcoating — literally or figuratively.

---

## Tech Stack
- **HTML5, CSS3, JavaScript (ES6)**
- **Node.js** for development tooling
- **Prettier** for code formatting
- **ESLint (Airbnb config)** for static code analysis
- **WCAG 2.1 AA** accessibility standards
- **Manual Lighthouse testing** for performance and accessibility scoring

---

## Quality Gates  
To ensure code quality, maintainability, accessibility and performance, the following gates are enforced:

1. **Code Formatting Gate**  
   - Tool: Prettier  
   - Script: `npm run check-format`  
   - Gate passes only if all files adhere to formatting rules (no changes flagged by Prettier).

2. **Linting Gate**  
   - Tool: ESLint with Airbnb base configuration  
   - Script: `npm run lint`  
   - Gate passes only if no linting errors (warnings allowed or configurable) remain.  
   - Typical rules enforced: no unused vars, no console logs in production code, consistent quotes/semi as configured.

---

## Development

Serve the site locally with auto-reload:

```bash
npm install
npm start
# then open http://127.0.0.1:8080
```

## Build (minify JS/CSS)

This project uses `esbuild` to minify the site assets into `dist/`.

```bash
npm run build
```

The build command will create `dist/js/scripts.min.js` and `dist/css/styles.min.css`.

## Notes

- `npm start` runs `live-server` for auto-reload during development.
- `npm run build` creates a small `dist/` directory with minified assets.

## Final Words

This project isn’t just another coffee site. It’s a fuel system for the reckless, the doers, the ones who refuse comfort.
If you’re here, you’re not in for serenity. You’re here for heat, grit, ignition.

Drink slow. Burn fast.
Join the fossil order.

