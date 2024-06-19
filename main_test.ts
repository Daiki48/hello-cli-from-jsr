import { hello } from "./main.ts";

Deno.test(function helloTest() {
	hello();
});
