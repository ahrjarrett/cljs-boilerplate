// Compiled by ClojureScript 1.9.542 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof hello_world.core.conn !== 'undefined'){
} else {
hello_world.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"hello werld");
hello_world.core.foo = (function hello_world$core$foo(a,b){
return (a - b);
});
cljs.core.println.call(null,hello_world.core.foo.call(null,(10),(20)));

//# sourceMappingURL=core.js.map?rel=1495582170590