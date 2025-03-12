<script>
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { base } from '$app/paths';
</script>

<nav>
	<a href="{base}/" title="Gå till Hem-sidan">Hem</a>
	<a href="{base}/photoapp" title="Gå till Photo App-sidan">Photo App</a>
	<a href="{base}/register" title="Gå till Register-sidan">Register</a>
	<a href="{base}/shoppinglist" title="Gå till Shop Listan-sidan">Shop Listan</a>
	<a href="{base}/memory" title="Gå till memory-sidan">Memory</a>
	<a href="{base}/chat" title="Gå till chat-sidan">Chat</a>
	<a href="{base}/search" title="Gå till search-sidan">Search</a>
</nav>

<slot />


<style>

	
:global(body), :global(html){
  margin: 0%;
  padding: 0%;
  height: 100vh;
  width: 100vw;
}    

a {
	margin-left: 10px;
}

</style>