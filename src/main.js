import App from './App.html';

var app = new App({
	target: document.body,
	data: {
		"title": "تقویم",
		"h0": "ش",
		"h1": "ی",
		"h2": "د",
		"h3": "س",
		"h4": "چ",
		"h5": "پ",
		"h6": "ج",
	}
});


if (module.hot) {
	const { configure, register, reload } = require('/home/travis/build/sveltejs/svelte.technology/node_modules/svelte-loader/lib/hot-api.js');

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		app = register("src/routes/repl/_components/AppControls.html", app);
	} else {
		// hot update
		app = reload("src/routes/repl/_components/AppControls.html", app);
	}
}

export default app;
