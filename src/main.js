import App from './App.html';

var app = new App({
	target: document.body
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
