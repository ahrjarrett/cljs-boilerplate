// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10546){
var map__10571 = p__10546;
var map__10571__$1 = ((((!((map__10571 == null)))?((((map__10571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10571):map__10571);
var m = map__10571__$1;
var n = cljs.core.get.call(null,map__10571__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10573_10595 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10574_10596 = null;
var count__10575_10597 = (0);
var i__10576_10598 = (0);
while(true){
if((i__10576_10598 < count__10575_10597)){
var f_10599 = cljs.core._nth.call(null,chunk__10574_10596,i__10576_10598);
cljs.core.println.call(null,"  ",f_10599);

var G__10600 = seq__10573_10595;
var G__10601 = chunk__10574_10596;
var G__10602 = count__10575_10597;
var G__10603 = (i__10576_10598 + (1));
seq__10573_10595 = G__10600;
chunk__10574_10596 = G__10601;
count__10575_10597 = G__10602;
i__10576_10598 = G__10603;
continue;
} else {
var temp__4657__auto___10604 = cljs.core.seq.call(null,seq__10573_10595);
if(temp__4657__auto___10604){
var seq__10573_10605__$1 = temp__4657__auto___10604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10573_10605__$1)){
var c__8081__auto___10606 = cljs.core.chunk_first.call(null,seq__10573_10605__$1);
var G__10607 = cljs.core.chunk_rest.call(null,seq__10573_10605__$1);
var G__10608 = c__8081__auto___10606;
var G__10609 = cljs.core.count.call(null,c__8081__auto___10606);
var G__10610 = (0);
seq__10573_10595 = G__10607;
chunk__10574_10596 = G__10608;
count__10575_10597 = G__10609;
i__10576_10598 = G__10610;
continue;
} else {
var f_10611 = cljs.core.first.call(null,seq__10573_10605__$1);
cljs.core.println.call(null,"  ",f_10611);

var G__10612 = cljs.core.next.call(null,seq__10573_10605__$1);
var G__10613 = null;
var G__10614 = (0);
var G__10615 = (0);
seq__10573_10595 = G__10612;
chunk__10574_10596 = G__10613;
count__10575_10597 = G__10614;
i__10576_10598 = G__10615;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10616 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7262__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7262__auto__)){
return or__7262__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10616);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10616)))?cljs.core.second.call(null,arglists_10616):arglists_10616));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__10577_10617 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10578_10618 = null;
var count__10579_10619 = (0);
var i__10580_10620 = (0);
while(true){
if((i__10580_10620 < count__10579_10619)){
var vec__10581_10621 = cljs.core._nth.call(null,chunk__10578_10618,i__10580_10620);
var name_10622 = cljs.core.nth.call(null,vec__10581_10621,(0),null);
var map__10584_10623 = cljs.core.nth.call(null,vec__10581_10621,(1),null);
var map__10584_10624__$1 = ((((!((map__10584_10623 == null)))?((((map__10584_10623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10584_10623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10584_10623):map__10584_10623);
var doc_10625 = cljs.core.get.call(null,map__10584_10624__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10626 = cljs.core.get.call(null,map__10584_10624__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10622);

cljs.core.println.call(null," ",arglists_10626);

if(cljs.core.truth_(doc_10625)){
cljs.core.println.call(null," ",doc_10625);
} else {
}

var G__10627 = seq__10577_10617;
var G__10628 = chunk__10578_10618;
var G__10629 = count__10579_10619;
var G__10630 = (i__10580_10620 + (1));
seq__10577_10617 = G__10627;
chunk__10578_10618 = G__10628;
count__10579_10619 = G__10629;
i__10580_10620 = G__10630;
continue;
} else {
var temp__4657__auto___10631 = cljs.core.seq.call(null,seq__10577_10617);
if(temp__4657__auto___10631){
var seq__10577_10632__$1 = temp__4657__auto___10631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10577_10632__$1)){
var c__8081__auto___10633 = cljs.core.chunk_first.call(null,seq__10577_10632__$1);
var G__10634 = cljs.core.chunk_rest.call(null,seq__10577_10632__$1);
var G__10635 = c__8081__auto___10633;
var G__10636 = cljs.core.count.call(null,c__8081__auto___10633);
var G__10637 = (0);
seq__10577_10617 = G__10634;
chunk__10578_10618 = G__10635;
count__10579_10619 = G__10636;
i__10580_10620 = G__10637;
continue;
} else {
var vec__10586_10638 = cljs.core.first.call(null,seq__10577_10632__$1);
var name_10639 = cljs.core.nth.call(null,vec__10586_10638,(0),null);
var map__10589_10640 = cljs.core.nth.call(null,vec__10586_10638,(1),null);
var map__10589_10641__$1 = ((((!((map__10589_10640 == null)))?((((map__10589_10640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10589_10640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10589_10640):map__10589_10640);
var doc_10642 = cljs.core.get.call(null,map__10589_10641__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10643 = cljs.core.get.call(null,map__10589_10641__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10639);

cljs.core.println.call(null," ",arglists_10643);

if(cljs.core.truth_(doc_10642)){
cljs.core.println.call(null," ",doc_10642);
} else {
}

var G__10644 = cljs.core.next.call(null,seq__10577_10632__$1);
var G__10645 = null;
var G__10646 = (0);
var G__10647 = (0);
seq__10577_10617 = G__10644;
chunk__10578_10618 = G__10645;
count__10579_10619 = G__10646;
i__10580_10620 = G__10647;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__10591 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10592 = null;
var count__10593 = (0);
var i__10594 = (0);
while(true){
if((i__10594 < count__10593)){
var role = cljs.core._nth.call(null,chunk__10592,i__10594);
var temp__4657__auto___10648__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10648__$1)){
var spec_10649 = temp__4657__auto___10648__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_10649));
} else {
}

var G__10650 = seq__10591;
var G__10651 = chunk__10592;
var G__10652 = count__10593;
var G__10653 = (i__10594 + (1));
seq__10591 = G__10650;
chunk__10592 = G__10651;
count__10593 = G__10652;
i__10594 = G__10653;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10591);
if(temp__4657__auto____$1){
var seq__10591__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10591__$1)){
var c__8081__auto__ = cljs.core.chunk_first.call(null,seq__10591__$1);
var G__10654 = cljs.core.chunk_rest.call(null,seq__10591__$1);
var G__10655 = c__8081__auto__;
var G__10656 = cljs.core.count.call(null,c__8081__auto__);
var G__10657 = (0);
seq__10591 = G__10654;
chunk__10592 = G__10655;
count__10593 = G__10656;
i__10594 = G__10657;
continue;
} else {
var role = cljs.core.first.call(null,seq__10591__$1);
var temp__4657__auto___10658__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10658__$2)){
var spec_10659 = temp__4657__auto___10658__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_10659));
} else {
}

var G__10660 = cljs.core.next.call(null,seq__10591__$1);
var G__10661 = null;
var G__10662 = (0);
var G__10663 = (0);
seq__10591 = G__10660;
chunk__10592 = G__10661;
count__10593 = G__10662;
i__10594 = G__10663;
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

//# sourceMappingURL=repl.js.map