// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
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

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3519__auto__,writer__3520__auto__,opt__3521__auto__){
return cljs.core._write.call(null,writer__3520__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5586 = arguments.length;
var i__3830__auto___5587 = (0);
while(true){
if((i__3830__auto___5587 < len__3829__auto___5586)){
args__3832__auto__.push((arguments[i__3830__auto___5587]));

var G__5588 = (i__3830__auto___5587 + (1));
i__3830__auto___5587 = G__5588;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq5585){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5585));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5590 = arguments.length;
var i__3830__auto___5591 = (0);
while(true){
if((i__3830__auto___5591 < len__3829__auto___5590)){
args__3832__auto__.push((arguments[i__3830__auto___5591]));

var G__5592 = (i__3830__auto___5591 + (1));
i__3830__auto___5591 = G__5592;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq5589){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5589));
});

var g_QMARK__5593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_5594 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__5593){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__5593))
,null));
var mkg_5595 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__5593,g_5594){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__5593,g_5594))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__5593,g_5594,mkg_5595){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__5593).call(null,x);
});})(g_QMARK__5593,g_5594,mkg_5595))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__5593,g_5594,mkg_5595){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_5595).call(null,gfn);
});})(g_QMARK__5593,g_5594,mkg_5595))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__5593,g_5594,mkg_5595){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_5594).call(null,generator);
});})(g_QMARK__5593,g_5594,mkg_5595))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__6095__auto___5614 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__6095__auto___5614){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5615 = arguments.length;
var i__3830__auto___5616 = (0);
while(true){
if((i__3830__auto___5616 < len__3829__auto___5615)){
args__3832__auto__.push((arguments[i__3830__auto___5616]));

var G__5617 = (i__3830__auto___5616 + (1));
i__3830__auto___5616 = G__5617;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5614))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5614){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5614),args);
});})(g__6095__auto___5614))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__6095__auto___5614){
return (function (seq5596){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5596));
});})(g__6095__auto___5614))
;


var g__6095__auto___5618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__6095__auto___5618){
return (function cljs$spec$impl$gen$list(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5619 = arguments.length;
var i__3830__auto___5620 = (0);
while(true){
if((i__3830__auto___5620 < len__3829__auto___5619)){
args__3832__auto__.push((arguments[i__3830__auto___5620]));

var G__5621 = (i__3830__auto___5620 + (1));
i__3830__auto___5620 = G__5621;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5618))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5618){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5618),args);
});})(g__6095__auto___5618))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__6095__auto___5618){
return (function (seq5597){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5597));
});})(g__6095__auto___5618))
;


var g__6095__auto___5622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__6095__auto___5622){
return (function cljs$spec$impl$gen$map(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5623 = arguments.length;
var i__3830__auto___5624 = (0);
while(true){
if((i__3830__auto___5624 < len__3829__auto___5623)){
args__3832__auto__.push((arguments[i__3830__auto___5624]));

var G__5625 = (i__3830__auto___5624 + (1));
i__3830__auto___5624 = G__5625;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5622))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5622){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5622),args);
});})(g__6095__auto___5622))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__6095__auto___5622){
return (function (seq5598){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5598));
});})(g__6095__auto___5622))
;


var g__6095__auto___5626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__6095__auto___5626){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5627 = arguments.length;
var i__3830__auto___5628 = (0);
while(true){
if((i__3830__auto___5628 < len__3829__auto___5627)){
args__3832__auto__.push((arguments[i__3830__auto___5628]));

var G__5629 = (i__3830__auto___5628 + (1));
i__3830__auto___5628 = G__5629;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5626))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5626){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5626),args);
});})(g__6095__auto___5626))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__6095__auto___5626){
return (function (seq5599){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5599));
});})(g__6095__auto___5626))
;


var g__6095__auto___5630 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__6095__auto___5630){
return (function cljs$spec$impl$gen$set(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5631 = arguments.length;
var i__3830__auto___5632 = (0);
while(true){
if((i__3830__auto___5632 < len__3829__auto___5631)){
args__3832__auto__.push((arguments[i__3830__auto___5632]));

var G__5633 = (i__3830__auto___5632 + (1));
i__3830__auto___5632 = G__5633;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5630))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5630){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5630),args);
});})(g__6095__auto___5630))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__6095__auto___5630){
return (function (seq5600){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5600));
});})(g__6095__auto___5630))
;


var g__6095__auto___5634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__6095__auto___5634){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5635 = arguments.length;
var i__3830__auto___5636 = (0);
while(true){
if((i__3830__auto___5636 < len__3829__auto___5635)){
args__3832__auto__.push((arguments[i__3830__auto___5636]));

var G__5637 = (i__3830__auto___5636 + (1));
i__3830__auto___5636 = G__5637;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5634))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5634){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5634),args);
});})(g__6095__auto___5634))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__6095__auto___5634){
return (function (seq5601){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5601));
});})(g__6095__auto___5634))
;


var g__6095__auto___5638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__6095__auto___5638){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5639 = arguments.length;
var i__3830__auto___5640 = (0);
while(true){
if((i__3830__auto___5640 < len__3829__auto___5639)){
args__3832__auto__.push((arguments[i__3830__auto___5640]));

var G__5641 = (i__3830__auto___5640 + (1));
i__3830__auto___5640 = G__5641;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5638))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5638){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5638),args);
});})(g__6095__auto___5638))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__6095__auto___5638){
return (function (seq5602){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5602));
});})(g__6095__auto___5638))
;


var g__6095__auto___5642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__6095__auto___5642){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5643 = arguments.length;
var i__3830__auto___5644 = (0);
while(true){
if((i__3830__auto___5644 < len__3829__auto___5643)){
args__3832__auto__.push((arguments[i__3830__auto___5644]));

var G__5645 = (i__3830__auto___5644 + (1));
i__3830__auto___5644 = G__5645;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5642))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5642),args);
});})(g__6095__auto___5642))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__6095__auto___5642){
return (function (seq5603){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5603));
});})(g__6095__auto___5642))
;


var g__6095__auto___5646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__6095__auto___5646){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5647 = arguments.length;
var i__3830__auto___5648 = (0);
while(true){
if((i__3830__auto___5648 < len__3829__auto___5647)){
args__3832__auto__.push((arguments[i__3830__auto___5648]));

var G__5649 = (i__3830__auto___5648 + (1));
i__3830__auto___5648 = G__5649;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5646))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5646),args);
});})(g__6095__auto___5646))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__6095__auto___5646){
return (function (seq5604){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5604));
});})(g__6095__auto___5646))
;


var g__6095__auto___5650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__6095__auto___5650){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5651 = arguments.length;
var i__3830__auto___5652 = (0);
while(true){
if((i__3830__auto___5652 < len__3829__auto___5651)){
args__3832__auto__.push((arguments[i__3830__auto___5652]));

var G__5653 = (i__3830__auto___5652 + (1));
i__3830__auto___5652 = G__5653;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5650))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5650),args);
});})(g__6095__auto___5650))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__6095__auto___5650){
return (function (seq5605){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5605));
});})(g__6095__auto___5650))
;


var g__6095__auto___5654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__6095__auto___5654){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5655 = arguments.length;
var i__3830__auto___5656 = (0);
while(true){
if((i__3830__auto___5656 < len__3829__auto___5655)){
args__3832__auto__.push((arguments[i__3830__auto___5656]));

var G__5657 = (i__3830__auto___5656 + (1));
i__3830__auto___5656 = G__5657;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5654))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5654),args);
});})(g__6095__auto___5654))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__6095__auto___5654){
return (function (seq5606){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5606));
});})(g__6095__auto___5654))
;


var g__6095__auto___5658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__6095__auto___5658){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5659 = arguments.length;
var i__3830__auto___5660 = (0);
while(true){
if((i__3830__auto___5660 < len__3829__auto___5659)){
args__3832__auto__.push((arguments[i__3830__auto___5660]));

var G__5661 = (i__3830__auto___5660 + (1));
i__3830__auto___5660 = G__5661;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5658))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5658),args);
});})(g__6095__auto___5658))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__6095__auto___5658){
return (function (seq5607){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5607));
});})(g__6095__auto___5658))
;


var g__6095__auto___5662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__6095__auto___5662){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5663 = arguments.length;
var i__3830__auto___5664 = (0);
while(true){
if((i__3830__auto___5664 < len__3829__auto___5663)){
args__3832__auto__.push((arguments[i__3830__auto___5664]));

var G__5665 = (i__3830__auto___5664 + (1));
i__3830__auto___5664 = G__5665;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5662))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5662),args);
});})(g__6095__auto___5662))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__6095__auto___5662){
return (function (seq5608){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5608));
});})(g__6095__auto___5662))
;


var g__6095__auto___5666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__6095__auto___5666){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5667 = arguments.length;
var i__3830__auto___5668 = (0);
while(true){
if((i__3830__auto___5668 < len__3829__auto___5667)){
args__3832__auto__.push((arguments[i__3830__auto___5668]));

var G__5669 = (i__3830__auto___5668 + (1));
i__3830__auto___5668 = G__5669;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5666))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5666),args);
});})(g__6095__auto___5666))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__6095__auto___5666){
return (function (seq5609){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5609));
});})(g__6095__auto___5666))
;


var g__6095__auto___5670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__6095__auto___5670){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5671 = arguments.length;
var i__3830__auto___5672 = (0);
while(true){
if((i__3830__auto___5672 < len__3829__auto___5671)){
args__3832__auto__.push((arguments[i__3830__auto___5672]));

var G__5673 = (i__3830__auto___5672 + (1));
i__3830__auto___5672 = G__5673;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5670))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5670),args);
});})(g__6095__auto___5670))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__6095__auto___5670){
return (function (seq5610){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5610));
});})(g__6095__auto___5670))
;


var g__6095__auto___5674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__6095__auto___5674){
return (function cljs$spec$impl$gen$return(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5675 = arguments.length;
var i__3830__auto___5676 = (0);
while(true){
if((i__3830__auto___5676 < len__3829__auto___5675)){
args__3832__auto__.push((arguments[i__3830__auto___5676]));

var G__5677 = (i__3830__auto___5676 + (1));
i__3830__auto___5676 = G__5677;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5674))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5674),args);
});})(g__6095__auto___5674))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__6095__auto___5674){
return (function (seq5611){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5611));
});})(g__6095__auto___5674))
;


var g__6095__auto___5678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__6095__auto___5678){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5679 = arguments.length;
var i__3830__auto___5680 = (0);
while(true){
if((i__3830__auto___5680 < len__3829__auto___5679)){
args__3832__auto__.push((arguments[i__3830__auto___5680]));

var G__5681 = (i__3830__auto___5680 + (1));
i__3830__auto___5680 = G__5681;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5678))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5678),args);
});})(g__6095__auto___5678))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__6095__auto___5678){
return (function (seq5612){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5612));
});})(g__6095__auto___5678))
;


var g__6095__auto___5682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__6095__auto___5682){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5683 = arguments.length;
var i__3830__auto___5684 = (0);
while(true){
if((i__3830__auto___5684 < len__3829__auto___5683)){
args__3832__auto__.push((arguments[i__3830__auto___5684]));

var G__5685 = (i__3830__auto___5684 + (1));
i__3830__auto___5684 = G__5685;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6095__auto___5682))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6095__auto___5682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6095__auto___5682),args);
});})(g__6095__auto___5682))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__6095__auto___5682){
return (function (seq5613){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5613));
});})(g__6095__auto___5682))
;

var g__6100__auto___5707 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__6100__auto___5707){
return (function cljs$spec$impl$gen$any(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5708 = arguments.length;
var i__3830__auto___5709 = (0);
while(true){
if((i__3830__auto___5709 < len__3829__auto___5708)){
args__3832__auto__.push((arguments[i__3830__auto___5709]));

var G__5710 = (i__3830__auto___5709 + (1));
i__3830__auto___5709 = G__5710;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5707))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5707){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5707);
});})(g__6100__auto___5707))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__6100__auto___5707){
return (function (seq5686){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5686));
});})(g__6100__auto___5707))
;


var g__6100__auto___5711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__6100__auto___5711){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5712 = arguments.length;
var i__3830__auto___5713 = (0);
while(true){
if((i__3830__auto___5713 < len__3829__auto___5712)){
args__3832__auto__.push((arguments[i__3830__auto___5713]));

var G__5714 = (i__3830__auto___5713 + (1));
i__3830__auto___5713 = G__5714;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5711))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5711){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5711);
});})(g__6100__auto___5711))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__6100__auto___5711){
return (function (seq5687){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5687));
});})(g__6100__auto___5711))
;


var g__6100__auto___5715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__6100__auto___5715){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5716 = arguments.length;
var i__3830__auto___5717 = (0);
while(true){
if((i__3830__auto___5717 < len__3829__auto___5716)){
args__3832__auto__.push((arguments[i__3830__auto___5717]));

var G__5718 = (i__3830__auto___5717 + (1));
i__3830__auto___5717 = G__5718;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5715))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5715){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5715);
});})(g__6100__auto___5715))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__6100__auto___5715){
return (function (seq5688){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5688));
});})(g__6100__auto___5715))
;


var g__6100__auto___5719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__6100__auto___5719){
return (function cljs$spec$impl$gen$char(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5720 = arguments.length;
var i__3830__auto___5721 = (0);
while(true){
if((i__3830__auto___5721 < len__3829__auto___5720)){
args__3832__auto__.push((arguments[i__3830__auto___5721]));

var G__5722 = (i__3830__auto___5721 + (1));
i__3830__auto___5721 = G__5722;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5719))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5719){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5719);
});})(g__6100__auto___5719))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__6100__auto___5719){
return (function (seq5689){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5689));
});})(g__6100__auto___5719))
;


var g__6100__auto___5723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__6100__auto___5723){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5724 = arguments.length;
var i__3830__auto___5725 = (0);
while(true){
if((i__3830__auto___5725 < len__3829__auto___5724)){
args__3832__auto__.push((arguments[i__3830__auto___5725]));

var G__5726 = (i__3830__auto___5725 + (1));
i__3830__auto___5725 = G__5726;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5723))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5723){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5723);
});})(g__6100__auto___5723))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__6100__auto___5723){
return (function (seq5690){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5690));
});})(g__6100__auto___5723))
;


var g__6100__auto___5727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__6100__auto___5727){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5728 = arguments.length;
var i__3830__auto___5729 = (0);
while(true){
if((i__3830__auto___5729 < len__3829__auto___5728)){
args__3832__auto__.push((arguments[i__3830__auto___5729]));

var G__5730 = (i__3830__auto___5729 + (1));
i__3830__auto___5729 = G__5730;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5727))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5727){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5727);
});})(g__6100__auto___5727))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__6100__auto___5727){
return (function (seq5691){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5691));
});})(g__6100__auto___5727))
;


var g__6100__auto___5731 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__6100__auto___5731){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5732 = arguments.length;
var i__3830__auto___5733 = (0);
while(true){
if((i__3830__auto___5733 < len__3829__auto___5732)){
args__3832__auto__.push((arguments[i__3830__auto___5733]));

var G__5734 = (i__3830__auto___5733 + (1));
i__3830__auto___5733 = G__5734;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5731))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5731){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5731);
});})(g__6100__auto___5731))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__6100__auto___5731){
return (function (seq5692){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5692));
});})(g__6100__auto___5731))
;


var g__6100__auto___5735 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__6100__auto___5735){
return (function cljs$spec$impl$gen$double(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5736 = arguments.length;
var i__3830__auto___5737 = (0);
while(true){
if((i__3830__auto___5737 < len__3829__auto___5736)){
args__3832__auto__.push((arguments[i__3830__auto___5737]));

var G__5738 = (i__3830__auto___5737 + (1));
i__3830__auto___5737 = G__5738;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5735))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5735){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5735);
});})(g__6100__auto___5735))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__6100__auto___5735){
return (function (seq5693){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5693));
});})(g__6100__auto___5735))
;


var g__6100__auto___5739 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__6100__auto___5739){
return (function cljs$spec$impl$gen$int(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5740 = arguments.length;
var i__3830__auto___5741 = (0);
while(true){
if((i__3830__auto___5741 < len__3829__auto___5740)){
args__3832__auto__.push((arguments[i__3830__auto___5741]));

var G__5742 = (i__3830__auto___5741 + (1));
i__3830__auto___5741 = G__5742;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5739))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5739){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5739);
});})(g__6100__auto___5739))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__6100__auto___5739){
return (function (seq5694){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5694));
});})(g__6100__auto___5739))
;


var g__6100__auto___5743 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__6100__auto___5743){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5744 = arguments.length;
var i__3830__auto___5745 = (0);
while(true){
if((i__3830__auto___5745 < len__3829__auto___5744)){
args__3832__auto__.push((arguments[i__3830__auto___5745]));

var G__5746 = (i__3830__auto___5745 + (1));
i__3830__auto___5745 = G__5746;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5743))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5743){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5743);
});})(g__6100__auto___5743))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__6100__auto___5743){
return (function (seq5695){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5695));
});})(g__6100__auto___5743))
;


var g__6100__auto___5747 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__6100__auto___5747){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5748 = arguments.length;
var i__3830__auto___5749 = (0);
while(true){
if((i__3830__auto___5749 < len__3829__auto___5748)){
args__3832__auto__.push((arguments[i__3830__auto___5749]));

var G__5750 = (i__3830__auto___5749 + (1));
i__3830__auto___5749 = G__5750;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5747))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5747){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5747);
});})(g__6100__auto___5747))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__6100__auto___5747){
return (function (seq5696){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5696));
});})(g__6100__auto___5747))
;


var g__6100__auto___5751 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__6100__auto___5751){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5752 = arguments.length;
var i__3830__auto___5753 = (0);
while(true){
if((i__3830__auto___5753 < len__3829__auto___5752)){
args__3832__auto__.push((arguments[i__3830__auto___5753]));

var G__5754 = (i__3830__auto___5753 + (1));
i__3830__auto___5753 = G__5754;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5751))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5751){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5751);
});})(g__6100__auto___5751))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__6100__auto___5751){
return (function (seq5697){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5697));
});})(g__6100__auto___5751))
;


var g__6100__auto___5755 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__6100__auto___5755){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5756 = arguments.length;
var i__3830__auto___5757 = (0);
while(true){
if((i__3830__auto___5757 < len__3829__auto___5756)){
args__3832__auto__.push((arguments[i__3830__auto___5757]));

var G__5758 = (i__3830__auto___5757 + (1));
i__3830__auto___5757 = G__5758;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5755))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5755){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5755);
});})(g__6100__auto___5755))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__6100__auto___5755){
return (function (seq5698){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5698));
});})(g__6100__auto___5755))
;


var g__6100__auto___5759 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__6100__auto___5759){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5760 = arguments.length;
var i__3830__auto___5761 = (0);
while(true){
if((i__3830__auto___5761 < len__3829__auto___5760)){
args__3832__auto__.push((arguments[i__3830__auto___5761]));

var G__5762 = (i__3830__auto___5761 + (1));
i__3830__auto___5761 = G__5762;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5759))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5759){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5759);
});})(g__6100__auto___5759))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__6100__auto___5759){
return (function (seq5699){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5699));
});})(g__6100__auto___5759))
;


var g__6100__auto___5763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__6100__auto___5763){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5764 = arguments.length;
var i__3830__auto___5765 = (0);
while(true){
if((i__3830__auto___5765 < len__3829__auto___5764)){
args__3832__auto__.push((arguments[i__3830__auto___5765]));

var G__5766 = (i__3830__auto___5765 + (1));
i__3830__auto___5765 = G__5766;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5763))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5763){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5763);
});})(g__6100__auto___5763))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__6100__auto___5763){
return (function (seq5700){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5700));
});})(g__6100__auto___5763))
;


var g__6100__auto___5767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__6100__auto___5767){
return (function cljs$spec$impl$gen$string(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5768 = arguments.length;
var i__3830__auto___5769 = (0);
while(true){
if((i__3830__auto___5769 < len__3829__auto___5768)){
args__3832__auto__.push((arguments[i__3830__auto___5769]));

var G__5770 = (i__3830__auto___5769 + (1));
i__3830__auto___5769 = G__5770;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5767))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5767){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5767);
});})(g__6100__auto___5767))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__6100__auto___5767){
return (function (seq5701){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5701));
});})(g__6100__auto___5767))
;


var g__6100__auto___5771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__6100__auto___5771){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5772 = arguments.length;
var i__3830__auto___5773 = (0);
while(true){
if((i__3830__auto___5773 < len__3829__auto___5772)){
args__3832__auto__.push((arguments[i__3830__auto___5773]));

var G__5774 = (i__3830__auto___5773 + (1));
i__3830__auto___5773 = G__5774;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5771))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5771){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5771);
});})(g__6100__auto___5771))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__6100__auto___5771){
return (function (seq5702){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5702));
});})(g__6100__auto___5771))
;


var g__6100__auto___5775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__6100__auto___5775){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5776 = arguments.length;
var i__3830__auto___5777 = (0);
while(true){
if((i__3830__auto___5777 < len__3829__auto___5776)){
args__3832__auto__.push((arguments[i__3830__auto___5777]));

var G__5778 = (i__3830__auto___5777 + (1));
i__3830__auto___5777 = G__5778;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5775))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5775){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5775);
});})(g__6100__auto___5775))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__6100__auto___5775){
return (function (seq5703){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5703));
});})(g__6100__auto___5775))
;


var g__6100__auto___5779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__6100__auto___5779){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5780 = arguments.length;
var i__3830__auto___5781 = (0);
while(true){
if((i__3830__auto___5781 < len__3829__auto___5780)){
args__3832__auto__.push((arguments[i__3830__auto___5781]));

var G__5782 = (i__3830__auto___5781 + (1));
i__3830__auto___5781 = G__5782;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5779))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5779){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5779);
});})(g__6100__auto___5779))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__6100__auto___5779){
return (function (seq5704){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5704));
});})(g__6100__auto___5779))
;


var g__6100__auto___5783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__6100__auto___5783){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5784 = arguments.length;
var i__3830__auto___5785 = (0);
while(true){
if((i__3830__auto___5785 < len__3829__auto___5784)){
args__3832__auto__.push((arguments[i__3830__auto___5785]));

var G__5786 = (i__3830__auto___5785 + (1));
i__3830__auto___5785 = G__5786;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5783))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5783){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5783);
});})(g__6100__auto___5783))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__6100__auto___5783){
return (function (seq5705){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5705));
});})(g__6100__auto___5783))
;


var g__6100__auto___5787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__6100__auto___5787){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5788 = arguments.length;
var i__3830__auto___5789 = (0);
while(true){
if((i__3830__auto___5789 < len__3829__auto___5788)){
args__3832__auto__.push((arguments[i__3830__auto___5789]));

var G__5790 = (i__3830__auto___5789 + (1));
i__3830__auto___5789 = G__5790;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});})(g__6100__auto___5787))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6100__auto___5787){
return (function (args){
return cljs.core.deref.call(null,g__6100__auto___5787);
});})(g__6100__auto___5787))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__6100__auto___5787){
return (function (seq5706){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5706));
});})(g__6100__auto___5787))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3832__auto__ = [];
var len__3829__auto___5793 = arguments.length;
var i__3830__auto___5794 = (0);
while(true){
if((i__3830__auto___5794 < len__3829__auto___5793)){
args__3832__auto__.push((arguments[i__3830__auto___5794]));

var G__5795 = (i__3830__auto___5794 + (1));
i__3830__auto___5794 = G__5795;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__5791_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__5791_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq5792){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5792));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__5796_SHARP_){
return (new Date(p1__5796_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});
