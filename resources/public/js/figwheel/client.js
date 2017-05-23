// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35002 = [];
var len__27540__auto___35005 = arguments.length;
var i__27541__auto___35006 = (0);
while(true){
if((i__27541__auto___35006 < len__27540__auto___35005)){
args35002.push((arguments[i__27541__auto___35006]));

var G__35007 = (i__27541__auto___35006 + (1));
i__27541__auto___35006 = G__35007;
continue;
} else {
}
break;
}

var G__35004 = args35002.length;
switch (G__35004) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35002.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27547__auto__ = [];
var len__27540__auto___35010 = arguments.length;
var i__27541__auto___35011 = (0);
while(true){
if((i__27541__auto___35011 < len__27540__auto___35010)){
args__27547__auto__.push((arguments[i__27541__auto___35011]));

var G__35012 = (i__27541__auto___35011 + (1));
i__27541__auto___35011 = G__35012;
continue;
} else {
}
break;
}

var argseq__27548__auto__ = ((((0) < args__27547__auto__.length))?(new cljs.core.IndexedSeq(args__27547__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27548__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35009){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35009));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27547__auto__ = [];
var len__27540__auto___35014 = arguments.length;
var i__27541__auto___35015 = (0);
while(true){
if((i__27541__auto___35015 < len__27540__auto___35014)){
args__27547__auto__.push((arguments[i__27541__auto___35015]));

var G__35016 = (i__27541__auto___35015 + (1));
i__27541__auto___35015 = G__35016;
continue;
} else {
}
break;
}

var argseq__27548__auto__ = ((((0) < args__27547__auto__.length))?(new cljs.core.IndexedSeq(args__27547__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27548__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35013){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35013));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35017){
var map__35020 = p__35017;
var map__35020__$1 = ((((!((map__35020 == null)))?((((map__35020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35020):map__35020);
var message = cljs.core.get.call(null,map__35020__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35020__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26427__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26427__auto__)){
return or__26427__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26415__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26415__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26415__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28638__auto___35182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___35182,ch){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___35182,ch){
return (function (state_35151){
var state_val_35152 = (state_35151[(1)]);
if((state_val_35152 === (7))){
var inst_35147 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
var statearr_35153_35183 = state_35151__$1;
(statearr_35153_35183[(2)] = inst_35147);

(statearr_35153_35183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (1))){
var state_35151__$1 = state_35151;
var statearr_35154_35184 = state_35151__$1;
(statearr_35154_35184[(2)] = null);

(statearr_35154_35184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (4))){
var inst_35104 = (state_35151[(7)]);
var inst_35104__$1 = (state_35151[(2)]);
var state_35151__$1 = (function (){var statearr_35155 = state_35151;
(statearr_35155[(7)] = inst_35104__$1);

return statearr_35155;
})();
if(cljs.core.truth_(inst_35104__$1)){
var statearr_35156_35185 = state_35151__$1;
(statearr_35156_35185[(1)] = (5));

} else {
var statearr_35157_35186 = state_35151__$1;
(statearr_35157_35186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (15))){
var inst_35111 = (state_35151[(8)]);
var inst_35126 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35111);
var inst_35127 = cljs.core.first.call(null,inst_35126);
var inst_35128 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35127);
var inst_35129 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35128)].join('');
var inst_35130 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35129);
var state_35151__$1 = state_35151;
var statearr_35158_35187 = state_35151__$1;
(statearr_35158_35187[(2)] = inst_35130);

(statearr_35158_35187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (13))){
var inst_35135 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
var statearr_35159_35188 = state_35151__$1;
(statearr_35159_35188[(2)] = inst_35135);

(statearr_35159_35188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (6))){
var state_35151__$1 = state_35151;
var statearr_35160_35189 = state_35151__$1;
(statearr_35160_35189[(2)] = null);

(statearr_35160_35189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (17))){
var inst_35133 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
var statearr_35161_35190 = state_35151__$1;
(statearr_35161_35190[(2)] = inst_35133);

(statearr_35161_35190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (3))){
var inst_35149 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35151__$1,inst_35149);
} else {
if((state_val_35152 === (12))){
var inst_35110 = (state_35151[(9)]);
var inst_35124 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35110,opts);
var state_35151__$1 = state_35151;
if(cljs.core.truth_(inst_35124)){
var statearr_35162_35191 = state_35151__$1;
(statearr_35162_35191[(1)] = (15));

} else {
var statearr_35163_35192 = state_35151__$1;
(statearr_35163_35192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (2))){
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35151__$1,(4),ch);
} else {
if((state_val_35152 === (11))){
var inst_35111 = (state_35151[(8)]);
var inst_35116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35117 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35111);
var inst_35118 = cljs.core.async.timeout.call(null,(1000));
var inst_35119 = [inst_35117,inst_35118];
var inst_35120 = (new cljs.core.PersistentVector(null,2,(5),inst_35116,inst_35119,null));
var state_35151__$1 = state_35151;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35151__$1,(14),inst_35120);
} else {
if((state_val_35152 === (9))){
var inst_35111 = (state_35151[(8)]);
var inst_35137 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35138 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35111);
var inst_35139 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35138);
var inst_35140 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35139)].join('');
var inst_35141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35140);
var state_35151__$1 = (function (){var statearr_35164 = state_35151;
(statearr_35164[(10)] = inst_35137);

return statearr_35164;
})();
var statearr_35165_35193 = state_35151__$1;
(statearr_35165_35193[(2)] = inst_35141);

(statearr_35165_35193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (5))){
var inst_35104 = (state_35151[(7)]);
var inst_35106 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35107 = (new cljs.core.PersistentArrayMap(null,2,inst_35106,null));
var inst_35108 = (new cljs.core.PersistentHashSet(null,inst_35107,null));
var inst_35109 = figwheel.client.focus_msgs.call(null,inst_35108,inst_35104);
var inst_35110 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35109);
var inst_35111 = cljs.core.first.call(null,inst_35109);
var inst_35112 = figwheel.client.autoload_QMARK_.call(null);
var state_35151__$1 = (function (){var statearr_35166 = state_35151;
(statearr_35166[(9)] = inst_35110);

(statearr_35166[(8)] = inst_35111);

return statearr_35166;
})();
if(cljs.core.truth_(inst_35112)){
var statearr_35167_35194 = state_35151__$1;
(statearr_35167_35194[(1)] = (8));

} else {
var statearr_35168_35195 = state_35151__$1;
(statearr_35168_35195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (14))){
var inst_35122 = (state_35151[(2)]);
var state_35151__$1 = state_35151;
var statearr_35169_35196 = state_35151__$1;
(statearr_35169_35196[(2)] = inst_35122);

(statearr_35169_35196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (16))){
var state_35151__$1 = state_35151;
var statearr_35170_35197 = state_35151__$1;
(statearr_35170_35197[(2)] = null);

(statearr_35170_35197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (10))){
var inst_35143 = (state_35151[(2)]);
var state_35151__$1 = (function (){var statearr_35171 = state_35151;
(statearr_35171[(11)] = inst_35143);

return statearr_35171;
})();
var statearr_35172_35198 = state_35151__$1;
(statearr_35172_35198[(2)] = null);

(statearr_35172_35198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35152 === (8))){
var inst_35110 = (state_35151[(9)]);
var inst_35114 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35110,opts);
var state_35151__$1 = state_35151;
if(cljs.core.truth_(inst_35114)){
var statearr_35173_35199 = state_35151__$1;
(statearr_35173_35199[(1)] = (11));

} else {
var statearr_35174_35200 = state_35151__$1;
(statearr_35174_35200[(1)] = (12));

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
});})(c__28638__auto___35182,ch))
;
return ((function (switch__28526__auto__,c__28638__auto___35182,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28527__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28527__auto____0 = (function (){
var statearr_35178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35178[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28527__auto__);

(statearr_35178[(1)] = (1));

return statearr_35178;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28527__auto____1 = (function (state_35151){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_35151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e35179){if((e35179 instanceof Object)){
var ex__28530__auto__ = e35179;
var statearr_35180_35201 = state_35151;
(statearr_35180_35201[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35202 = state_35151;
state_35151 = G__35202;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28527__auto__ = function(state_35151){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28527__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28527__auto____1.call(this,state_35151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28527__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28527__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___35182,ch))
})();
var state__28640__auto__ = (function (){var statearr_35181 = f__28639__auto__.call(null);
(statearr_35181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___35182);

return statearr_35181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___35182,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35203_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35203_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35206 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35206){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35205){if((e35205 instanceof Error)){
var e = e35205;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35206], null));
} else {
var e = e35205;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35206))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35207){
var map__35216 = p__35207;
var map__35216__$1 = ((((!((map__35216 == null)))?((((map__35216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35216):map__35216);
var opts = map__35216__$1;
var build_id = cljs.core.get.call(null,map__35216__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35216,map__35216__$1,opts,build_id){
return (function (p__35218){
var vec__35219 = p__35218;
var seq__35220 = cljs.core.seq.call(null,vec__35219);
var first__35221 = cljs.core.first.call(null,seq__35220);
var seq__35220__$1 = cljs.core.next.call(null,seq__35220);
var map__35222 = first__35221;
var map__35222__$1 = ((((!((map__35222 == null)))?((((map__35222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35222):map__35222);
var msg = map__35222__$1;
var msg_name = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35220__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35219,seq__35220,first__35221,seq__35220__$1,map__35222,map__35222__$1,msg,msg_name,_,map__35216,map__35216__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35219,seq__35220,first__35221,seq__35220__$1,map__35222,map__35222__$1,msg,msg_name,_,map__35216,map__35216__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35216,map__35216__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35230){
var vec__35231 = p__35230;
var seq__35232 = cljs.core.seq.call(null,vec__35231);
var first__35233 = cljs.core.first.call(null,seq__35232);
var seq__35232__$1 = cljs.core.next.call(null,seq__35232);
var map__35234 = first__35233;
var map__35234__$1 = ((((!((map__35234 == null)))?((((map__35234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35234):map__35234);
var msg = map__35234__$1;
var msg_name = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35232__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35236){
var map__35248 = p__35236;
var map__35248__$1 = ((((!((map__35248 == null)))?((((map__35248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35248):map__35248);
var on_compile_warning = cljs.core.get.call(null,map__35248__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35248__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35248,map__35248__$1,on_compile_warning,on_compile_fail){
return (function (p__35250){
var vec__35251 = p__35250;
var seq__35252 = cljs.core.seq.call(null,vec__35251);
var first__35253 = cljs.core.first.call(null,seq__35252);
var seq__35252__$1 = cljs.core.next.call(null,seq__35252);
var map__35254 = first__35253;
var map__35254__$1 = ((((!((map__35254 == null)))?((((map__35254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35254):map__35254);
var msg = map__35254__$1;
var msg_name = cljs.core.get.call(null,map__35254__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35252__$1;
var pred__35256 = cljs.core._EQ_;
var expr__35257 = msg_name;
if(cljs.core.truth_(pred__35256.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35257))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35256.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35257))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35248,map__35248__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__,msg_hist,msg_names,msg){
return (function (state_35485){
var state_val_35486 = (state_35485[(1)]);
if((state_val_35486 === (7))){
var inst_35405 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
if(cljs.core.truth_(inst_35405)){
var statearr_35487_35537 = state_35485__$1;
(statearr_35487_35537[(1)] = (8));

} else {
var statearr_35488_35538 = state_35485__$1;
(statearr_35488_35538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (20))){
var inst_35479 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35489_35539 = state_35485__$1;
(statearr_35489_35539[(2)] = inst_35479);

(statearr_35489_35539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (27))){
var inst_35475 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35490_35540 = state_35485__$1;
(statearr_35490_35540[(2)] = inst_35475);

(statearr_35490_35540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (1))){
var inst_35398 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35485__$1 = state_35485;
if(cljs.core.truth_(inst_35398)){
var statearr_35491_35541 = state_35485__$1;
(statearr_35491_35541[(1)] = (2));

} else {
var statearr_35492_35542 = state_35485__$1;
(statearr_35492_35542[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (24))){
var inst_35477 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35493_35543 = state_35485__$1;
(statearr_35493_35543[(2)] = inst_35477);

(statearr_35493_35543[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (4))){
var inst_35483 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35485__$1,inst_35483);
} else {
if((state_val_35486 === (15))){
var inst_35481 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35494_35544 = state_35485__$1;
(statearr_35494_35544[(2)] = inst_35481);

(statearr_35494_35544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (21))){
var inst_35434 = (state_35485[(2)]);
var inst_35435 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35436 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35435);
var state_35485__$1 = (function (){var statearr_35495 = state_35485;
(statearr_35495[(7)] = inst_35434);

return statearr_35495;
})();
var statearr_35496_35545 = state_35485__$1;
(statearr_35496_35545[(2)] = inst_35436);

(statearr_35496_35545[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (31))){
var inst_35464 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35485__$1 = state_35485;
if(cljs.core.truth_(inst_35464)){
var statearr_35497_35546 = state_35485__$1;
(statearr_35497_35546[(1)] = (34));

} else {
var statearr_35498_35547 = state_35485__$1;
(statearr_35498_35547[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (32))){
var inst_35473 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35499_35548 = state_35485__$1;
(statearr_35499_35548[(2)] = inst_35473);

(statearr_35499_35548[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (33))){
var inst_35460 = (state_35485[(2)]);
var inst_35461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35462 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35461);
var state_35485__$1 = (function (){var statearr_35500 = state_35485;
(statearr_35500[(8)] = inst_35460);

return statearr_35500;
})();
var statearr_35501_35549 = state_35485__$1;
(statearr_35501_35549[(2)] = inst_35462);

(statearr_35501_35549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (13))){
var inst_35419 = figwheel.client.heads_up.clear.call(null);
var state_35485__$1 = state_35485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(16),inst_35419);
} else {
if((state_val_35486 === (22))){
var inst_35440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35441 = figwheel.client.heads_up.append_warning_message.call(null,inst_35440);
var state_35485__$1 = state_35485;
var statearr_35502_35550 = state_35485__$1;
(statearr_35502_35550[(2)] = inst_35441);

(statearr_35502_35550[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (36))){
var inst_35471 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35503_35551 = state_35485__$1;
(statearr_35503_35551[(2)] = inst_35471);

(statearr_35503_35551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (29))){
var inst_35451 = (state_35485[(2)]);
var inst_35452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35453 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35452);
var state_35485__$1 = (function (){var statearr_35504 = state_35485;
(statearr_35504[(9)] = inst_35451);

return statearr_35504;
})();
var statearr_35505_35552 = state_35485__$1;
(statearr_35505_35552[(2)] = inst_35453);

(statearr_35505_35552[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (6))){
var inst_35400 = (state_35485[(10)]);
var state_35485__$1 = state_35485;
var statearr_35506_35553 = state_35485__$1;
(statearr_35506_35553[(2)] = inst_35400);

(statearr_35506_35553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (28))){
var inst_35447 = (state_35485[(2)]);
var inst_35448 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35449 = figwheel.client.heads_up.display_warning.call(null,inst_35448);
var state_35485__$1 = (function (){var statearr_35507 = state_35485;
(statearr_35507[(11)] = inst_35447);

return statearr_35507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(29),inst_35449);
} else {
if((state_val_35486 === (25))){
var inst_35445 = figwheel.client.heads_up.clear.call(null);
var state_35485__$1 = state_35485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(28),inst_35445);
} else {
if((state_val_35486 === (34))){
var inst_35466 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35485__$1 = state_35485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(37),inst_35466);
} else {
if((state_val_35486 === (17))){
var inst_35425 = (state_35485[(2)]);
var inst_35426 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35427 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35426);
var state_35485__$1 = (function (){var statearr_35508 = state_35485;
(statearr_35508[(12)] = inst_35425);

return statearr_35508;
})();
var statearr_35509_35554 = state_35485__$1;
(statearr_35509_35554[(2)] = inst_35427);

(statearr_35509_35554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (3))){
var inst_35417 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35485__$1 = state_35485;
if(cljs.core.truth_(inst_35417)){
var statearr_35510_35555 = state_35485__$1;
(statearr_35510_35555[(1)] = (13));

} else {
var statearr_35511_35556 = state_35485__$1;
(statearr_35511_35556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (12))){
var inst_35413 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35512_35557 = state_35485__$1;
(statearr_35512_35557[(2)] = inst_35413);

(statearr_35512_35557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (2))){
var inst_35400 = (state_35485[(10)]);
var inst_35400__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35485__$1 = (function (){var statearr_35513 = state_35485;
(statearr_35513[(10)] = inst_35400__$1);

return statearr_35513;
})();
if(cljs.core.truth_(inst_35400__$1)){
var statearr_35514_35558 = state_35485__$1;
(statearr_35514_35558[(1)] = (5));

} else {
var statearr_35515_35559 = state_35485__$1;
(statearr_35515_35559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (23))){
var inst_35443 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35485__$1 = state_35485;
if(cljs.core.truth_(inst_35443)){
var statearr_35516_35560 = state_35485__$1;
(statearr_35516_35560[(1)] = (25));

} else {
var statearr_35517_35561 = state_35485__$1;
(statearr_35517_35561[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (35))){
var state_35485__$1 = state_35485;
var statearr_35518_35562 = state_35485__$1;
(statearr_35518_35562[(2)] = null);

(statearr_35518_35562[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (19))){
var inst_35438 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35485__$1 = state_35485;
if(cljs.core.truth_(inst_35438)){
var statearr_35519_35563 = state_35485__$1;
(statearr_35519_35563[(1)] = (22));

} else {
var statearr_35520_35564 = state_35485__$1;
(statearr_35520_35564[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (11))){
var inst_35409 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35521_35565 = state_35485__$1;
(statearr_35521_35565[(2)] = inst_35409);

(statearr_35521_35565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (9))){
var inst_35411 = figwheel.client.heads_up.clear.call(null);
var state_35485__$1 = state_35485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(12),inst_35411);
} else {
if((state_val_35486 === (5))){
var inst_35402 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35485__$1 = state_35485;
var statearr_35522_35566 = state_35485__$1;
(statearr_35522_35566[(2)] = inst_35402);

(statearr_35522_35566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (14))){
var inst_35429 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35485__$1 = state_35485;
if(cljs.core.truth_(inst_35429)){
var statearr_35523_35567 = state_35485__$1;
(statearr_35523_35567[(1)] = (18));

} else {
var statearr_35524_35568 = state_35485__$1;
(statearr_35524_35568[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (26))){
var inst_35455 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35485__$1 = state_35485;
if(cljs.core.truth_(inst_35455)){
var statearr_35525_35569 = state_35485__$1;
(statearr_35525_35569[(1)] = (30));

} else {
var statearr_35526_35570 = state_35485__$1;
(statearr_35526_35570[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (16))){
var inst_35421 = (state_35485[(2)]);
var inst_35422 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35423 = figwheel.client.heads_up.display_exception.call(null,inst_35422);
var state_35485__$1 = (function (){var statearr_35527 = state_35485;
(statearr_35527[(13)] = inst_35421);

return statearr_35527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(17),inst_35423);
} else {
if((state_val_35486 === (30))){
var inst_35457 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35458 = figwheel.client.heads_up.display_warning.call(null,inst_35457);
var state_35485__$1 = state_35485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(33),inst_35458);
} else {
if((state_val_35486 === (10))){
var inst_35415 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35528_35571 = state_35485__$1;
(statearr_35528_35571[(2)] = inst_35415);

(statearr_35528_35571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (18))){
var inst_35431 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35432 = figwheel.client.heads_up.display_exception.call(null,inst_35431);
var state_35485__$1 = state_35485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(21),inst_35432);
} else {
if((state_val_35486 === (37))){
var inst_35468 = (state_35485[(2)]);
var state_35485__$1 = state_35485;
var statearr_35529_35572 = state_35485__$1;
(statearr_35529_35572[(2)] = inst_35468);

(statearr_35529_35572[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35486 === (8))){
var inst_35407 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35485__$1 = state_35485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35485__$1,(11),inst_35407);
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
});})(c__28638__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28526__auto__,c__28638__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto____0 = (function (){
var statearr_35533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35533[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto__);

(statearr_35533[(1)] = (1));

return statearr_35533;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto____1 = (function (state_35485){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_35485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e35534){if((e35534 instanceof Object)){
var ex__28530__auto__ = e35534;
var statearr_35535_35573 = state_35485;
(statearr_35535_35573[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35574 = state_35485;
state_35485 = G__35574;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto__ = function(state_35485){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto____1.call(this,state_35485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__,msg_hist,msg_names,msg))
})();
var state__28640__auto__ = (function (){var statearr_35536 = f__28639__auto__.call(null);
(statearr_35536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_35536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__,msg_hist,msg_names,msg))
);

return c__28638__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28638__auto___35637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___35637,ch){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___35637,ch){
return (function (state_35620){
var state_val_35621 = (state_35620[(1)]);
if((state_val_35621 === (1))){
var state_35620__$1 = state_35620;
var statearr_35622_35638 = state_35620__$1;
(statearr_35622_35638[(2)] = null);

(statearr_35622_35638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (2))){
var state_35620__$1 = state_35620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35620__$1,(4),ch);
} else {
if((state_val_35621 === (3))){
var inst_35618 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35620__$1,inst_35618);
} else {
if((state_val_35621 === (4))){
var inst_35608 = (state_35620[(7)]);
var inst_35608__$1 = (state_35620[(2)]);
var state_35620__$1 = (function (){var statearr_35623 = state_35620;
(statearr_35623[(7)] = inst_35608__$1);

return statearr_35623;
})();
if(cljs.core.truth_(inst_35608__$1)){
var statearr_35624_35639 = state_35620__$1;
(statearr_35624_35639[(1)] = (5));

} else {
var statearr_35625_35640 = state_35620__$1;
(statearr_35625_35640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (5))){
var inst_35608 = (state_35620[(7)]);
var inst_35610 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35608);
var state_35620__$1 = state_35620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35620__$1,(8),inst_35610);
} else {
if((state_val_35621 === (6))){
var state_35620__$1 = state_35620;
var statearr_35626_35641 = state_35620__$1;
(statearr_35626_35641[(2)] = null);

(statearr_35626_35641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (7))){
var inst_35616 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
var statearr_35627_35642 = state_35620__$1;
(statearr_35627_35642[(2)] = inst_35616);

(statearr_35627_35642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (8))){
var inst_35612 = (state_35620[(2)]);
var state_35620__$1 = (function (){var statearr_35628 = state_35620;
(statearr_35628[(8)] = inst_35612);

return statearr_35628;
})();
var statearr_35629_35643 = state_35620__$1;
(statearr_35629_35643[(2)] = null);

(statearr_35629_35643[(1)] = (2));


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
});})(c__28638__auto___35637,ch))
;
return ((function (switch__28526__auto__,c__28638__auto___35637,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28527__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28527__auto____0 = (function (){
var statearr_35633 = [null,null,null,null,null,null,null,null,null];
(statearr_35633[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28527__auto__);

(statearr_35633[(1)] = (1));

return statearr_35633;
});
var figwheel$client$heads_up_plugin_$_state_machine__28527__auto____1 = (function (state_35620){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_35620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e35634){if((e35634 instanceof Object)){
var ex__28530__auto__ = e35634;
var statearr_35635_35644 = state_35620;
(statearr_35635_35644[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35645 = state_35620;
state_35620 = G__35645;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28527__auto__ = function(state_35620){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28527__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28527__auto____1.call(this,state_35620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28527__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28527__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___35637,ch))
})();
var state__28640__auto__ = (function (){var statearr_35636 = f__28639__auto__.call(null);
(statearr_35636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___35637);

return statearr_35636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___35637,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__){
return (function (state_35666){
var state_val_35667 = (state_35666[(1)]);
if((state_val_35667 === (1))){
var inst_35661 = cljs.core.async.timeout.call(null,(3000));
var state_35666__$1 = state_35666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35666__$1,(2),inst_35661);
} else {
if((state_val_35667 === (2))){
var inst_35663 = (state_35666[(2)]);
var inst_35664 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35666__$1 = (function (){var statearr_35668 = state_35666;
(statearr_35668[(7)] = inst_35663);

return statearr_35668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35666__$1,inst_35664);
} else {
return null;
}
}
});})(c__28638__auto__))
;
return ((function (switch__28526__auto__,c__28638__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28527__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28527__auto____0 = (function (){
var statearr_35672 = [null,null,null,null,null,null,null,null];
(statearr_35672[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28527__auto__);

(statearr_35672[(1)] = (1));

return statearr_35672;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28527__auto____1 = (function (state_35666){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_35666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e35673){if((e35673 instanceof Object)){
var ex__28530__auto__ = e35673;
var statearr_35674_35676 = state_35666;
(statearr_35674_35676[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35677 = state_35666;
state_35666 = G__35677;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28527__auto__ = function(state_35666){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28527__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28527__auto____1.call(this,state_35666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28527__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28527__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__))
})();
var state__28640__auto__ = (function (){var statearr_35675 = f__28639__auto__.call(null);
(statearr_35675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_35675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__))
);

return c__28638__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35700){
var state_val_35701 = (state_35700[(1)]);
if((state_val_35701 === (1))){
var inst_35694 = cljs.core.async.timeout.call(null,(2000));
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35700__$1,(2),inst_35694);
} else {
if((state_val_35701 === (2))){
var inst_35696 = (state_35700[(2)]);
var inst_35697 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35698 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35697);
var state_35700__$1 = (function (){var statearr_35702 = state_35700;
(statearr_35702[(7)] = inst_35696);

return statearr_35702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35700__$1,inst_35698);
} else {
return null;
}
}
});})(c__28638__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28526__auto__,c__28638__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto____0 = (function (){
var statearr_35706 = [null,null,null,null,null,null,null,null];
(statearr_35706[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto__);

(statearr_35706[(1)] = (1));

return statearr_35706;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto____1 = (function (state_35700){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_35700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e35707){if((e35707 instanceof Object)){
var ex__28530__auto__ = e35707;
var statearr_35708_35710 = state_35700;
(statearr_35708_35710[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35711 = state_35700;
state_35700 = G__35711;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto__ = function(state_35700){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto____1.call(this,state_35700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28640__auto__ = (function (){var statearr_35709 = f__28639__auto__.call(null);
(statearr_35709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_35709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__,figwheel_version,temp__4657__auto__))
);

return c__28638__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35712){
var map__35716 = p__35712;
var map__35716__$1 = ((((!((map__35716 == null)))?((((map__35716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35716):map__35716);
var file = cljs.core.get.call(null,map__35716__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35716__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35716__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35718 = "";
var G__35718__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35718),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35718);
var G__35718__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35718__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35718__$1);
if(cljs.core.truth_((function (){var and__26415__auto__ = line;
if(cljs.core.truth_(and__26415__auto__)){
return column;
} else {
return and__26415__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35718__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35718__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35719){
var map__35726 = p__35719;
var map__35726__$1 = ((((!((map__35726 == null)))?((((map__35726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35726):map__35726);
var ed = map__35726__$1;
var formatted_exception = cljs.core.get.call(null,map__35726__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35726__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35726__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35728_35732 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35729_35733 = null;
var count__35730_35734 = (0);
var i__35731_35735 = (0);
while(true){
if((i__35731_35735 < count__35730_35734)){
var msg_35736 = cljs.core._nth.call(null,chunk__35729_35733,i__35731_35735);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35736);

var G__35737 = seq__35728_35732;
var G__35738 = chunk__35729_35733;
var G__35739 = count__35730_35734;
var G__35740 = (i__35731_35735 + (1));
seq__35728_35732 = G__35737;
chunk__35729_35733 = G__35738;
count__35730_35734 = G__35739;
i__35731_35735 = G__35740;
continue;
} else {
var temp__4657__auto___35741 = cljs.core.seq.call(null,seq__35728_35732);
if(temp__4657__auto___35741){
var seq__35728_35742__$1 = temp__4657__auto___35741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35728_35742__$1)){
var c__27246__auto___35743 = cljs.core.chunk_first.call(null,seq__35728_35742__$1);
var G__35744 = cljs.core.chunk_rest.call(null,seq__35728_35742__$1);
var G__35745 = c__27246__auto___35743;
var G__35746 = cljs.core.count.call(null,c__27246__auto___35743);
var G__35747 = (0);
seq__35728_35732 = G__35744;
chunk__35729_35733 = G__35745;
count__35730_35734 = G__35746;
i__35731_35735 = G__35747;
continue;
} else {
var msg_35748 = cljs.core.first.call(null,seq__35728_35742__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35748);

var G__35749 = cljs.core.next.call(null,seq__35728_35742__$1);
var G__35750 = null;
var G__35751 = (0);
var G__35752 = (0);
seq__35728_35732 = G__35749;
chunk__35729_35733 = G__35750;
count__35730_35734 = G__35751;
i__35731_35735 = G__35752;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35753){
var map__35756 = p__35753;
var map__35756__$1 = ((((!((map__35756 == null)))?((((map__35756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35756):map__35756);
var w = map__35756__$1;
var message = cljs.core.get.call(null,map__35756__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26415__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26415__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26415__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35768 = cljs.core.seq.call(null,plugins);
var chunk__35769 = null;
var count__35770 = (0);
var i__35771 = (0);
while(true){
if((i__35771 < count__35770)){
var vec__35772 = cljs.core._nth.call(null,chunk__35769,i__35771);
var k = cljs.core.nth.call(null,vec__35772,(0),null);
var plugin = cljs.core.nth.call(null,vec__35772,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35778 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35768,chunk__35769,count__35770,i__35771,pl_35778,vec__35772,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35778.call(null,msg_hist);
});})(seq__35768,chunk__35769,count__35770,i__35771,pl_35778,vec__35772,k,plugin))
);
} else {
}

var G__35779 = seq__35768;
var G__35780 = chunk__35769;
var G__35781 = count__35770;
var G__35782 = (i__35771 + (1));
seq__35768 = G__35779;
chunk__35769 = G__35780;
count__35770 = G__35781;
i__35771 = G__35782;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35768);
if(temp__4657__auto__){
var seq__35768__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35768__$1)){
var c__27246__auto__ = cljs.core.chunk_first.call(null,seq__35768__$1);
var G__35783 = cljs.core.chunk_rest.call(null,seq__35768__$1);
var G__35784 = c__27246__auto__;
var G__35785 = cljs.core.count.call(null,c__27246__auto__);
var G__35786 = (0);
seq__35768 = G__35783;
chunk__35769 = G__35784;
count__35770 = G__35785;
i__35771 = G__35786;
continue;
} else {
var vec__35775 = cljs.core.first.call(null,seq__35768__$1);
var k = cljs.core.nth.call(null,vec__35775,(0),null);
var plugin = cljs.core.nth.call(null,vec__35775,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35787 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35768,chunk__35769,count__35770,i__35771,pl_35787,vec__35775,k,plugin,seq__35768__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35787.call(null,msg_hist);
});})(seq__35768,chunk__35769,count__35770,i__35771,pl_35787,vec__35775,k,plugin,seq__35768__$1,temp__4657__auto__))
);
} else {
}

var G__35788 = cljs.core.next.call(null,seq__35768__$1);
var G__35789 = null;
var G__35790 = (0);
var G__35791 = (0);
seq__35768 = G__35788;
chunk__35769 = G__35789;
count__35770 = G__35790;
i__35771 = G__35791;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35792 = [];
var len__27540__auto___35799 = arguments.length;
var i__27541__auto___35800 = (0);
while(true){
if((i__27541__auto___35800 < len__27540__auto___35799)){
args35792.push((arguments[i__27541__auto___35800]));

var G__35801 = (i__27541__auto___35800 + (1));
i__27541__auto___35800 = G__35801;
continue;
} else {
}
break;
}

var G__35794 = args35792.length;
switch (G__35794) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35792.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35795_35803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35796_35804 = null;
var count__35797_35805 = (0);
var i__35798_35806 = (0);
while(true){
if((i__35798_35806 < count__35797_35805)){
var msg_35807 = cljs.core._nth.call(null,chunk__35796_35804,i__35798_35806);
figwheel.client.socket.handle_incoming_message.call(null,msg_35807);

var G__35808 = seq__35795_35803;
var G__35809 = chunk__35796_35804;
var G__35810 = count__35797_35805;
var G__35811 = (i__35798_35806 + (1));
seq__35795_35803 = G__35808;
chunk__35796_35804 = G__35809;
count__35797_35805 = G__35810;
i__35798_35806 = G__35811;
continue;
} else {
var temp__4657__auto___35812 = cljs.core.seq.call(null,seq__35795_35803);
if(temp__4657__auto___35812){
var seq__35795_35813__$1 = temp__4657__auto___35812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35795_35813__$1)){
var c__27246__auto___35814 = cljs.core.chunk_first.call(null,seq__35795_35813__$1);
var G__35815 = cljs.core.chunk_rest.call(null,seq__35795_35813__$1);
var G__35816 = c__27246__auto___35814;
var G__35817 = cljs.core.count.call(null,c__27246__auto___35814);
var G__35818 = (0);
seq__35795_35803 = G__35815;
chunk__35796_35804 = G__35816;
count__35797_35805 = G__35817;
i__35798_35806 = G__35818;
continue;
} else {
var msg_35819 = cljs.core.first.call(null,seq__35795_35813__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35819);

var G__35820 = cljs.core.next.call(null,seq__35795_35813__$1);
var G__35821 = null;
var G__35822 = (0);
var G__35823 = (0);
seq__35795_35803 = G__35820;
chunk__35796_35804 = G__35821;
count__35797_35805 = G__35822;
i__35798_35806 = G__35823;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27547__auto__ = [];
var len__27540__auto___35828 = arguments.length;
var i__27541__auto___35829 = (0);
while(true){
if((i__27541__auto___35829 < len__27540__auto___35828)){
args__27547__auto__.push((arguments[i__27541__auto___35829]));

var G__35830 = (i__27541__auto___35829 + (1));
i__27541__auto___35829 = G__35830;
continue;
} else {
}
break;
}

var argseq__27548__auto__ = ((((0) < args__27547__auto__.length))?(new cljs.core.IndexedSeq(args__27547__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27548__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35825){
var map__35826 = p__35825;
var map__35826__$1 = ((((!((map__35826 == null)))?((((map__35826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35826):map__35826);
var opts = map__35826__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35824){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35824));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35832){if((e35832 instanceof Error)){
var e = e35832;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35832;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35836){
var map__35837 = p__35836;
var map__35837__$1 = ((((!((map__35837 == null)))?((((map__35837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35837):map__35837);
var msg_name = cljs.core.get.call(null,map__35837__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1495581591032