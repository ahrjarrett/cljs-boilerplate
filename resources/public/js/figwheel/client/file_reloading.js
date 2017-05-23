// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26427__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26427__auto__){
return or__26427__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26427__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26427__auto__)){
return or__26427__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33354_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33354_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33359 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33360 = null;
var count__33361 = (0);
var i__33362 = (0);
while(true){
if((i__33362 < count__33361)){
var n = cljs.core._nth.call(null,chunk__33360,i__33362);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33363 = seq__33359;
var G__33364 = chunk__33360;
var G__33365 = count__33361;
var G__33366 = (i__33362 + (1));
seq__33359 = G__33363;
chunk__33360 = G__33364;
count__33361 = G__33365;
i__33362 = G__33366;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33359);
if(temp__4657__auto__){
var seq__33359__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33359__$1)){
var c__27246__auto__ = cljs.core.chunk_first.call(null,seq__33359__$1);
var G__33367 = cljs.core.chunk_rest.call(null,seq__33359__$1);
var G__33368 = c__27246__auto__;
var G__33369 = cljs.core.count.call(null,c__27246__auto__);
var G__33370 = (0);
seq__33359 = G__33367;
chunk__33360 = G__33368;
count__33361 = G__33369;
i__33362 = G__33370;
continue;
} else {
var n = cljs.core.first.call(null,seq__33359__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33371 = cljs.core.next.call(null,seq__33359__$1);
var G__33372 = null;
var G__33373 = (0);
var G__33374 = (0);
seq__33359 = G__33371;
chunk__33360 = G__33372;
count__33361 = G__33373;
i__33362 = G__33374;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33425_33436 = cljs.core.seq.call(null,deps);
var chunk__33426_33437 = null;
var count__33427_33438 = (0);
var i__33428_33439 = (0);
while(true){
if((i__33428_33439 < count__33427_33438)){
var dep_33440 = cljs.core._nth.call(null,chunk__33426_33437,i__33428_33439);
topo_sort_helper_STAR_.call(null,dep_33440,(depth + (1)),state);

var G__33441 = seq__33425_33436;
var G__33442 = chunk__33426_33437;
var G__33443 = count__33427_33438;
var G__33444 = (i__33428_33439 + (1));
seq__33425_33436 = G__33441;
chunk__33426_33437 = G__33442;
count__33427_33438 = G__33443;
i__33428_33439 = G__33444;
continue;
} else {
var temp__4657__auto___33445 = cljs.core.seq.call(null,seq__33425_33436);
if(temp__4657__auto___33445){
var seq__33425_33446__$1 = temp__4657__auto___33445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33425_33446__$1)){
var c__27246__auto___33447 = cljs.core.chunk_first.call(null,seq__33425_33446__$1);
var G__33448 = cljs.core.chunk_rest.call(null,seq__33425_33446__$1);
var G__33449 = c__27246__auto___33447;
var G__33450 = cljs.core.count.call(null,c__27246__auto___33447);
var G__33451 = (0);
seq__33425_33436 = G__33448;
chunk__33426_33437 = G__33449;
count__33427_33438 = G__33450;
i__33428_33439 = G__33451;
continue;
} else {
var dep_33452 = cljs.core.first.call(null,seq__33425_33446__$1);
topo_sort_helper_STAR_.call(null,dep_33452,(depth + (1)),state);

var G__33453 = cljs.core.next.call(null,seq__33425_33446__$1);
var G__33454 = null;
var G__33455 = (0);
var G__33456 = (0);
seq__33425_33436 = G__33453;
chunk__33426_33437 = G__33454;
count__33427_33438 = G__33455;
i__33428_33439 = G__33456;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33429){
var vec__33433 = p__33429;
var seq__33434 = cljs.core.seq.call(null,vec__33433);
var first__33435 = cljs.core.first.call(null,seq__33434);
var seq__33434__$1 = cljs.core.next.call(null,seq__33434);
var x = first__33435;
var xs = seq__33434__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33433,seq__33434,first__33435,seq__33434__$1,x,xs,get_deps__$1){
return (function (p1__33375_SHARP_){
return clojure.set.difference.call(null,p1__33375_SHARP_,x);
});})(vec__33433,seq__33434,first__33435,seq__33434__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33469 = cljs.core.seq.call(null,provides);
var chunk__33470 = null;
var count__33471 = (0);
var i__33472 = (0);
while(true){
if((i__33472 < count__33471)){
var prov = cljs.core._nth.call(null,chunk__33470,i__33472);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33473_33481 = cljs.core.seq.call(null,requires);
var chunk__33474_33482 = null;
var count__33475_33483 = (0);
var i__33476_33484 = (0);
while(true){
if((i__33476_33484 < count__33475_33483)){
var req_33485 = cljs.core._nth.call(null,chunk__33474_33482,i__33476_33484);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33485,prov);

var G__33486 = seq__33473_33481;
var G__33487 = chunk__33474_33482;
var G__33488 = count__33475_33483;
var G__33489 = (i__33476_33484 + (1));
seq__33473_33481 = G__33486;
chunk__33474_33482 = G__33487;
count__33475_33483 = G__33488;
i__33476_33484 = G__33489;
continue;
} else {
var temp__4657__auto___33490 = cljs.core.seq.call(null,seq__33473_33481);
if(temp__4657__auto___33490){
var seq__33473_33491__$1 = temp__4657__auto___33490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33473_33491__$1)){
var c__27246__auto___33492 = cljs.core.chunk_first.call(null,seq__33473_33491__$1);
var G__33493 = cljs.core.chunk_rest.call(null,seq__33473_33491__$1);
var G__33494 = c__27246__auto___33492;
var G__33495 = cljs.core.count.call(null,c__27246__auto___33492);
var G__33496 = (0);
seq__33473_33481 = G__33493;
chunk__33474_33482 = G__33494;
count__33475_33483 = G__33495;
i__33476_33484 = G__33496;
continue;
} else {
var req_33497 = cljs.core.first.call(null,seq__33473_33491__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33497,prov);

var G__33498 = cljs.core.next.call(null,seq__33473_33491__$1);
var G__33499 = null;
var G__33500 = (0);
var G__33501 = (0);
seq__33473_33481 = G__33498;
chunk__33474_33482 = G__33499;
count__33475_33483 = G__33500;
i__33476_33484 = G__33501;
continue;
}
} else {
}
}
break;
}

var G__33502 = seq__33469;
var G__33503 = chunk__33470;
var G__33504 = count__33471;
var G__33505 = (i__33472 + (1));
seq__33469 = G__33502;
chunk__33470 = G__33503;
count__33471 = G__33504;
i__33472 = G__33505;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33469);
if(temp__4657__auto__){
var seq__33469__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33469__$1)){
var c__27246__auto__ = cljs.core.chunk_first.call(null,seq__33469__$1);
var G__33506 = cljs.core.chunk_rest.call(null,seq__33469__$1);
var G__33507 = c__27246__auto__;
var G__33508 = cljs.core.count.call(null,c__27246__auto__);
var G__33509 = (0);
seq__33469 = G__33506;
chunk__33470 = G__33507;
count__33471 = G__33508;
i__33472 = G__33509;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33469__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33477_33510 = cljs.core.seq.call(null,requires);
var chunk__33478_33511 = null;
var count__33479_33512 = (0);
var i__33480_33513 = (0);
while(true){
if((i__33480_33513 < count__33479_33512)){
var req_33514 = cljs.core._nth.call(null,chunk__33478_33511,i__33480_33513);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33514,prov);

var G__33515 = seq__33477_33510;
var G__33516 = chunk__33478_33511;
var G__33517 = count__33479_33512;
var G__33518 = (i__33480_33513 + (1));
seq__33477_33510 = G__33515;
chunk__33478_33511 = G__33516;
count__33479_33512 = G__33517;
i__33480_33513 = G__33518;
continue;
} else {
var temp__4657__auto___33519__$1 = cljs.core.seq.call(null,seq__33477_33510);
if(temp__4657__auto___33519__$1){
var seq__33477_33520__$1 = temp__4657__auto___33519__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33477_33520__$1)){
var c__27246__auto___33521 = cljs.core.chunk_first.call(null,seq__33477_33520__$1);
var G__33522 = cljs.core.chunk_rest.call(null,seq__33477_33520__$1);
var G__33523 = c__27246__auto___33521;
var G__33524 = cljs.core.count.call(null,c__27246__auto___33521);
var G__33525 = (0);
seq__33477_33510 = G__33522;
chunk__33478_33511 = G__33523;
count__33479_33512 = G__33524;
i__33480_33513 = G__33525;
continue;
} else {
var req_33526 = cljs.core.first.call(null,seq__33477_33520__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33526,prov);

var G__33527 = cljs.core.next.call(null,seq__33477_33520__$1);
var G__33528 = null;
var G__33529 = (0);
var G__33530 = (0);
seq__33477_33510 = G__33527;
chunk__33478_33511 = G__33528;
count__33479_33512 = G__33529;
i__33480_33513 = G__33530;
continue;
}
} else {
}
}
break;
}

var G__33531 = cljs.core.next.call(null,seq__33469__$1);
var G__33532 = null;
var G__33533 = (0);
var G__33534 = (0);
seq__33469 = G__33531;
chunk__33470 = G__33532;
count__33471 = G__33533;
i__33472 = G__33534;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33539_33543 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33540_33544 = null;
var count__33541_33545 = (0);
var i__33542_33546 = (0);
while(true){
if((i__33542_33546 < count__33541_33545)){
var ns_33547 = cljs.core._nth.call(null,chunk__33540_33544,i__33542_33546);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33547);

var G__33548 = seq__33539_33543;
var G__33549 = chunk__33540_33544;
var G__33550 = count__33541_33545;
var G__33551 = (i__33542_33546 + (1));
seq__33539_33543 = G__33548;
chunk__33540_33544 = G__33549;
count__33541_33545 = G__33550;
i__33542_33546 = G__33551;
continue;
} else {
var temp__4657__auto___33552 = cljs.core.seq.call(null,seq__33539_33543);
if(temp__4657__auto___33552){
var seq__33539_33553__$1 = temp__4657__auto___33552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33539_33553__$1)){
var c__27246__auto___33554 = cljs.core.chunk_first.call(null,seq__33539_33553__$1);
var G__33555 = cljs.core.chunk_rest.call(null,seq__33539_33553__$1);
var G__33556 = c__27246__auto___33554;
var G__33557 = cljs.core.count.call(null,c__27246__auto___33554);
var G__33558 = (0);
seq__33539_33543 = G__33555;
chunk__33540_33544 = G__33556;
count__33541_33545 = G__33557;
i__33542_33546 = G__33558;
continue;
} else {
var ns_33559 = cljs.core.first.call(null,seq__33539_33553__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33559);

var G__33560 = cljs.core.next.call(null,seq__33539_33553__$1);
var G__33561 = null;
var G__33562 = (0);
var G__33563 = (0);
seq__33539_33543 = G__33560;
chunk__33540_33544 = G__33561;
count__33541_33545 = G__33562;
i__33542_33546 = G__33563;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26427__auto__ = goog.require__;
if(cljs.core.truth_(or__26427__auto__)){
return or__26427__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33564__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33565__i = 0, G__33565__a = new Array(arguments.length -  0);
while (G__33565__i < G__33565__a.length) {G__33565__a[G__33565__i] = arguments[G__33565__i + 0]; ++G__33565__i;}
  args = new cljs.core.IndexedSeq(G__33565__a,0,null);
} 
return G__33564__delegate.call(this,args);};
G__33564.cljs$lang$maxFixedArity = 0;
G__33564.cljs$lang$applyTo = (function (arglist__33566){
var args = cljs.core.seq(arglist__33566);
return G__33564__delegate(args);
});
G__33564.cljs$core$IFn$_invoke$arity$variadic = G__33564__delegate;
return G__33564;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33567 = cljs.core._EQ_;
var expr__33568 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33567.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33568))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33567,expr__33568){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33567,expr__33568))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33567,expr__33568){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33570){if((e33570 instanceof Error)){
var e = e33570;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33570;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33567,expr__33568))
} else {
if(cljs.core.truth_(pred__33567.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33568))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33567.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33568))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33567.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33568))){
return ((function (pred__33567,expr__33568){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33571){if((e33571 instanceof Error)){
var e = e33571;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33571;

}
}})());
});
;})(pred__33567,expr__33568))
} else {
return ((function (pred__33567,expr__33568){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33567,expr__33568))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33572,callback){
var map__33575 = p__33572;
var map__33575__$1 = ((((!((map__33575 == null)))?((((map__33575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33575):map__33575);
var file_msg = map__33575__$1;
var request_url = cljs.core.get.call(null,map__33575__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33575,map__33575__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33575,map__33575__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__){
return (function (state_33599){
var state_val_33600 = (state_33599[(1)]);
if((state_val_33600 === (7))){
var inst_33595 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33601_33621 = state_33599__$1;
(statearr_33601_33621[(2)] = inst_33595);

(statearr_33601_33621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (1))){
var state_33599__$1 = state_33599;
var statearr_33602_33622 = state_33599__$1;
(statearr_33602_33622[(2)] = null);

(statearr_33602_33622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (4))){
var inst_33579 = (state_33599[(7)]);
var inst_33579__$1 = (state_33599[(2)]);
var state_33599__$1 = (function (){var statearr_33603 = state_33599;
(statearr_33603[(7)] = inst_33579__$1);

return statearr_33603;
})();
if(cljs.core.truth_(inst_33579__$1)){
var statearr_33604_33623 = state_33599__$1;
(statearr_33604_33623[(1)] = (5));

} else {
var statearr_33605_33624 = state_33599__$1;
(statearr_33605_33624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (6))){
var state_33599__$1 = state_33599;
var statearr_33606_33625 = state_33599__$1;
(statearr_33606_33625[(2)] = null);

(statearr_33606_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (3))){
var inst_33597 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33599__$1,inst_33597);
} else {
if((state_val_33600 === (2))){
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33599__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33600 === (11))){
var inst_33591 = (state_33599[(2)]);
var state_33599__$1 = (function (){var statearr_33607 = state_33599;
(statearr_33607[(8)] = inst_33591);

return statearr_33607;
})();
var statearr_33608_33626 = state_33599__$1;
(statearr_33608_33626[(2)] = null);

(statearr_33608_33626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (9))){
var inst_33583 = (state_33599[(9)]);
var inst_33585 = (state_33599[(10)]);
var inst_33587 = inst_33585.call(null,inst_33583);
var state_33599__$1 = state_33599;
var statearr_33609_33627 = state_33599__$1;
(statearr_33609_33627[(2)] = inst_33587);

(statearr_33609_33627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (5))){
var inst_33579 = (state_33599[(7)]);
var inst_33581 = figwheel.client.file_reloading.blocking_load.call(null,inst_33579);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33599__$1,(8),inst_33581);
} else {
if((state_val_33600 === (10))){
var inst_33583 = (state_33599[(9)]);
var inst_33589 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33583);
var state_33599__$1 = state_33599;
var statearr_33610_33628 = state_33599__$1;
(statearr_33610_33628[(2)] = inst_33589);

(statearr_33610_33628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (8))){
var inst_33579 = (state_33599[(7)]);
var inst_33585 = (state_33599[(10)]);
var inst_33583 = (state_33599[(2)]);
var inst_33584 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33585__$1 = cljs.core.get.call(null,inst_33584,inst_33579);
var state_33599__$1 = (function (){var statearr_33611 = state_33599;
(statearr_33611[(9)] = inst_33583);

(statearr_33611[(10)] = inst_33585__$1);

return statearr_33611;
})();
if(cljs.core.truth_(inst_33585__$1)){
var statearr_33612_33629 = state_33599__$1;
(statearr_33612_33629[(1)] = (9));

} else {
var statearr_33613_33630 = state_33599__$1;
(statearr_33613_33630[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28638__auto__))
;
return ((function (switch__28526__auto__,c__28638__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28527__auto__ = null;
var figwheel$client$file_reloading$state_machine__28527__auto____0 = (function (){
var statearr_33617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33617[(0)] = figwheel$client$file_reloading$state_machine__28527__auto__);

(statearr_33617[(1)] = (1));

return statearr_33617;
});
var figwheel$client$file_reloading$state_machine__28527__auto____1 = (function (state_33599){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_33599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e33618){if((e33618 instanceof Object)){
var ex__28530__auto__ = e33618;
var statearr_33619_33631 = state_33599;
(statearr_33619_33631[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33632 = state_33599;
state_33599 = G__33632;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28527__auto__ = function(state_33599){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28527__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28527__auto____1.call(this,state_33599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28527__auto____0;
figwheel$client$file_reloading$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28527__auto____1;
return figwheel$client$file_reloading$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__))
})();
var state__28640__auto__ = (function (){var statearr_33620 = f__28639__auto__.call(null);
(statearr_33620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_33620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__))
);

return c__28638__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33633,callback){
var map__33636 = p__33633;
var map__33636__$1 = ((((!((map__33636 == null)))?((((map__33636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33636):map__33636);
var file_msg = map__33636__$1;
var namespace = cljs.core.get.call(null,map__33636__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33636,map__33636__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33636,map__33636__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33638){
var map__33641 = p__33638;
var map__33641__$1 = ((((!((map__33641 == null)))?((((map__33641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33641):map__33641);
var file_msg = map__33641__$1;
var namespace = cljs.core.get.call(null,map__33641__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33643){
var map__33646 = p__33643;
var map__33646__$1 = ((((!((map__33646 == null)))?((((map__33646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33646):map__33646);
var file_msg = map__33646__$1;
var namespace = cljs.core.get.call(null,map__33646__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26415__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26415__auto__){
var or__26427__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26427__auto__)){
return or__26427__auto__;
} else {
var or__26427__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26427__auto____$1)){
return or__26427__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26415__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33648,callback){
var map__33651 = p__33648;
var map__33651__$1 = ((((!((map__33651 == null)))?((((map__33651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33651):map__33651);
var file_msg = map__33651__$1;
var request_url = cljs.core.get.call(null,map__33651__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33651__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28638__auto___33755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___33755,out){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___33755,out){
return (function (state_33737){
var state_val_33738 = (state_33737[(1)]);
if((state_val_33738 === (1))){
var inst_33711 = cljs.core.seq.call(null,files);
var inst_33712 = cljs.core.first.call(null,inst_33711);
var inst_33713 = cljs.core.next.call(null,inst_33711);
var inst_33714 = files;
var state_33737__$1 = (function (){var statearr_33739 = state_33737;
(statearr_33739[(7)] = inst_33714);

(statearr_33739[(8)] = inst_33713);

(statearr_33739[(9)] = inst_33712);

return statearr_33739;
})();
var statearr_33740_33756 = state_33737__$1;
(statearr_33740_33756[(2)] = null);

(statearr_33740_33756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (2))){
var inst_33714 = (state_33737[(7)]);
var inst_33720 = (state_33737[(10)]);
var inst_33719 = cljs.core.seq.call(null,inst_33714);
var inst_33720__$1 = cljs.core.first.call(null,inst_33719);
var inst_33721 = cljs.core.next.call(null,inst_33719);
var inst_33722 = (inst_33720__$1 == null);
var inst_33723 = cljs.core.not.call(null,inst_33722);
var state_33737__$1 = (function (){var statearr_33741 = state_33737;
(statearr_33741[(11)] = inst_33721);

(statearr_33741[(10)] = inst_33720__$1);

return statearr_33741;
})();
if(inst_33723){
var statearr_33742_33757 = state_33737__$1;
(statearr_33742_33757[(1)] = (4));

} else {
var statearr_33743_33758 = state_33737__$1;
(statearr_33743_33758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (3))){
var inst_33735 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33737__$1,inst_33735);
} else {
if((state_val_33738 === (4))){
var inst_33720 = (state_33737[(10)]);
var inst_33725 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33720);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33737__$1,(7),inst_33725);
} else {
if((state_val_33738 === (5))){
var inst_33731 = cljs.core.async.close_BANG_.call(null,out);
var state_33737__$1 = state_33737;
var statearr_33744_33759 = state_33737__$1;
(statearr_33744_33759[(2)] = inst_33731);

(statearr_33744_33759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (6))){
var inst_33733 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33745_33760 = state_33737__$1;
(statearr_33745_33760[(2)] = inst_33733);

(statearr_33745_33760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (7))){
var inst_33721 = (state_33737[(11)]);
var inst_33727 = (state_33737[(2)]);
var inst_33728 = cljs.core.async.put_BANG_.call(null,out,inst_33727);
var inst_33714 = inst_33721;
var state_33737__$1 = (function (){var statearr_33746 = state_33737;
(statearr_33746[(7)] = inst_33714);

(statearr_33746[(12)] = inst_33728);

return statearr_33746;
})();
var statearr_33747_33761 = state_33737__$1;
(statearr_33747_33761[(2)] = null);

(statearr_33747_33761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28638__auto___33755,out))
;
return ((function (switch__28526__auto__,c__28638__auto___33755,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto____0 = (function (){
var statearr_33751 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33751[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto__);

(statearr_33751[(1)] = (1));

return statearr_33751;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto____1 = (function (state_33737){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_33737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e33752){if((e33752 instanceof Object)){
var ex__28530__auto__ = e33752;
var statearr_33753_33762 = state_33737;
(statearr_33753_33762[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33763 = state_33737;
state_33737 = G__33763;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto__ = function(state_33737){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto____1.call(this,state_33737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___33755,out))
})();
var state__28640__auto__ = (function (){var statearr_33754 = f__28639__auto__.call(null);
(statearr_33754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___33755);

return statearr_33754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___33755,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33764,opts){
var map__33768 = p__33764;
var map__33768__$1 = ((((!((map__33768 == null)))?((((map__33768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33768):map__33768);
var eval_body = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26415__auto__ = eval_body;
if(cljs.core.truth_(and__26415__auto__)){
return typeof eval_body === 'string';
} else {
return and__26415__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33770){var e = e33770;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33771_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33771_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33780){
var vec__33781 = p__33780;
var k = cljs.core.nth.call(null,vec__33781,(0),null);
var v = cljs.core.nth.call(null,vec__33781,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33784){
var vec__33785 = p__33784;
var k = cljs.core.nth.call(null,vec__33785,(0),null);
var v = cljs.core.nth.call(null,vec__33785,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33791,p__33792){
var map__34040 = p__33791;
var map__34040__$1 = ((((!((map__34040 == null)))?((((map__34040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34040):map__34040);
var opts = map__34040__$1;
var before_jsload = cljs.core.get.call(null,map__34040__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34040__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34040__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34041 = p__33792;
var map__34041__$1 = ((((!((map__34041 == null)))?((((map__34041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34041):map__34041);
var msg = map__34041__$1;
var files = cljs.core.get.call(null,map__34041__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34041__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34041__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34195){
var state_val_34196 = (state_34195[(1)]);
if((state_val_34196 === (7))){
var inst_34055 = (state_34195[(7)]);
var inst_34057 = (state_34195[(8)]);
var inst_34056 = (state_34195[(9)]);
var inst_34058 = (state_34195[(10)]);
var inst_34063 = cljs.core._nth.call(null,inst_34056,inst_34058);
var inst_34064 = figwheel.client.file_reloading.eval_body.call(null,inst_34063,opts);
var inst_34065 = (inst_34058 + (1));
var tmp34197 = inst_34055;
var tmp34198 = inst_34057;
var tmp34199 = inst_34056;
var inst_34055__$1 = tmp34197;
var inst_34056__$1 = tmp34199;
var inst_34057__$1 = tmp34198;
var inst_34058__$1 = inst_34065;
var state_34195__$1 = (function (){var statearr_34200 = state_34195;
(statearr_34200[(11)] = inst_34064);

(statearr_34200[(7)] = inst_34055__$1);

(statearr_34200[(8)] = inst_34057__$1);

(statearr_34200[(9)] = inst_34056__$1);

(statearr_34200[(10)] = inst_34058__$1);

return statearr_34200;
})();
var statearr_34201_34287 = state_34195__$1;
(statearr_34201_34287[(2)] = null);

(statearr_34201_34287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (20))){
var inst_34098 = (state_34195[(12)]);
var inst_34106 = figwheel.client.file_reloading.sort_files.call(null,inst_34098);
var state_34195__$1 = state_34195;
var statearr_34202_34288 = state_34195__$1;
(statearr_34202_34288[(2)] = inst_34106);

(statearr_34202_34288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (27))){
var state_34195__$1 = state_34195;
var statearr_34203_34289 = state_34195__$1;
(statearr_34203_34289[(2)] = null);

(statearr_34203_34289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (1))){
var inst_34047 = (state_34195[(13)]);
var inst_34044 = before_jsload.call(null,files);
var inst_34045 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34046 = (function (){return ((function (inst_34047,inst_34044,inst_34045,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33788_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33788_SHARP_);
});
;})(inst_34047,inst_34044,inst_34045,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34047__$1 = cljs.core.filter.call(null,inst_34046,files);
var inst_34048 = cljs.core.not_empty.call(null,inst_34047__$1);
var state_34195__$1 = (function (){var statearr_34204 = state_34195;
(statearr_34204[(13)] = inst_34047__$1);

(statearr_34204[(14)] = inst_34045);

(statearr_34204[(15)] = inst_34044);

return statearr_34204;
})();
if(cljs.core.truth_(inst_34048)){
var statearr_34205_34290 = state_34195__$1;
(statearr_34205_34290[(1)] = (2));

} else {
var statearr_34206_34291 = state_34195__$1;
(statearr_34206_34291[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (24))){
var state_34195__$1 = state_34195;
var statearr_34207_34292 = state_34195__$1;
(statearr_34207_34292[(2)] = null);

(statearr_34207_34292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (39))){
var inst_34148 = (state_34195[(16)]);
var state_34195__$1 = state_34195;
var statearr_34208_34293 = state_34195__$1;
(statearr_34208_34293[(2)] = inst_34148);

(statearr_34208_34293[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (46))){
var inst_34190 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34209_34294 = state_34195__$1;
(statearr_34209_34294[(2)] = inst_34190);

(statearr_34209_34294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (4))){
var inst_34092 = (state_34195[(2)]);
var inst_34093 = cljs.core.List.EMPTY;
var inst_34094 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34093);
var inst_34095 = (function (){return ((function (inst_34092,inst_34093,inst_34094,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33789_SHARP_){
var and__26415__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33789_SHARP_);
if(cljs.core.truth_(and__26415__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33789_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33789_SHARP_)));
} else {
return and__26415__auto__;
}
});
;})(inst_34092,inst_34093,inst_34094,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34096 = cljs.core.filter.call(null,inst_34095,files);
var inst_34097 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34098 = cljs.core.concat.call(null,inst_34096,inst_34097);
var state_34195__$1 = (function (){var statearr_34210 = state_34195;
(statearr_34210[(17)] = inst_34094);

(statearr_34210[(12)] = inst_34098);

(statearr_34210[(18)] = inst_34092);

return statearr_34210;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34211_34295 = state_34195__$1;
(statearr_34211_34295[(1)] = (16));

} else {
var statearr_34212_34296 = state_34195__$1;
(statearr_34212_34296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (15))){
var inst_34082 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34213_34297 = state_34195__$1;
(statearr_34213_34297[(2)] = inst_34082);

(statearr_34213_34297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (21))){
var inst_34108 = (state_34195[(19)]);
var inst_34108__$1 = (state_34195[(2)]);
var inst_34109 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34108__$1);
var state_34195__$1 = (function (){var statearr_34214 = state_34195;
(statearr_34214[(19)] = inst_34108__$1);

return statearr_34214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34195__$1,(22),inst_34109);
} else {
if((state_val_34196 === (31))){
var inst_34193 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34195__$1,inst_34193);
} else {
if((state_val_34196 === (32))){
var inst_34148 = (state_34195[(16)]);
var inst_34153 = inst_34148.cljs$lang$protocol_mask$partition0$;
var inst_34154 = (inst_34153 & (64));
var inst_34155 = inst_34148.cljs$core$ISeq$;
var inst_34156 = (cljs.core.PROTOCOL_SENTINEL === inst_34155);
var inst_34157 = (inst_34154) || (inst_34156);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34157)){
var statearr_34215_34298 = state_34195__$1;
(statearr_34215_34298[(1)] = (35));

} else {
var statearr_34216_34299 = state_34195__$1;
(statearr_34216_34299[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (40))){
var inst_34170 = (state_34195[(20)]);
var inst_34169 = (state_34195[(2)]);
var inst_34170__$1 = cljs.core.get.call(null,inst_34169,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34171 = cljs.core.get.call(null,inst_34169,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34172 = cljs.core.not_empty.call(null,inst_34170__$1);
var state_34195__$1 = (function (){var statearr_34217 = state_34195;
(statearr_34217[(20)] = inst_34170__$1);

(statearr_34217[(21)] = inst_34171);

return statearr_34217;
})();
if(cljs.core.truth_(inst_34172)){
var statearr_34218_34300 = state_34195__$1;
(statearr_34218_34300[(1)] = (41));

} else {
var statearr_34219_34301 = state_34195__$1;
(statearr_34219_34301[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (33))){
var state_34195__$1 = state_34195;
var statearr_34220_34302 = state_34195__$1;
(statearr_34220_34302[(2)] = false);

(statearr_34220_34302[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (13))){
var inst_34068 = (state_34195[(22)]);
var inst_34072 = cljs.core.chunk_first.call(null,inst_34068);
var inst_34073 = cljs.core.chunk_rest.call(null,inst_34068);
var inst_34074 = cljs.core.count.call(null,inst_34072);
var inst_34055 = inst_34073;
var inst_34056 = inst_34072;
var inst_34057 = inst_34074;
var inst_34058 = (0);
var state_34195__$1 = (function (){var statearr_34221 = state_34195;
(statearr_34221[(7)] = inst_34055);

(statearr_34221[(8)] = inst_34057);

(statearr_34221[(9)] = inst_34056);

(statearr_34221[(10)] = inst_34058);

return statearr_34221;
})();
var statearr_34222_34303 = state_34195__$1;
(statearr_34222_34303[(2)] = null);

(statearr_34222_34303[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (22))){
var inst_34111 = (state_34195[(23)]);
var inst_34116 = (state_34195[(24)]);
var inst_34112 = (state_34195[(25)]);
var inst_34108 = (state_34195[(19)]);
var inst_34111__$1 = (state_34195[(2)]);
var inst_34112__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34111__$1);
var inst_34113 = (function (){var all_files = inst_34108;
var res_SINGLEQUOTE_ = inst_34111__$1;
var res = inst_34112__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34111,inst_34116,inst_34112,inst_34108,inst_34111__$1,inst_34112__$1,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33790_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33790_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34111,inst_34116,inst_34112,inst_34108,inst_34111__$1,inst_34112__$1,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34114 = cljs.core.filter.call(null,inst_34113,inst_34111__$1);
var inst_34115 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34116__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34115);
var inst_34117 = cljs.core.not_empty.call(null,inst_34116__$1);
var state_34195__$1 = (function (){var statearr_34223 = state_34195;
(statearr_34223[(23)] = inst_34111__$1);

(statearr_34223[(24)] = inst_34116__$1);

(statearr_34223[(25)] = inst_34112__$1);

(statearr_34223[(26)] = inst_34114);

return statearr_34223;
})();
if(cljs.core.truth_(inst_34117)){
var statearr_34224_34304 = state_34195__$1;
(statearr_34224_34304[(1)] = (23));

} else {
var statearr_34225_34305 = state_34195__$1;
(statearr_34225_34305[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (36))){
var state_34195__$1 = state_34195;
var statearr_34226_34306 = state_34195__$1;
(statearr_34226_34306[(2)] = false);

(statearr_34226_34306[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (41))){
var inst_34170 = (state_34195[(20)]);
var inst_34174 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34175 = cljs.core.map.call(null,inst_34174,inst_34170);
var inst_34176 = cljs.core.pr_str.call(null,inst_34175);
var inst_34177 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34176)].join('');
var inst_34178 = figwheel.client.utils.log.call(null,inst_34177);
var state_34195__$1 = state_34195;
var statearr_34227_34307 = state_34195__$1;
(statearr_34227_34307[(2)] = inst_34178);

(statearr_34227_34307[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (43))){
var inst_34171 = (state_34195[(21)]);
var inst_34181 = (state_34195[(2)]);
var inst_34182 = cljs.core.not_empty.call(null,inst_34171);
var state_34195__$1 = (function (){var statearr_34228 = state_34195;
(statearr_34228[(27)] = inst_34181);

return statearr_34228;
})();
if(cljs.core.truth_(inst_34182)){
var statearr_34229_34308 = state_34195__$1;
(statearr_34229_34308[(1)] = (44));

} else {
var statearr_34230_34309 = state_34195__$1;
(statearr_34230_34309[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (29))){
var inst_34111 = (state_34195[(23)]);
var inst_34116 = (state_34195[(24)]);
var inst_34112 = (state_34195[(25)]);
var inst_34148 = (state_34195[(16)]);
var inst_34108 = (state_34195[(19)]);
var inst_34114 = (state_34195[(26)]);
var inst_34144 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34147 = (function (){var all_files = inst_34108;
var res_SINGLEQUOTE_ = inst_34111;
var res = inst_34112;
var files_not_loaded = inst_34114;
var dependencies_that_loaded = inst_34116;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34111,inst_34116,inst_34112,inst_34148,inst_34108,inst_34114,inst_34144,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34146){
var map__34231 = p__34146;
var map__34231__$1 = ((((!((map__34231 == null)))?((((map__34231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34231):map__34231);
var namespace = cljs.core.get.call(null,map__34231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34111,inst_34116,inst_34112,inst_34148,inst_34108,inst_34114,inst_34144,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34148__$1 = cljs.core.group_by.call(null,inst_34147,inst_34114);
var inst_34150 = (inst_34148__$1 == null);
var inst_34151 = cljs.core.not.call(null,inst_34150);
var state_34195__$1 = (function (){var statearr_34233 = state_34195;
(statearr_34233[(28)] = inst_34144);

(statearr_34233[(16)] = inst_34148__$1);

return statearr_34233;
})();
if(inst_34151){
var statearr_34234_34310 = state_34195__$1;
(statearr_34234_34310[(1)] = (32));

} else {
var statearr_34235_34311 = state_34195__$1;
(statearr_34235_34311[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (44))){
var inst_34171 = (state_34195[(21)]);
var inst_34184 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34171);
var inst_34185 = cljs.core.pr_str.call(null,inst_34184);
var inst_34186 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34185)].join('');
var inst_34187 = figwheel.client.utils.log.call(null,inst_34186);
var state_34195__$1 = state_34195;
var statearr_34236_34312 = state_34195__$1;
(statearr_34236_34312[(2)] = inst_34187);

(statearr_34236_34312[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (6))){
var inst_34089 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34237_34313 = state_34195__$1;
(statearr_34237_34313[(2)] = inst_34089);

(statearr_34237_34313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (28))){
var inst_34114 = (state_34195[(26)]);
var inst_34141 = (state_34195[(2)]);
var inst_34142 = cljs.core.not_empty.call(null,inst_34114);
var state_34195__$1 = (function (){var statearr_34238 = state_34195;
(statearr_34238[(29)] = inst_34141);

return statearr_34238;
})();
if(cljs.core.truth_(inst_34142)){
var statearr_34239_34314 = state_34195__$1;
(statearr_34239_34314[(1)] = (29));

} else {
var statearr_34240_34315 = state_34195__$1;
(statearr_34240_34315[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (25))){
var inst_34112 = (state_34195[(25)]);
var inst_34128 = (state_34195[(2)]);
var inst_34129 = cljs.core.not_empty.call(null,inst_34112);
var state_34195__$1 = (function (){var statearr_34241 = state_34195;
(statearr_34241[(30)] = inst_34128);

return statearr_34241;
})();
if(cljs.core.truth_(inst_34129)){
var statearr_34242_34316 = state_34195__$1;
(statearr_34242_34316[(1)] = (26));

} else {
var statearr_34243_34317 = state_34195__$1;
(statearr_34243_34317[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (34))){
var inst_34164 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34164)){
var statearr_34244_34318 = state_34195__$1;
(statearr_34244_34318[(1)] = (38));

} else {
var statearr_34245_34319 = state_34195__$1;
(statearr_34245_34319[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (17))){
var state_34195__$1 = state_34195;
var statearr_34246_34320 = state_34195__$1;
(statearr_34246_34320[(2)] = recompile_dependents);

(statearr_34246_34320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (3))){
var state_34195__$1 = state_34195;
var statearr_34247_34321 = state_34195__$1;
(statearr_34247_34321[(2)] = null);

(statearr_34247_34321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (12))){
var inst_34085 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34248_34322 = state_34195__$1;
(statearr_34248_34322[(2)] = inst_34085);

(statearr_34248_34322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (2))){
var inst_34047 = (state_34195[(13)]);
var inst_34054 = cljs.core.seq.call(null,inst_34047);
var inst_34055 = inst_34054;
var inst_34056 = null;
var inst_34057 = (0);
var inst_34058 = (0);
var state_34195__$1 = (function (){var statearr_34249 = state_34195;
(statearr_34249[(7)] = inst_34055);

(statearr_34249[(8)] = inst_34057);

(statearr_34249[(9)] = inst_34056);

(statearr_34249[(10)] = inst_34058);

return statearr_34249;
})();
var statearr_34250_34323 = state_34195__$1;
(statearr_34250_34323[(2)] = null);

(statearr_34250_34323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (23))){
var inst_34111 = (state_34195[(23)]);
var inst_34116 = (state_34195[(24)]);
var inst_34112 = (state_34195[(25)]);
var inst_34108 = (state_34195[(19)]);
var inst_34114 = (state_34195[(26)]);
var inst_34119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34121 = (function (){var all_files = inst_34108;
var res_SINGLEQUOTE_ = inst_34111;
var res = inst_34112;
var files_not_loaded = inst_34114;
var dependencies_that_loaded = inst_34116;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34111,inst_34116,inst_34112,inst_34108,inst_34114,inst_34119,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34120){
var map__34251 = p__34120;
var map__34251__$1 = ((((!((map__34251 == null)))?((((map__34251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34251):map__34251);
var request_url = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34111,inst_34116,inst_34112,inst_34108,inst_34114,inst_34119,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34122 = cljs.core.reverse.call(null,inst_34116);
var inst_34123 = cljs.core.map.call(null,inst_34121,inst_34122);
var inst_34124 = cljs.core.pr_str.call(null,inst_34123);
var inst_34125 = figwheel.client.utils.log.call(null,inst_34124);
var state_34195__$1 = (function (){var statearr_34253 = state_34195;
(statearr_34253[(31)] = inst_34119);

return statearr_34253;
})();
var statearr_34254_34324 = state_34195__$1;
(statearr_34254_34324[(2)] = inst_34125);

(statearr_34254_34324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (35))){
var state_34195__$1 = state_34195;
var statearr_34255_34325 = state_34195__$1;
(statearr_34255_34325[(2)] = true);

(statearr_34255_34325[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (19))){
var inst_34098 = (state_34195[(12)]);
var inst_34104 = figwheel.client.file_reloading.expand_files.call(null,inst_34098);
var state_34195__$1 = state_34195;
var statearr_34256_34326 = state_34195__$1;
(statearr_34256_34326[(2)] = inst_34104);

(statearr_34256_34326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (11))){
var state_34195__$1 = state_34195;
var statearr_34257_34327 = state_34195__$1;
(statearr_34257_34327[(2)] = null);

(statearr_34257_34327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (9))){
var inst_34087 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34258_34328 = state_34195__$1;
(statearr_34258_34328[(2)] = inst_34087);

(statearr_34258_34328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (5))){
var inst_34057 = (state_34195[(8)]);
var inst_34058 = (state_34195[(10)]);
var inst_34060 = (inst_34058 < inst_34057);
var inst_34061 = inst_34060;
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34061)){
var statearr_34259_34329 = state_34195__$1;
(statearr_34259_34329[(1)] = (7));

} else {
var statearr_34260_34330 = state_34195__$1;
(statearr_34260_34330[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (14))){
var inst_34068 = (state_34195[(22)]);
var inst_34077 = cljs.core.first.call(null,inst_34068);
var inst_34078 = figwheel.client.file_reloading.eval_body.call(null,inst_34077,opts);
var inst_34079 = cljs.core.next.call(null,inst_34068);
var inst_34055 = inst_34079;
var inst_34056 = null;
var inst_34057 = (0);
var inst_34058 = (0);
var state_34195__$1 = (function (){var statearr_34261 = state_34195;
(statearr_34261[(7)] = inst_34055);

(statearr_34261[(8)] = inst_34057);

(statearr_34261[(9)] = inst_34056);

(statearr_34261[(32)] = inst_34078);

(statearr_34261[(10)] = inst_34058);

return statearr_34261;
})();
var statearr_34262_34331 = state_34195__$1;
(statearr_34262_34331[(2)] = null);

(statearr_34262_34331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (45))){
var state_34195__$1 = state_34195;
var statearr_34263_34332 = state_34195__$1;
(statearr_34263_34332[(2)] = null);

(statearr_34263_34332[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (26))){
var inst_34111 = (state_34195[(23)]);
var inst_34116 = (state_34195[(24)]);
var inst_34112 = (state_34195[(25)]);
var inst_34108 = (state_34195[(19)]);
var inst_34114 = (state_34195[(26)]);
var inst_34131 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34133 = (function (){var all_files = inst_34108;
var res_SINGLEQUOTE_ = inst_34111;
var res = inst_34112;
var files_not_loaded = inst_34114;
var dependencies_that_loaded = inst_34116;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34111,inst_34116,inst_34112,inst_34108,inst_34114,inst_34131,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34132){
var map__34264 = p__34132;
var map__34264__$1 = ((((!((map__34264 == null)))?((((map__34264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34264):map__34264);
var namespace = cljs.core.get.call(null,map__34264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34264__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34111,inst_34116,inst_34112,inst_34108,inst_34114,inst_34131,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34134 = cljs.core.map.call(null,inst_34133,inst_34112);
var inst_34135 = cljs.core.pr_str.call(null,inst_34134);
var inst_34136 = figwheel.client.utils.log.call(null,inst_34135);
var inst_34137 = (function (){var all_files = inst_34108;
var res_SINGLEQUOTE_ = inst_34111;
var res = inst_34112;
var files_not_loaded = inst_34114;
var dependencies_that_loaded = inst_34116;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34111,inst_34116,inst_34112,inst_34108,inst_34114,inst_34131,inst_34133,inst_34134,inst_34135,inst_34136,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34111,inst_34116,inst_34112,inst_34108,inst_34114,inst_34131,inst_34133,inst_34134,inst_34135,inst_34136,state_val_34196,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34138 = setTimeout(inst_34137,(10));
var state_34195__$1 = (function (){var statearr_34266 = state_34195;
(statearr_34266[(33)] = inst_34136);

(statearr_34266[(34)] = inst_34131);

return statearr_34266;
})();
var statearr_34267_34333 = state_34195__$1;
(statearr_34267_34333[(2)] = inst_34138);

(statearr_34267_34333[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (16))){
var state_34195__$1 = state_34195;
var statearr_34268_34334 = state_34195__$1;
(statearr_34268_34334[(2)] = reload_dependents);

(statearr_34268_34334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (38))){
var inst_34148 = (state_34195[(16)]);
var inst_34166 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34148);
var state_34195__$1 = state_34195;
var statearr_34269_34335 = state_34195__$1;
(statearr_34269_34335[(2)] = inst_34166);

(statearr_34269_34335[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (30))){
var state_34195__$1 = state_34195;
var statearr_34270_34336 = state_34195__$1;
(statearr_34270_34336[(2)] = null);

(statearr_34270_34336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (10))){
var inst_34068 = (state_34195[(22)]);
var inst_34070 = cljs.core.chunked_seq_QMARK_.call(null,inst_34068);
var state_34195__$1 = state_34195;
if(inst_34070){
var statearr_34271_34337 = state_34195__$1;
(statearr_34271_34337[(1)] = (13));

} else {
var statearr_34272_34338 = state_34195__$1;
(statearr_34272_34338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (18))){
var inst_34102 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34102)){
var statearr_34273_34339 = state_34195__$1;
(statearr_34273_34339[(1)] = (19));

} else {
var statearr_34274_34340 = state_34195__$1;
(statearr_34274_34340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (42))){
var state_34195__$1 = state_34195;
var statearr_34275_34341 = state_34195__$1;
(statearr_34275_34341[(2)] = null);

(statearr_34275_34341[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (37))){
var inst_34161 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34276_34342 = state_34195__$1;
(statearr_34276_34342[(2)] = inst_34161);

(statearr_34276_34342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (8))){
var inst_34068 = (state_34195[(22)]);
var inst_34055 = (state_34195[(7)]);
var inst_34068__$1 = cljs.core.seq.call(null,inst_34055);
var state_34195__$1 = (function (){var statearr_34277 = state_34195;
(statearr_34277[(22)] = inst_34068__$1);

return statearr_34277;
})();
if(inst_34068__$1){
var statearr_34278_34343 = state_34195__$1;
(statearr_34278_34343[(1)] = (10));

} else {
var statearr_34279_34344 = state_34195__$1;
(statearr_34279_34344[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28526__auto__,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto____0 = (function (){
var statearr_34283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34283[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto__);

(statearr_34283[(1)] = (1));

return statearr_34283;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto____1 = (function (state_34195){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_34195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e34284){if((e34284 instanceof Object)){
var ex__28530__auto__ = e34284;
var statearr_34285_34345 = state_34195;
(statearr_34285_34345[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34346 = state_34195;
state_34195 = G__34346;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto__ = function(state_34195){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto____1.call(this,state_34195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28640__auto__ = (function (){var statearr_34286 = f__28639__auto__.call(null);
(statearr_34286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_34286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__,map__34040,map__34040__$1,opts,before_jsload,on_jsload,reload_dependents,map__34041,map__34041__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28638__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34349,link){
var map__34352 = p__34349;
var map__34352__$1 = ((((!((map__34352 == null)))?((((map__34352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34352):map__34352);
var file = cljs.core.get.call(null,map__34352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34352,map__34352__$1,file){
return (function (p1__34347_SHARP_,p2__34348_SHARP_){
if(cljs.core._EQ_.call(null,p1__34347_SHARP_,p2__34348_SHARP_)){
return p1__34347_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34352,map__34352__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34358){
var map__34359 = p__34358;
var map__34359__$1 = ((((!((map__34359 == null)))?((((map__34359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34359):map__34359);
var match_length = cljs.core.get.call(null,map__34359__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34359__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34354_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34354_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34361_SHARP_,p2__34362_SHARP_){
return cljs.core.assoc.call(null,p1__34361_SHARP_,cljs.core.get.call(null,p2__34362_SHARP_,key),p2__34362_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34363 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34363);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34363);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34364,p__34365){
var map__34370 = p__34364;
var map__34370__$1 = ((((!((map__34370 == null)))?((((map__34370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34370):map__34370);
var on_cssload = cljs.core.get.call(null,map__34370__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34371 = p__34365;
var map__34371__$1 = ((((!((map__34371 == null)))?((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34371):map__34371);
var files_msg = map__34371__$1;
var files = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1495581589832