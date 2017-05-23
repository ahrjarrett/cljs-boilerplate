// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__7873__auto__,writer__7874__auto__,opt__7875__auto__){
return cljs.core._write.call(null,writer__7874__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8550 = arguments.length;
var i__8376__auto___8551 = (0);
while(true){
if((i__8376__auto___8551 < len__8375__auto___8550)){
args__8382__auto__.push((arguments[i__8376__auto___8551]));

var G__8552 = (i__8376__auto___8551 + (1));
i__8376__auto___8551 = G__8552;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq8549){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8549));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8554 = arguments.length;
var i__8376__auto___8555 = (0);
while(true){
if((i__8376__auto___8555 < len__8375__auto___8554)){
args__8382__auto__.push((arguments[i__8376__auto___8555]));

var G__8556 = (i__8376__auto___8555 + (1));
i__8376__auto___8555 = G__8556;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq8553){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8553));
});

var g_QMARK__8557 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_8558 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__8557){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__8557))
,null));
var mkg_8559 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__8557,g_8558){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__8557,g_8558))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__8557,g_8558,mkg_8559){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8557).call(null,x);
});})(g_QMARK__8557,g_8558,mkg_8559))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__8557,g_8558,mkg_8559){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_8559).call(null,gfn);
});})(g_QMARK__8557,g_8558,mkg_8559))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__8557,g_8558,mkg_8559){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_8558).call(null,generator);
});})(g_QMARK__8557,g_8558,mkg_8559))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8521__auto___8579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__8521__auto___8579){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8580 = arguments.length;
var i__8376__auto___8581 = (0);
while(true){
if((i__8376__auto___8581 < len__8375__auto___8580)){
args__8382__auto__.push((arguments[i__8376__auto___8581]));

var G__8582 = (i__8376__auto___8581 + (1));
i__8376__auto___8581 = G__8582;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8579))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8579),args);
});})(g__8521__auto___8579))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__8521__auto___8579){
return (function (seq8560){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8560));
});})(g__8521__auto___8579))
;


var g__8521__auto___8583 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__8521__auto___8583){
return (function cljs$spec$gen$alpha$list(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8584 = arguments.length;
var i__8376__auto___8585 = (0);
while(true){
if((i__8376__auto___8585 < len__8375__auto___8584)){
args__8382__auto__.push((arguments[i__8376__auto___8585]));

var G__8586 = (i__8376__auto___8585 + (1));
i__8376__auto___8585 = G__8586;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8583))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8583),args);
});})(g__8521__auto___8583))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__8521__auto___8583){
return (function (seq8561){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8561));
});})(g__8521__auto___8583))
;


var g__8521__auto___8587 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__8521__auto___8587){
return (function cljs$spec$gen$alpha$map(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8588 = arguments.length;
var i__8376__auto___8589 = (0);
while(true){
if((i__8376__auto___8589 < len__8375__auto___8588)){
args__8382__auto__.push((arguments[i__8376__auto___8589]));

var G__8590 = (i__8376__auto___8589 + (1));
i__8376__auto___8589 = G__8590;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8587))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8587),args);
});})(g__8521__auto___8587))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__8521__auto___8587){
return (function (seq8562){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8562));
});})(g__8521__auto___8587))
;


var g__8521__auto___8591 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__8521__auto___8591){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8592 = arguments.length;
var i__8376__auto___8593 = (0);
while(true){
if((i__8376__auto___8593 < len__8375__auto___8592)){
args__8382__auto__.push((arguments[i__8376__auto___8593]));

var G__8594 = (i__8376__auto___8593 + (1));
i__8376__auto___8593 = G__8594;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8591))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8591){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8591),args);
});})(g__8521__auto___8591))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__8521__auto___8591){
return (function (seq8563){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8563));
});})(g__8521__auto___8591))
;


var g__8521__auto___8595 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__8521__auto___8595){
return (function cljs$spec$gen$alpha$set(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8596 = arguments.length;
var i__8376__auto___8597 = (0);
while(true){
if((i__8376__auto___8597 < len__8375__auto___8596)){
args__8382__auto__.push((arguments[i__8376__auto___8597]));

var G__8598 = (i__8376__auto___8597 + (1));
i__8376__auto___8597 = G__8598;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8595))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8595){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8595),args);
});})(g__8521__auto___8595))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__8521__auto___8595){
return (function (seq8564){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8564));
});})(g__8521__auto___8595))
;


var g__8521__auto___8599 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__8521__auto___8599){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8600 = arguments.length;
var i__8376__auto___8601 = (0);
while(true){
if((i__8376__auto___8601 < len__8375__auto___8600)){
args__8382__auto__.push((arguments[i__8376__auto___8601]));

var G__8602 = (i__8376__auto___8601 + (1));
i__8376__auto___8601 = G__8602;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8599))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8599){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8599),args);
});})(g__8521__auto___8599))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__8521__auto___8599){
return (function (seq8565){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8565));
});})(g__8521__auto___8599))
;


var g__8521__auto___8603 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__8521__auto___8603){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8604 = arguments.length;
var i__8376__auto___8605 = (0);
while(true){
if((i__8376__auto___8605 < len__8375__auto___8604)){
args__8382__auto__.push((arguments[i__8376__auto___8605]));

var G__8606 = (i__8376__auto___8605 + (1));
i__8376__auto___8605 = G__8606;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8603))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8603){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8603),args);
});})(g__8521__auto___8603))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__8521__auto___8603){
return (function (seq8566){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8566));
});})(g__8521__auto___8603))
;


var g__8521__auto___8607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__8521__auto___8607){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8608 = arguments.length;
var i__8376__auto___8609 = (0);
while(true){
if((i__8376__auto___8609 < len__8375__auto___8608)){
args__8382__auto__.push((arguments[i__8376__auto___8609]));

var G__8610 = (i__8376__auto___8609 + (1));
i__8376__auto___8609 = G__8610;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8607))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8607){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8607),args);
});})(g__8521__auto___8607))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__8521__auto___8607){
return (function (seq8567){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8567));
});})(g__8521__auto___8607))
;


var g__8521__auto___8611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__8521__auto___8611){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8612 = arguments.length;
var i__8376__auto___8613 = (0);
while(true){
if((i__8376__auto___8613 < len__8375__auto___8612)){
args__8382__auto__.push((arguments[i__8376__auto___8613]));

var G__8614 = (i__8376__auto___8613 + (1));
i__8376__auto___8613 = G__8614;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8611))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8611),args);
});})(g__8521__auto___8611))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__8521__auto___8611){
return (function (seq8568){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8568));
});})(g__8521__auto___8611))
;


var g__8521__auto___8615 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__8521__auto___8615){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8616 = arguments.length;
var i__8376__auto___8617 = (0);
while(true){
if((i__8376__auto___8617 < len__8375__auto___8616)){
args__8382__auto__.push((arguments[i__8376__auto___8617]));

var G__8618 = (i__8376__auto___8617 + (1));
i__8376__auto___8617 = G__8618;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8615))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8615),args);
});})(g__8521__auto___8615))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__8521__auto___8615){
return (function (seq8569){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8569));
});})(g__8521__auto___8615))
;


var g__8521__auto___8619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__8521__auto___8619){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8620 = arguments.length;
var i__8376__auto___8621 = (0);
while(true){
if((i__8376__auto___8621 < len__8375__auto___8620)){
args__8382__auto__.push((arguments[i__8376__auto___8621]));

var G__8622 = (i__8376__auto___8621 + (1));
i__8376__auto___8621 = G__8622;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8619))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8619),args);
});})(g__8521__auto___8619))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__8521__auto___8619){
return (function (seq8570){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8570));
});})(g__8521__auto___8619))
;


var g__8521__auto___8623 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__8521__auto___8623){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8624 = arguments.length;
var i__8376__auto___8625 = (0);
while(true){
if((i__8376__auto___8625 < len__8375__auto___8624)){
args__8382__auto__.push((arguments[i__8376__auto___8625]));

var G__8626 = (i__8376__auto___8625 + (1));
i__8376__auto___8625 = G__8626;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8623))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8623),args);
});})(g__8521__auto___8623))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__8521__auto___8623){
return (function (seq8571){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8571));
});})(g__8521__auto___8623))
;


var g__8521__auto___8627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__8521__auto___8627){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8628 = arguments.length;
var i__8376__auto___8629 = (0);
while(true){
if((i__8376__auto___8629 < len__8375__auto___8628)){
args__8382__auto__.push((arguments[i__8376__auto___8629]));

var G__8630 = (i__8376__auto___8629 + (1));
i__8376__auto___8629 = G__8630;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8627))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8627),args);
});})(g__8521__auto___8627))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__8521__auto___8627){
return (function (seq8572){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8572));
});})(g__8521__auto___8627))
;


var g__8521__auto___8631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__8521__auto___8631){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8632 = arguments.length;
var i__8376__auto___8633 = (0);
while(true){
if((i__8376__auto___8633 < len__8375__auto___8632)){
args__8382__auto__.push((arguments[i__8376__auto___8633]));

var G__8634 = (i__8376__auto___8633 + (1));
i__8376__auto___8633 = G__8634;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8631))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8631),args);
});})(g__8521__auto___8631))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__8521__auto___8631){
return (function (seq8573){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8573));
});})(g__8521__auto___8631))
;


var g__8521__auto___8635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__8521__auto___8635){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8636 = arguments.length;
var i__8376__auto___8637 = (0);
while(true){
if((i__8376__auto___8637 < len__8375__auto___8636)){
args__8382__auto__.push((arguments[i__8376__auto___8637]));

var G__8638 = (i__8376__auto___8637 + (1));
i__8376__auto___8637 = G__8638;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8635))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8635),args);
});})(g__8521__auto___8635))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__8521__auto___8635){
return (function (seq8574){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8574));
});})(g__8521__auto___8635))
;


var g__8521__auto___8639 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__8521__auto___8639){
return (function cljs$spec$gen$alpha$return(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8640 = arguments.length;
var i__8376__auto___8641 = (0);
while(true){
if((i__8376__auto___8641 < len__8375__auto___8640)){
args__8382__auto__.push((arguments[i__8376__auto___8641]));

var G__8642 = (i__8376__auto___8641 + (1));
i__8376__auto___8641 = G__8642;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8639))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8639){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8639),args);
});})(g__8521__auto___8639))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__8521__auto___8639){
return (function (seq8575){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8575));
});})(g__8521__auto___8639))
;


var g__8521__auto___8643 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__8521__auto___8643){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8644 = arguments.length;
var i__8376__auto___8645 = (0);
while(true){
if((i__8376__auto___8645 < len__8375__auto___8644)){
args__8382__auto__.push((arguments[i__8376__auto___8645]));

var G__8646 = (i__8376__auto___8645 + (1));
i__8376__auto___8645 = G__8646;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8643))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8643){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8643),args);
});})(g__8521__auto___8643))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8521__auto___8643){
return (function (seq8576){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8576));
});})(g__8521__auto___8643))
;


var g__8521__auto___8647 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__8521__auto___8647){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8648 = arguments.length;
var i__8376__auto___8649 = (0);
while(true){
if((i__8376__auto___8649 < len__8375__auto___8648)){
args__8382__auto__.push((arguments[i__8376__auto___8649]));

var G__8650 = (i__8376__auto___8649 + (1));
i__8376__auto___8649 = G__8650;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8647))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8647){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8647),args);
});})(g__8521__auto___8647))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__8521__auto___8647){
return (function (seq8577){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8577));
});})(g__8521__auto___8647))
;


var g__8521__auto___8651 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__8521__auto___8651){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8652 = arguments.length;
var i__8376__auto___8653 = (0);
while(true){
if((i__8376__auto___8653 < len__8375__auto___8652)){
args__8382__auto__.push((arguments[i__8376__auto___8653]));

var G__8654 = (i__8376__auto___8653 + (1));
i__8376__auto___8653 = G__8654;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8521__auto___8651))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8521__auto___8651){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8521__auto___8651),args);
});})(g__8521__auto___8651))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__8521__auto___8651){
return (function (seq8578){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8578));
});})(g__8521__auto___8651))
;

var g__8534__auto___8676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__8534__auto___8676){
return (function cljs$spec$gen$alpha$any(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8677 = arguments.length;
var i__8376__auto___8678 = (0);
while(true){
if((i__8376__auto___8678 < len__8375__auto___8677)){
args__8382__auto__.push((arguments[i__8376__auto___8678]));

var G__8679 = (i__8376__auto___8678 + (1));
i__8376__auto___8678 = G__8679;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8676))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8676){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8676);
});})(g__8534__auto___8676))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__8534__auto___8676){
return (function (seq8655){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8655));
});})(g__8534__auto___8676))
;


var g__8534__auto___8680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__8534__auto___8680){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8681 = arguments.length;
var i__8376__auto___8682 = (0);
while(true){
if((i__8376__auto___8682 < len__8375__auto___8681)){
args__8382__auto__.push((arguments[i__8376__auto___8682]));

var G__8683 = (i__8376__auto___8682 + (1));
i__8376__auto___8682 = G__8683;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8680))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8680){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8680);
});})(g__8534__auto___8680))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__8534__auto___8680){
return (function (seq8656){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8656));
});})(g__8534__auto___8680))
;


var g__8534__auto___8684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__8534__auto___8684){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8685 = arguments.length;
var i__8376__auto___8686 = (0);
while(true){
if((i__8376__auto___8686 < len__8375__auto___8685)){
args__8382__auto__.push((arguments[i__8376__auto___8686]));

var G__8687 = (i__8376__auto___8686 + (1));
i__8376__auto___8686 = G__8687;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8684))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8684){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8684);
});})(g__8534__auto___8684))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__8534__auto___8684){
return (function (seq8657){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8657));
});})(g__8534__auto___8684))
;


var g__8534__auto___8688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__8534__auto___8688){
return (function cljs$spec$gen$alpha$char(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8689 = arguments.length;
var i__8376__auto___8690 = (0);
while(true){
if((i__8376__auto___8690 < len__8375__auto___8689)){
args__8382__auto__.push((arguments[i__8376__auto___8690]));

var G__8691 = (i__8376__auto___8690 + (1));
i__8376__auto___8690 = G__8691;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8688))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8688){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8688);
});})(g__8534__auto___8688))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__8534__auto___8688){
return (function (seq8658){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8658));
});})(g__8534__auto___8688))
;


var g__8534__auto___8692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__8534__auto___8692){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8693 = arguments.length;
var i__8376__auto___8694 = (0);
while(true){
if((i__8376__auto___8694 < len__8375__auto___8693)){
args__8382__auto__.push((arguments[i__8376__auto___8694]));

var G__8695 = (i__8376__auto___8694 + (1));
i__8376__auto___8694 = G__8695;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8692))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8692){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8692);
});})(g__8534__auto___8692))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__8534__auto___8692){
return (function (seq8659){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8659));
});})(g__8534__auto___8692))
;


var g__8534__auto___8696 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__8534__auto___8696){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8697 = arguments.length;
var i__8376__auto___8698 = (0);
while(true){
if((i__8376__auto___8698 < len__8375__auto___8697)){
args__8382__auto__.push((arguments[i__8376__auto___8698]));

var G__8699 = (i__8376__auto___8698 + (1));
i__8376__auto___8698 = G__8699;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8696))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8696){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8696);
});})(g__8534__auto___8696))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__8534__auto___8696){
return (function (seq8660){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8660));
});})(g__8534__auto___8696))
;


var g__8534__auto___8700 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__8534__auto___8700){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8701 = arguments.length;
var i__8376__auto___8702 = (0);
while(true){
if((i__8376__auto___8702 < len__8375__auto___8701)){
args__8382__auto__.push((arguments[i__8376__auto___8702]));

var G__8703 = (i__8376__auto___8702 + (1));
i__8376__auto___8702 = G__8703;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8700))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8700){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8700);
});})(g__8534__auto___8700))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__8534__auto___8700){
return (function (seq8661){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8661));
});})(g__8534__auto___8700))
;


var g__8534__auto___8704 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__8534__auto___8704){
return (function cljs$spec$gen$alpha$double(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8705 = arguments.length;
var i__8376__auto___8706 = (0);
while(true){
if((i__8376__auto___8706 < len__8375__auto___8705)){
args__8382__auto__.push((arguments[i__8376__auto___8706]));

var G__8707 = (i__8376__auto___8706 + (1));
i__8376__auto___8706 = G__8707;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8704))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8704){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8704);
});})(g__8534__auto___8704))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__8534__auto___8704){
return (function (seq8662){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8662));
});})(g__8534__auto___8704))
;


var g__8534__auto___8708 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__8534__auto___8708){
return (function cljs$spec$gen$alpha$int(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8709 = arguments.length;
var i__8376__auto___8710 = (0);
while(true){
if((i__8376__auto___8710 < len__8375__auto___8709)){
args__8382__auto__.push((arguments[i__8376__auto___8710]));

var G__8711 = (i__8376__auto___8710 + (1));
i__8376__auto___8710 = G__8711;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8708))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8708){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8708);
});})(g__8534__auto___8708))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__8534__auto___8708){
return (function (seq8663){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8663));
});})(g__8534__auto___8708))
;


var g__8534__auto___8712 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__8534__auto___8712){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8713 = arguments.length;
var i__8376__auto___8714 = (0);
while(true){
if((i__8376__auto___8714 < len__8375__auto___8713)){
args__8382__auto__.push((arguments[i__8376__auto___8714]));

var G__8715 = (i__8376__auto___8714 + (1));
i__8376__auto___8714 = G__8715;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8712))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8712){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8712);
});})(g__8534__auto___8712))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__8534__auto___8712){
return (function (seq8664){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8664));
});})(g__8534__auto___8712))
;


var g__8534__auto___8716 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__8534__auto___8716){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8717 = arguments.length;
var i__8376__auto___8718 = (0);
while(true){
if((i__8376__auto___8718 < len__8375__auto___8717)){
args__8382__auto__.push((arguments[i__8376__auto___8718]));

var G__8719 = (i__8376__auto___8718 + (1));
i__8376__auto___8718 = G__8719;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8716))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8716){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8716);
});})(g__8534__auto___8716))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__8534__auto___8716){
return (function (seq8665){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8665));
});})(g__8534__auto___8716))
;


var g__8534__auto___8720 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__8534__auto___8720){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8721 = arguments.length;
var i__8376__auto___8722 = (0);
while(true){
if((i__8376__auto___8722 < len__8375__auto___8721)){
args__8382__auto__.push((arguments[i__8376__auto___8722]));

var G__8723 = (i__8376__auto___8722 + (1));
i__8376__auto___8722 = G__8723;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8720))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8720){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8720);
});})(g__8534__auto___8720))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__8534__auto___8720){
return (function (seq8666){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8666));
});})(g__8534__auto___8720))
;


var g__8534__auto___8724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__8534__auto___8724){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8725 = arguments.length;
var i__8376__auto___8726 = (0);
while(true){
if((i__8376__auto___8726 < len__8375__auto___8725)){
args__8382__auto__.push((arguments[i__8376__auto___8726]));

var G__8727 = (i__8376__auto___8726 + (1));
i__8376__auto___8726 = G__8727;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8724))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8724){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8724);
});})(g__8534__auto___8724))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__8534__auto___8724){
return (function (seq8667){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8667));
});})(g__8534__auto___8724))
;


var g__8534__auto___8728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__8534__auto___8728){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8729 = arguments.length;
var i__8376__auto___8730 = (0);
while(true){
if((i__8376__auto___8730 < len__8375__auto___8729)){
args__8382__auto__.push((arguments[i__8376__auto___8730]));

var G__8731 = (i__8376__auto___8730 + (1));
i__8376__auto___8730 = G__8731;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8728))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8728){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8728);
});})(g__8534__auto___8728))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__8534__auto___8728){
return (function (seq8668){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8668));
});})(g__8534__auto___8728))
;


var g__8534__auto___8732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__8534__auto___8732){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8733 = arguments.length;
var i__8376__auto___8734 = (0);
while(true){
if((i__8376__auto___8734 < len__8375__auto___8733)){
args__8382__auto__.push((arguments[i__8376__auto___8734]));

var G__8735 = (i__8376__auto___8734 + (1));
i__8376__auto___8734 = G__8735;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8732))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8732){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8732);
});})(g__8534__auto___8732))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__8534__auto___8732){
return (function (seq8669){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8669));
});})(g__8534__auto___8732))
;


var g__8534__auto___8736 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__8534__auto___8736){
return (function cljs$spec$gen$alpha$string(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8737 = arguments.length;
var i__8376__auto___8738 = (0);
while(true){
if((i__8376__auto___8738 < len__8375__auto___8737)){
args__8382__auto__.push((arguments[i__8376__auto___8738]));

var G__8739 = (i__8376__auto___8738 + (1));
i__8376__auto___8738 = G__8739;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8736))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8736){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8736);
});})(g__8534__auto___8736))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__8534__auto___8736){
return (function (seq8670){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8670));
});})(g__8534__auto___8736))
;


var g__8534__auto___8740 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__8534__auto___8740){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8741 = arguments.length;
var i__8376__auto___8742 = (0);
while(true){
if((i__8376__auto___8742 < len__8375__auto___8741)){
args__8382__auto__.push((arguments[i__8376__auto___8742]));

var G__8743 = (i__8376__auto___8742 + (1));
i__8376__auto___8742 = G__8743;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8740))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8740){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8740);
});})(g__8534__auto___8740))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__8534__auto___8740){
return (function (seq8671){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8671));
});})(g__8534__auto___8740))
;


var g__8534__auto___8744 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__8534__auto___8744){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8745 = arguments.length;
var i__8376__auto___8746 = (0);
while(true){
if((i__8376__auto___8746 < len__8375__auto___8745)){
args__8382__auto__.push((arguments[i__8376__auto___8746]));

var G__8747 = (i__8376__auto___8746 + (1));
i__8376__auto___8746 = G__8747;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8744))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8744){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8744);
});})(g__8534__auto___8744))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__8534__auto___8744){
return (function (seq8672){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8672));
});})(g__8534__auto___8744))
;


var g__8534__auto___8748 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__8534__auto___8748){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8749 = arguments.length;
var i__8376__auto___8750 = (0);
while(true){
if((i__8376__auto___8750 < len__8375__auto___8749)){
args__8382__auto__.push((arguments[i__8376__auto___8750]));

var G__8751 = (i__8376__auto___8750 + (1));
i__8376__auto___8750 = G__8751;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8748))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8748){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8748);
});})(g__8534__auto___8748))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__8534__auto___8748){
return (function (seq8673){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8673));
});})(g__8534__auto___8748))
;


var g__8534__auto___8752 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__8534__auto___8752){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8753 = arguments.length;
var i__8376__auto___8754 = (0);
while(true){
if((i__8376__auto___8754 < len__8375__auto___8753)){
args__8382__auto__.push((arguments[i__8376__auto___8754]));

var G__8755 = (i__8376__auto___8754 + (1));
i__8376__auto___8754 = G__8755;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8752))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8752){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8752);
});})(g__8534__auto___8752))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__8534__auto___8752){
return (function (seq8674){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8674));
});})(g__8534__auto___8752))
;


var g__8534__auto___8756 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__8534__auto___8756){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8757 = arguments.length;
var i__8376__auto___8758 = (0);
while(true){
if((i__8376__auto___8758 < len__8375__auto___8757)){
args__8382__auto__.push((arguments[i__8376__auto___8758]));

var G__8759 = (i__8376__auto___8758 + (1));
i__8376__auto___8758 = G__8759;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});})(g__8534__auto___8756))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8534__auto___8756){
return (function (args){
return cljs.core.deref.call(null,g__8534__auto___8756);
});})(g__8534__auto___8756))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__8534__auto___8756){
return (function (seq8675){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8675));
});})(g__8534__auto___8756))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__8382__auto__ = [];
var len__8375__auto___8762 = arguments.length;
var i__8376__auto___8763 = (0);
while(true){
if((i__8376__auto___8763 < len__8375__auto___8762)){
args__8382__auto__.push((arguments[i__8376__auto___8763]));

var G__8764 = (i__8376__auto___8763 + (1));
i__8376__auto___8763 = G__8764;
continue;
} else {
}
break;
}

var argseq__8383__auto__ = ((((0) < args__8382__auto__.length))?(new cljs.core.IndexedSeq(args__8382__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8383__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__8760_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8760_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq8761){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8761));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__8765_SHARP_){
return (new Date(p1__8765_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map