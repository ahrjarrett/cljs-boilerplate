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
cljs.core.println.call(null,hello_world.core.foo.call(null,(10),(100)));
cljs.core.println.call(null,parseInt("222"));
(new RegExp("^foo$"));
(new RegExp("^foo$"));
hello_world.core.re = RegExp("^Clojure");
cljs.core.println.call(null,hello_world.core.re.test("ClojureScript"));
Math.sqrt((9));
Math.sqrt((15));
console.log("Hello");
hello_world.core.javascript_object = (function (){var obj29384 = {"taste":"flavor"};
return obj29384;
})();
cljs.core.println.call(null,hello_world.core.javascript_object);
hello_world.core.javascript_object.taste = "flavors";
cljs.core.println.call(null,hello_world.core.javascript_object);
hello_world.core.new_js_obj = ({"country": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),"FR",new cljs.core.Keyword(null,"name","name",1843675177),"France"], null)});
cljs.core.println.call(null,hello_world.core.new_js_obj);
cljs.core.println.call(null,hello_world.core.new_js_obj.country);
cljs.core.println.call(null,hello_world.core.new_js_obj.country.code);
hello_world.core.newly_minted_clojure_obj = cljs.core.js__GT_clj.call(null,hello_world.core.new_js_obj);
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("this is my newly minted clojure object made from js->clj: \n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_world.core.newly_minted_clojure_obj),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and this is the JS object: \n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_world.core.new_js_obj.country)].join(''));
cljs.core.println.call(null,new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(hello_world.core.newly_minted_clojure_obj));
cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bob Dylan","The Birds","The Yardbirds"], null));
cljs.core.println.call(null,[null,null,null,null,null,null,null,null,null,null]);
cljs.core.println.call(null,cljs.core.count.call(null,[null,null,null,null,null,null,null,null,null,null,null]));

//# sourceMappingURL=core.js.map?rel=1497505091179