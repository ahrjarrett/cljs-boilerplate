// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__6757){
var map__6782 = p__6757;
var map__6782__$1 = ((((!((map__6782 == null)))?((((map__6782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6782):map__6782);
var m = map__6782__$1;
var n = cljs.core.get.call(null,map__6782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__6782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6784_6806 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6785_6807 = null;
var count__6786_6808 = (0);
var i__6787_6809 = (0);
while(true){
if((i__6787_6809 < count__6786_6808)){
var f_6810 = cljs.core._nth.call(null,chunk__6785_6807,i__6787_6809);
cljs.core.println.call(null,"  ",f_6810);

var G__6811 = seq__6784_6806;
var G__6812 = chunk__6785_6807;
var G__6813 = count__6786_6808;
var G__6814 = (i__6787_6809 + (1));
seq__6784_6806 = G__6811;
chunk__6785_6807 = G__6812;
count__6786_6808 = G__6813;
i__6787_6809 = G__6814;
continue;
} else {
var temp__4657__auto___6815 = cljs.core.seq.call(null,seq__6784_6806);
if(temp__4657__auto___6815){
var seq__6784_6816__$1 = temp__4657__auto___6815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6784_6816__$1)){
var c__3675__auto___6817 = cljs.core.chunk_first.call(null,seq__6784_6816__$1);
var G__6818 = cljs.core.chunk_rest.call(null,seq__6784_6816__$1);
var G__6819 = c__3675__auto___6817;
var G__6820 = cljs.core.count.call(null,c__3675__auto___6817);
var G__6821 = (0);
seq__6784_6806 = G__6818;
chunk__6785_6807 = G__6819;
count__6786_6808 = G__6820;
i__6787_6809 = G__6821;
continue;
} else {
var f_6822 = cljs.core.first.call(null,seq__6784_6816__$1);
cljs.core.println.call(null,"  ",f_6822);

var G__6823 = cljs.core.next.call(null,seq__6784_6816__$1);
var G__6824 = null;
var G__6825 = (0);
var G__6826 = (0);
seq__6784_6806 = G__6823;
chunk__6785_6807 = G__6824;
count__6786_6808 = G__6825;
i__6787_6809 = G__6826;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6827 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3289__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3289__auto__)){
return or__3289__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6827);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6827)))?cljs.core.second.call(null,arglists_6827):arglists_6827));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6788_6828 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6789_6829 = null;
var count__6790_6830 = (0);
var i__6791_6831 = (0);
while(true){
if((i__6791_6831 < count__6790_6830)){
var vec__6792_6832 = cljs.core._nth.call(null,chunk__6789_6829,i__6791_6831);
var name_6833 = cljs.core.nth.call(null,vec__6792_6832,(0),null);
var map__6795_6834 = cljs.core.nth.call(null,vec__6792_6832,(1),null);
var map__6795_6835__$1 = ((((!((map__6795_6834 == null)))?((((map__6795_6834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6795_6834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6795_6834):map__6795_6834);
var doc_6836 = cljs.core.get.call(null,map__6795_6835__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6837 = cljs.core.get.call(null,map__6795_6835__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6833);

cljs.core.println.call(null," ",arglists_6837);

if(cljs.core.truth_(doc_6836)){
cljs.core.println.call(null," ",doc_6836);
} else {
}

var G__6838 = seq__6788_6828;
var G__6839 = chunk__6789_6829;
var G__6840 = count__6790_6830;
var G__6841 = (i__6791_6831 + (1));
seq__6788_6828 = G__6838;
chunk__6789_6829 = G__6839;
count__6790_6830 = G__6840;
i__6791_6831 = G__6841;
continue;
} else {
var temp__4657__auto___6842 = cljs.core.seq.call(null,seq__6788_6828);
if(temp__4657__auto___6842){
var seq__6788_6843__$1 = temp__4657__auto___6842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6788_6843__$1)){
var c__3675__auto___6844 = cljs.core.chunk_first.call(null,seq__6788_6843__$1);
var G__6845 = cljs.core.chunk_rest.call(null,seq__6788_6843__$1);
var G__6846 = c__3675__auto___6844;
var G__6847 = cljs.core.count.call(null,c__3675__auto___6844);
var G__6848 = (0);
seq__6788_6828 = G__6845;
chunk__6789_6829 = G__6846;
count__6790_6830 = G__6847;
i__6791_6831 = G__6848;
continue;
} else {
var vec__6797_6849 = cljs.core.first.call(null,seq__6788_6843__$1);
var name_6850 = cljs.core.nth.call(null,vec__6797_6849,(0),null);
var map__6800_6851 = cljs.core.nth.call(null,vec__6797_6849,(1),null);
var map__6800_6852__$1 = ((((!((map__6800_6851 == null)))?((((map__6800_6851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6800_6851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6800_6851):map__6800_6851);
var doc_6853 = cljs.core.get.call(null,map__6800_6852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6854 = cljs.core.get.call(null,map__6800_6852__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6850);

cljs.core.println.call(null," ",arglists_6854);

if(cljs.core.truth_(doc_6853)){
cljs.core.println.call(null," ",doc_6853);
} else {
}

var G__6855 = cljs.core.next.call(null,seq__6788_6843__$1);
var G__6856 = null;
var G__6857 = (0);
var G__6858 = (0);
seq__6788_6828 = G__6855;
chunk__6789_6829 = G__6856;
count__6790_6830 = G__6857;
i__6791_6831 = G__6858;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__6802 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__6803 = null;
var count__6804 = (0);
var i__6805 = (0);
while(true){
if((i__6805 < count__6804)){
var role = cljs.core._nth.call(null,chunk__6803,i__6805);
var temp__4657__auto___6859__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6859__$1)){
var spec_6860 = temp__4657__auto___6859__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_6860));
} else {
}

var G__6861 = seq__6802;
var G__6862 = chunk__6803;
var G__6863 = count__6804;
var G__6864 = (i__6805 + (1));
seq__6802 = G__6861;
chunk__6803 = G__6862;
count__6804 = G__6863;
i__6805 = G__6864;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__6802);
if(temp__4657__auto____$1){
var seq__6802__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6802__$1)){
var c__3675__auto__ = cljs.core.chunk_first.call(null,seq__6802__$1);
var G__6865 = cljs.core.chunk_rest.call(null,seq__6802__$1);
var G__6866 = c__3675__auto__;
var G__6867 = cljs.core.count.call(null,c__3675__auto__);
var G__6868 = (0);
seq__6802 = G__6865;
chunk__6803 = G__6866;
count__6804 = G__6867;
i__6805 = G__6868;
continue;
} else {
var role = cljs.core.first.call(null,seq__6802__$1);
var temp__4657__auto___6869__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6869__$2)){
var spec_6870 = temp__4657__auto___6869__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_6870));
} else {
}

var G__6871 = cljs.core.next.call(null,seq__6802__$1);
var G__6872 = null;
var G__6873 = (0);
var G__6874 = (0);
seq__6802 = G__6871;
chunk__6803 = G__6872;
count__6804 = G__6873;
i__6805 = G__6874;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
