// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28683 = [];
var len__27540__auto___28689 = arguments.length;
var i__27541__auto___28690 = (0);
while(true){
if((i__27541__auto___28690 < len__27540__auto___28689)){
args28683.push((arguments[i__27541__auto___28690]));

var G__28691 = (i__27541__auto___28690 + (1));
i__27541__auto___28690 = G__28691;
continue;
} else {
}
break;
}

var G__28685 = args28683.length;
switch (G__28685) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28683.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28686 = (function (f,blockable,meta28687){
this.f = f;
this.blockable = blockable;
this.meta28687 = meta28687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28688,meta28687__$1){
var self__ = this;
var _28688__$1 = this;
return (new cljs.core.async.t_cljs$core$async28686(self__.f,self__.blockable,meta28687__$1));
});

cljs.core.async.t_cljs$core$async28686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28688){
var self__ = this;
var _28688__$1 = this;
return self__.meta28687;
});

cljs.core.async.t_cljs$core$async28686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28687","meta28687",1055520549,null)], null);
});

cljs.core.async.t_cljs$core$async28686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28686";

cljs.core.async.t_cljs$core$async28686.cljs$lang$ctorPrWriter = (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async28686");
});

cljs.core.async.__GT_t_cljs$core$async28686 = (function cljs$core$async$__GT_t_cljs$core$async28686(f__$1,blockable__$1,meta28687){
return (new cljs.core.async.t_cljs$core$async28686(f__$1,blockable__$1,meta28687));
});

}

return (new cljs.core.async.t_cljs$core$async28686(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28695 = [];
var len__27540__auto___28698 = arguments.length;
var i__27541__auto___28699 = (0);
while(true){
if((i__27541__auto___28699 < len__27540__auto___28698)){
args28695.push((arguments[i__27541__auto___28699]));

var G__28700 = (i__27541__auto___28699 + (1));
i__27541__auto___28699 = G__28700;
continue;
} else {
}
break;
}

var G__28697 = args28695.length;
switch (G__28697) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28695.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28702 = [];
var len__27540__auto___28705 = arguments.length;
var i__27541__auto___28706 = (0);
while(true){
if((i__27541__auto___28706 < len__27540__auto___28705)){
args28702.push((arguments[i__27541__auto___28706]));

var G__28707 = (i__27541__auto___28706 + (1));
i__27541__auto___28706 = G__28707;
continue;
} else {
}
break;
}

var G__28704 = args28702.length;
switch (G__28704) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28702.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28709 = [];
var len__27540__auto___28712 = arguments.length;
var i__27541__auto___28713 = (0);
while(true){
if((i__27541__auto___28713 < len__27540__auto___28712)){
args28709.push((arguments[i__27541__auto___28713]));

var G__28714 = (i__27541__auto___28713 + (1));
i__27541__auto___28713 = G__28714;
continue;
} else {
}
break;
}

var G__28711 = args28709.length;
switch (G__28711) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28709.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28716 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28716);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28716,ret){
return (function (){
return fn1.call(null,val_28716);
});})(val_28716,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28717 = [];
var len__27540__auto___28720 = arguments.length;
var i__27541__auto___28721 = (0);
while(true){
if((i__27541__auto___28721 < len__27540__auto___28720)){
args28717.push((arguments[i__27541__auto___28721]));

var G__28722 = (i__27541__auto___28721 + (1));
i__27541__auto___28721 = G__28722;
continue;
} else {
}
break;
}

var G__28719 = args28717.length;
switch (G__28719) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28717.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27350__auto___28724 = n;
var x_28725 = (0);
while(true){
if((x_28725 < n__27350__auto___28724)){
(a[x_28725] = (0));

var G__28726 = (x_28725 + (1));
x_28725 = G__28726;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28727 = (i + (1));
i = G__28727;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28731 = (function (flag,meta28732){
this.flag = flag;
this.meta28732 = meta28732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28733,meta28732__$1){
var self__ = this;
var _28733__$1 = this;
return (new cljs.core.async.t_cljs$core$async28731(self__.flag,meta28732__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28733){
var self__ = this;
var _28733__$1 = this;
return self__.meta28732;
});})(flag))
;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28731.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28732","meta28732",-847618985,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28731";

cljs.core.async.t_cljs$core$async28731.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async28731");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28731 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28731(flag__$1,meta28732){
return (new cljs.core.async.t_cljs$core$async28731(flag__$1,meta28732));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28731(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28737 = (function (flag,cb,meta28738){
this.flag = flag;
this.cb = cb;
this.meta28738 = meta28738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28739,meta28738__$1){
var self__ = this;
var _28739__$1 = this;
return (new cljs.core.async.t_cljs$core$async28737(self__.flag,self__.cb,meta28738__$1));
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28739){
var self__ = this;
var _28739__$1 = this;
return self__.meta28738;
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28738","meta28738",-1436967506,null)], null);
});

cljs.core.async.t_cljs$core$async28737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28737";

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorPrWriter = (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async28737");
});

cljs.core.async.__GT_t_cljs$core$async28737 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28737(flag__$1,cb__$1,meta28738){
return (new cljs.core.async.t_cljs$core$async28737(flag__$1,cb__$1,meta28738));
});

}

return (new cljs.core.async.t_cljs$core$async28737(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28740_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28740_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28741_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28741_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26427__auto__ = wport;
if(cljs.core.truth_(or__26427__auto__)){
return or__26427__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28742 = (i + (1));
i = G__28742;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26427__auto__ = ret;
if(cljs.core.truth_(or__26427__auto__)){
return or__26427__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26415__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26415__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26415__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27547__auto__ = [];
var len__27540__auto___28748 = arguments.length;
var i__27541__auto___28749 = (0);
while(true){
if((i__27541__auto___28749 < len__27540__auto___28748)){
args__27547__auto__.push((arguments[i__27541__auto___28749]));

var G__28750 = (i__27541__auto___28749 + (1));
i__27541__auto___28749 = G__28750;
continue;
} else {
}
break;
}

var argseq__27548__auto__ = ((((1) < args__27547__auto__.length))?(new cljs.core.IndexedSeq(args__27547__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27548__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28745){
var map__28746 = p__28745;
var map__28746__$1 = ((((!((map__28746 == null)))?((((map__28746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28746):map__28746);
var opts = map__28746__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28743){
var G__28744 = cljs.core.first.call(null,seq28743);
var seq28743__$1 = cljs.core.next.call(null,seq28743);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28744,seq28743__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28751 = [];
var len__27540__auto___28801 = arguments.length;
var i__27541__auto___28802 = (0);
while(true){
if((i__27541__auto___28802 < len__27540__auto___28801)){
args28751.push((arguments[i__27541__auto___28802]));

var G__28803 = (i__27541__auto___28802 + (1));
i__27541__auto___28802 = G__28803;
continue;
} else {
}
break;
}

var G__28753 = args28751.length;
switch (G__28753) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28751.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28638__auto___28805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___28805){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___28805){
return (function (state_28777){
var state_val_28778 = (state_28777[(1)]);
if((state_val_28778 === (7))){
var inst_28773 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28779_28806 = state_28777__$1;
(statearr_28779_28806[(2)] = inst_28773);

(statearr_28779_28806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (1))){
var state_28777__$1 = state_28777;
var statearr_28780_28807 = state_28777__$1;
(statearr_28780_28807[(2)] = null);

(statearr_28780_28807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (4))){
var inst_28756 = (state_28777[(7)]);
var inst_28756__$1 = (state_28777[(2)]);
var inst_28757 = (inst_28756__$1 == null);
var state_28777__$1 = (function (){var statearr_28781 = state_28777;
(statearr_28781[(7)] = inst_28756__$1);

return statearr_28781;
})();
if(cljs.core.truth_(inst_28757)){
var statearr_28782_28808 = state_28777__$1;
(statearr_28782_28808[(1)] = (5));

} else {
var statearr_28783_28809 = state_28777__$1;
(statearr_28783_28809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (13))){
var state_28777__$1 = state_28777;
var statearr_28784_28810 = state_28777__$1;
(statearr_28784_28810[(2)] = null);

(statearr_28784_28810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (6))){
var inst_28756 = (state_28777[(7)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28777__$1,(11),to,inst_28756);
} else {
if((state_val_28778 === (3))){
var inst_28775 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28777__$1,inst_28775);
} else {
if((state_val_28778 === (12))){
var state_28777__$1 = state_28777;
var statearr_28785_28811 = state_28777__$1;
(statearr_28785_28811[(2)] = null);

(statearr_28785_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (2))){
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28777__$1,(4),from);
} else {
if((state_val_28778 === (11))){
var inst_28766 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28766)){
var statearr_28786_28812 = state_28777__$1;
(statearr_28786_28812[(1)] = (12));

} else {
var statearr_28787_28813 = state_28777__$1;
(statearr_28787_28813[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (9))){
var state_28777__$1 = state_28777;
var statearr_28788_28814 = state_28777__$1;
(statearr_28788_28814[(2)] = null);

(statearr_28788_28814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (5))){
var state_28777__$1 = state_28777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28789_28815 = state_28777__$1;
(statearr_28789_28815[(1)] = (8));

} else {
var statearr_28790_28816 = state_28777__$1;
(statearr_28790_28816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (14))){
var inst_28771 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28791_28817 = state_28777__$1;
(statearr_28791_28817[(2)] = inst_28771);

(statearr_28791_28817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (10))){
var inst_28763 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28792_28818 = state_28777__$1;
(statearr_28792_28818[(2)] = inst_28763);

(statearr_28792_28818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (8))){
var inst_28760 = cljs.core.async.close_BANG_.call(null,to);
var state_28777__$1 = state_28777;
var statearr_28793_28819 = state_28777__$1;
(statearr_28793_28819[(2)] = inst_28760);

(statearr_28793_28819[(1)] = (10));


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
});})(c__28638__auto___28805))
;
return ((function (switch__28526__auto__,c__28638__auto___28805){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_28797 = [null,null,null,null,null,null,null,null];
(statearr_28797[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_28797[(1)] = (1));

return statearr_28797;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_28777){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_28777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e28798){if((e28798 instanceof Object)){
var ex__28530__auto__ = e28798;
var statearr_28799_28820 = state_28777;
(statearr_28799_28820[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28821 = state_28777;
state_28777 = G__28821;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_28777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_28777);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___28805))
})();
var state__28640__auto__ = (function (){var statearr_28800 = f__28639__auto__.call(null);
(statearr_28800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___28805);

return statearr_28800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___28805))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29009){
var vec__29010 = p__29009;
var v = cljs.core.nth.call(null,vec__29010,(0),null);
var p = cljs.core.nth.call(null,vec__29010,(1),null);
var job = vec__29010;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28638__auto___29196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___29196,res,vec__29010,v,p,job,jobs,results){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___29196,res,vec__29010,v,p,job,jobs,results){
return (function (state_29017){
var state_val_29018 = (state_29017[(1)]);
if((state_val_29018 === (1))){
var state_29017__$1 = state_29017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29017__$1,(2),res,v);
} else {
if((state_val_29018 === (2))){
var inst_29014 = (state_29017[(2)]);
var inst_29015 = cljs.core.async.close_BANG_.call(null,res);
var state_29017__$1 = (function (){var statearr_29019 = state_29017;
(statearr_29019[(7)] = inst_29014);

return statearr_29019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29017__$1,inst_29015);
} else {
return null;
}
}
});})(c__28638__auto___29196,res,vec__29010,v,p,job,jobs,results))
;
return ((function (switch__28526__auto__,c__28638__auto___29196,res,vec__29010,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0 = (function (){
var statearr_29023 = [null,null,null,null,null,null,null,null];
(statearr_29023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__);

(statearr_29023[(1)] = (1));

return statearr_29023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1 = (function (state_29017){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29024){if((e29024 instanceof Object)){
var ex__28530__auto__ = e29024;
var statearr_29025_29197 = state_29017;
(statearr_29025_29197[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29198 = state_29017;
state_29017 = G__29198;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = function(state_29017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1.call(this,state_29017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___29196,res,vec__29010,v,p,job,jobs,results))
})();
var state__28640__auto__ = (function (){var statearr_29026 = f__28639__auto__.call(null);
(statearr_29026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___29196);

return statearr_29026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___29196,res,vec__29010,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29027){
var vec__29028 = p__29027;
var v = cljs.core.nth.call(null,vec__29028,(0),null);
var p = cljs.core.nth.call(null,vec__29028,(1),null);
var job = vec__29028;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27350__auto___29199 = n;
var __29200 = (0);
while(true){
if((__29200 < n__27350__auto___29199)){
var G__29031_29201 = type;
var G__29031_29202__$1 = (((G__29031_29201 instanceof cljs.core.Keyword))?G__29031_29201.fqn:null);
switch (G__29031_29202__$1) {
case "compute":
var c__28638__auto___29204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29200,c__28638__auto___29204,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (__29200,c__28638__auto___29204,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async){
return (function (state_29044){
var state_val_29045 = (state_29044[(1)]);
if((state_val_29045 === (1))){
var state_29044__$1 = state_29044;
var statearr_29046_29205 = state_29044__$1;
(statearr_29046_29205[(2)] = null);

(statearr_29046_29205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29045 === (2))){
var state_29044__$1 = state_29044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29044__$1,(4),jobs);
} else {
if((state_val_29045 === (3))){
var inst_29042 = (state_29044[(2)]);
var state_29044__$1 = state_29044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29044__$1,inst_29042);
} else {
if((state_val_29045 === (4))){
var inst_29034 = (state_29044[(2)]);
var inst_29035 = process.call(null,inst_29034);
var state_29044__$1 = state_29044;
if(cljs.core.truth_(inst_29035)){
var statearr_29047_29206 = state_29044__$1;
(statearr_29047_29206[(1)] = (5));

} else {
var statearr_29048_29207 = state_29044__$1;
(statearr_29048_29207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29045 === (5))){
var state_29044__$1 = state_29044;
var statearr_29049_29208 = state_29044__$1;
(statearr_29049_29208[(2)] = null);

(statearr_29049_29208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29045 === (6))){
var state_29044__$1 = state_29044;
var statearr_29050_29209 = state_29044__$1;
(statearr_29050_29209[(2)] = null);

(statearr_29050_29209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29045 === (7))){
var inst_29040 = (state_29044[(2)]);
var state_29044__$1 = state_29044;
var statearr_29051_29210 = state_29044__$1;
(statearr_29051_29210[(2)] = inst_29040);

(statearr_29051_29210[(1)] = (3));


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
});})(__29200,c__28638__auto___29204,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async))
;
return ((function (__29200,switch__28526__auto__,c__28638__auto___29204,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0 = (function (){
var statearr_29055 = [null,null,null,null,null,null,null];
(statearr_29055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__);

(statearr_29055[(1)] = (1));

return statearr_29055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1 = (function (state_29044){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29056){if((e29056 instanceof Object)){
var ex__28530__auto__ = e29056;
var statearr_29057_29211 = state_29044;
(statearr_29057_29211[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29212 = state_29044;
state_29044 = G__29212;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = function(state_29044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1.call(this,state_29044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__;
})()
;})(__29200,switch__28526__auto__,c__28638__auto___29204,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async))
})();
var state__28640__auto__ = (function (){var statearr_29058 = f__28639__auto__.call(null);
(statearr_29058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___29204);

return statearr_29058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(__29200,c__28638__auto___29204,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async))
);


break;
case "async":
var c__28638__auto___29213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29200,c__28638__auto___29213,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (__29200,c__28638__auto___29213,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async){
return (function (state_29071){
var state_val_29072 = (state_29071[(1)]);
if((state_val_29072 === (1))){
var state_29071__$1 = state_29071;
var statearr_29073_29214 = state_29071__$1;
(statearr_29073_29214[(2)] = null);

(statearr_29073_29214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (2))){
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29071__$1,(4),jobs);
} else {
if((state_val_29072 === (3))){
var inst_29069 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29071__$1,inst_29069);
} else {
if((state_val_29072 === (4))){
var inst_29061 = (state_29071[(2)]);
var inst_29062 = async.call(null,inst_29061);
var state_29071__$1 = state_29071;
if(cljs.core.truth_(inst_29062)){
var statearr_29074_29215 = state_29071__$1;
(statearr_29074_29215[(1)] = (5));

} else {
var statearr_29075_29216 = state_29071__$1;
(statearr_29075_29216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (5))){
var state_29071__$1 = state_29071;
var statearr_29076_29217 = state_29071__$1;
(statearr_29076_29217[(2)] = null);

(statearr_29076_29217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (6))){
var state_29071__$1 = state_29071;
var statearr_29077_29218 = state_29071__$1;
(statearr_29077_29218[(2)] = null);

(statearr_29077_29218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (7))){
var inst_29067 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29078_29219 = state_29071__$1;
(statearr_29078_29219[(2)] = inst_29067);

(statearr_29078_29219[(1)] = (3));


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
});})(__29200,c__28638__auto___29213,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async))
;
return ((function (__29200,switch__28526__auto__,c__28638__auto___29213,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0 = (function (){
var statearr_29082 = [null,null,null,null,null,null,null];
(statearr_29082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__);

(statearr_29082[(1)] = (1));

return statearr_29082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1 = (function (state_29071){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29083){if((e29083 instanceof Object)){
var ex__28530__auto__ = e29083;
var statearr_29084_29220 = state_29071;
(statearr_29084_29220[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29221 = state_29071;
state_29071 = G__29221;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = function(state_29071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1.call(this,state_29071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__;
})()
;})(__29200,switch__28526__auto__,c__28638__auto___29213,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async))
})();
var state__28640__auto__ = (function (){var statearr_29085 = f__28639__auto__.call(null);
(statearr_29085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___29213);

return statearr_29085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(__29200,c__28638__auto___29213,G__29031_29201,G__29031_29202__$1,n__27350__auto___29199,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__29222 = (__29200 + (1));
__29200 = G__29222;
continue;
} else {
}
break;
}

var c__28638__auto___29223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___29223,jobs,results,process,async){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___29223,jobs,results,process,async){
return (function (state_29107){
var state_val_29108 = (state_29107[(1)]);
if((state_val_29108 === (1))){
var state_29107__$1 = state_29107;
var statearr_29109_29224 = state_29107__$1;
(statearr_29109_29224[(2)] = null);

(statearr_29109_29224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (2))){
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29107__$1,(4),from);
} else {
if((state_val_29108 === (3))){
var inst_29105 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29107__$1,inst_29105);
} else {
if((state_val_29108 === (4))){
var inst_29088 = (state_29107[(7)]);
var inst_29088__$1 = (state_29107[(2)]);
var inst_29089 = (inst_29088__$1 == null);
var state_29107__$1 = (function (){var statearr_29110 = state_29107;
(statearr_29110[(7)] = inst_29088__$1);

return statearr_29110;
})();
if(cljs.core.truth_(inst_29089)){
var statearr_29111_29225 = state_29107__$1;
(statearr_29111_29225[(1)] = (5));

} else {
var statearr_29112_29226 = state_29107__$1;
(statearr_29112_29226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (5))){
var inst_29091 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29107__$1 = state_29107;
var statearr_29113_29227 = state_29107__$1;
(statearr_29113_29227[(2)] = inst_29091);

(statearr_29113_29227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (6))){
var inst_29093 = (state_29107[(8)]);
var inst_29088 = (state_29107[(7)]);
var inst_29093__$1 = cljs.core.async.chan.call(null,(1));
var inst_29094 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29095 = [inst_29088,inst_29093__$1];
var inst_29096 = (new cljs.core.PersistentVector(null,2,(5),inst_29094,inst_29095,null));
var state_29107__$1 = (function (){var statearr_29114 = state_29107;
(statearr_29114[(8)] = inst_29093__$1);

return statearr_29114;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29107__$1,(8),jobs,inst_29096);
} else {
if((state_val_29108 === (7))){
var inst_29103 = (state_29107[(2)]);
var state_29107__$1 = state_29107;
var statearr_29115_29228 = state_29107__$1;
(statearr_29115_29228[(2)] = inst_29103);

(statearr_29115_29228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29108 === (8))){
var inst_29093 = (state_29107[(8)]);
var inst_29098 = (state_29107[(2)]);
var state_29107__$1 = (function (){var statearr_29116 = state_29107;
(statearr_29116[(9)] = inst_29098);

return statearr_29116;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29107__$1,(9),results,inst_29093);
} else {
if((state_val_29108 === (9))){
var inst_29100 = (state_29107[(2)]);
var state_29107__$1 = (function (){var statearr_29117 = state_29107;
(statearr_29117[(10)] = inst_29100);

return statearr_29117;
})();
var statearr_29118_29229 = state_29107__$1;
(statearr_29118_29229[(2)] = null);

(statearr_29118_29229[(1)] = (2));


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
});})(c__28638__auto___29223,jobs,results,process,async))
;
return ((function (switch__28526__auto__,c__28638__auto___29223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0 = (function (){
var statearr_29122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__);

(statearr_29122[(1)] = (1));

return statearr_29122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1 = (function (state_29107){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29123){if((e29123 instanceof Object)){
var ex__28530__auto__ = e29123;
var statearr_29124_29230 = state_29107;
(statearr_29124_29230[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29231 = state_29107;
state_29107 = G__29231;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = function(state_29107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1.call(this,state_29107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___29223,jobs,results,process,async))
})();
var state__28640__auto__ = (function (){var statearr_29125 = f__28639__auto__.call(null);
(statearr_29125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___29223);

return statearr_29125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___29223,jobs,results,process,async))
);


var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__,jobs,results,process,async){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__,jobs,results,process,async){
return (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (7))){
var inst_29159 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29165_29232 = state_29163__$1;
(statearr_29165_29232[(2)] = inst_29159);

(statearr_29165_29232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (20))){
var state_29163__$1 = state_29163;
var statearr_29166_29233 = state_29163__$1;
(statearr_29166_29233[(2)] = null);

(statearr_29166_29233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (1))){
var state_29163__$1 = state_29163;
var statearr_29167_29234 = state_29163__$1;
(statearr_29167_29234[(2)] = null);

(statearr_29167_29234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (4))){
var inst_29128 = (state_29163[(7)]);
var inst_29128__$1 = (state_29163[(2)]);
var inst_29129 = (inst_29128__$1 == null);
var state_29163__$1 = (function (){var statearr_29168 = state_29163;
(statearr_29168[(7)] = inst_29128__$1);

return statearr_29168;
})();
if(cljs.core.truth_(inst_29129)){
var statearr_29169_29235 = state_29163__$1;
(statearr_29169_29235[(1)] = (5));

} else {
var statearr_29170_29236 = state_29163__$1;
(statearr_29170_29236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (15))){
var inst_29141 = (state_29163[(8)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29163__$1,(18),to,inst_29141);
} else {
if((state_val_29164 === (21))){
var inst_29154 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29171_29237 = state_29163__$1;
(statearr_29171_29237[(2)] = inst_29154);

(statearr_29171_29237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (13))){
var inst_29156 = (state_29163[(2)]);
var state_29163__$1 = (function (){var statearr_29172 = state_29163;
(statearr_29172[(9)] = inst_29156);

return statearr_29172;
})();
var statearr_29173_29238 = state_29163__$1;
(statearr_29173_29238[(2)] = null);

(statearr_29173_29238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var inst_29128 = (state_29163[(7)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(11),inst_29128);
} else {
if((state_val_29164 === (17))){
var inst_29149 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
if(cljs.core.truth_(inst_29149)){
var statearr_29174_29239 = state_29163__$1;
(statearr_29174_29239[(1)] = (19));

} else {
var statearr_29175_29240 = state_29163__$1;
(statearr_29175_29240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (3))){
var inst_29161 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (12))){
var inst_29138 = (state_29163[(10)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(14),inst_29138);
} else {
if((state_val_29164 === (2))){
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(4),results);
} else {
if((state_val_29164 === (19))){
var state_29163__$1 = state_29163;
var statearr_29176_29241 = state_29163__$1;
(statearr_29176_29241[(2)] = null);

(statearr_29176_29241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (11))){
var inst_29138 = (state_29163[(2)]);
var state_29163__$1 = (function (){var statearr_29177 = state_29163;
(statearr_29177[(10)] = inst_29138);

return statearr_29177;
})();
var statearr_29178_29242 = state_29163__$1;
(statearr_29178_29242[(2)] = null);

(statearr_29178_29242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (9))){
var state_29163__$1 = state_29163;
var statearr_29179_29243 = state_29163__$1;
(statearr_29179_29243[(2)] = null);

(statearr_29179_29243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (5))){
var state_29163__$1 = state_29163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29180_29244 = state_29163__$1;
(statearr_29180_29244[(1)] = (8));

} else {
var statearr_29181_29245 = state_29163__$1;
(statearr_29181_29245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (14))){
var inst_29141 = (state_29163[(8)]);
var inst_29143 = (state_29163[(11)]);
var inst_29141__$1 = (state_29163[(2)]);
var inst_29142 = (inst_29141__$1 == null);
var inst_29143__$1 = cljs.core.not.call(null,inst_29142);
var state_29163__$1 = (function (){var statearr_29182 = state_29163;
(statearr_29182[(8)] = inst_29141__$1);

(statearr_29182[(11)] = inst_29143__$1);

return statearr_29182;
})();
if(inst_29143__$1){
var statearr_29183_29246 = state_29163__$1;
(statearr_29183_29246[(1)] = (15));

} else {
var statearr_29184_29247 = state_29163__$1;
(statearr_29184_29247[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (16))){
var inst_29143 = (state_29163[(11)]);
var state_29163__$1 = state_29163;
var statearr_29185_29248 = state_29163__$1;
(statearr_29185_29248[(2)] = inst_29143);

(statearr_29185_29248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (10))){
var inst_29135 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29186_29249 = state_29163__$1;
(statearr_29186_29249[(2)] = inst_29135);

(statearr_29186_29249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (18))){
var inst_29146 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29187_29250 = state_29163__$1;
(statearr_29187_29250[(2)] = inst_29146);

(statearr_29187_29250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (8))){
var inst_29132 = cljs.core.async.close_BANG_.call(null,to);
var state_29163__$1 = state_29163;
var statearr_29188_29251 = state_29163__$1;
(statearr_29188_29251[(2)] = inst_29132);

(statearr_29188_29251[(1)] = (10));


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
});})(c__28638__auto__,jobs,results,process,async))
;
return ((function (switch__28526__auto__,c__28638__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0 = (function (){
var statearr_29192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__);

(statearr_29192[(1)] = (1));

return statearr_29192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1 = (function (state_29163){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29193){if((e29193 instanceof Object)){
var ex__28530__auto__ = e29193;
var statearr_29194_29252 = state_29163;
(statearr_29194_29252[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29253 = state_29163;
state_29163 = G__29253;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__,jobs,results,process,async))
})();
var state__28640__auto__ = (function (){var statearr_29195 = f__28639__auto__.call(null);
(statearr_29195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_29195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__,jobs,results,process,async))
);

return c__28638__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29254 = [];
var len__27540__auto___29257 = arguments.length;
var i__27541__auto___29258 = (0);
while(true){
if((i__27541__auto___29258 < len__27540__auto___29257)){
args29254.push((arguments[i__27541__auto___29258]));

var G__29259 = (i__27541__auto___29258 + (1));
i__27541__auto___29258 = G__29259;
continue;
} else {
}
break;
}

var G__29256 = args29254.length;
switch (G__29256) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29254.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29261 = [];
var len__27540__auto___29264 = arguments.length;
var i__27541__auto___29265 = (0);
while(true){
if((i__27541__auto___29265 < len__27540__auto___29264)){
args29261.push((arguments[i__27541__auto___29265]));

var G__29266 = (i__27541__auto___29265 + (1));
i__27541__auto___29265 = G__29266;
continue;
} else {
}
break;
}

var G__29263 = args29261.length;
switch (G__29263) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29261.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29268 = [];
var len__27540__auto___29321 = arguments.length;
var i__27541__auto___29322 = (0);
while(true){
if((i__27541__auto___29322 < len__27540__auto___29321)){
args29268.push((arguments[i__27541__auto___29322]));

var G__29323 = (i__27541__auto___29322 + (1));
i__27541__auto___29322 = G__29323;
continue;
} else {
}
break;
}

var G__29270 = args29268.length;
switch (G__29270) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29268.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28638__auto___29325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___29325,tc,fc){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___29325,tc,fc){
return (function (state_29296){
var state_val_29297 = (state_29296[(1)]);
if((state_val_29297 === (7))){
var inst_29292 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29298_29326 = state_29296__$1;
(statearr_29298_29326[(2)] = inst_29292);

(statearr_29298_29326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (1))){
var state_29296__$1 = state_29296;
var statearr_29299_29327 = state_29296__$1;
(statearr_29299_29327[(2)] = null);

(statearr_29299_29327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (4))){
var inst_29273 = (state_29296[(7)]);
var inst_29273__$1 = (state_29296[(2)]);
var inst_29274 = (inst_29273__$1 == null);
var state_29296__$1 = (function (){var statearr_29300 = state_29296;
(statearr_29300[(7)] = inst_29273__$1);

return statearr_29300;
})();
if(cljs.core.truth_(inst_29274)){
var statearr_29301_29328 = state_29296__$1;
(statearr_29301_29328[(1)] = (5));

} else {
var statearr_29302_29329 = state_29296__$1;
(statearr_29302_29329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (13))){
var state_29296__$1 = state_29296;
var statearr_29303_29330 = state_29296__$1;
(statearr_29303_29330[(2)] = null);

(statearr_29303_29330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (6))){
var inst_29273 = (state_29296[(7)]);
var inst_29279 = p.call(null,inst_29273);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29279)){
var statearr_29304_29331 = state_29296__$1;
(statearr_29304_29331[(1)] = (9));

} else {
var statearr_29305_29332 = state_29296__$1;
(statearr_29305_29332[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (3))){
var inst_29294 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29296__$1,inst_29294);
} else {
if((state_val_29297 === (12))){
var state_29296__$1 = state_29296;
var statearr_29306_29333 = state_29296__$1;
(statearr_29306_29333[(2)] = null);

(statearr_29306_29333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (2))){
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(4),ch);
} else {
if((state_val_29297 === (11))){
var inst_29273 = (state_29296[(7)]);
var inst_29283 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29296__$1,(8),inst_29283,inst_29273);
} else {
if((state_val_29297 === (9))){
var state_29296__$1 = state_29296;
var statearr_29307_29334 = state_29296__$1;
(statearr_29307_29334[(2)] = tc);

(statearr_29307_29334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (5))){
var inst_29276 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29277 = cljs.core.async.close_BANG_.call(null,fc);
var state_29296__$1 = (function (){var statearr_29308 = state_29296;
(statearr_29308[(8)] = inst_29276);

return statearr_29308;
})();
var statearr_29309_29335 = state_29296__$1;
(statearr_29309_29335[(2)] = inst_29277);

(statearr_29309_29335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (14))){
var inst_29290 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29310_29336 = state_29296__$1;
(statearr_29310_29336[(2)] = inst_29290);

(statearr_29310_29336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (10))){
var state_29296__$1 = state_29296;
var statearr_29311_29337 = state_29296__$1;
(statearr_29311_29337[(2)] = fc);

(statearr_29311_29337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (8))){
var inst_29285 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29285)){
var statearr_29312_29338 = state_29296__$1;
(statearr_29312_29338[(1)] = (12));

} else {
var statearr_29313_29339 = state_29296__$1;
(statearr_29313_29339[(1)] = (13));

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
});})(c__28638__auto___29325,tc,fc))
;
return ((function (switch__28526__auto__,c__28638__auto___29325,tc,fc){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_29317 = [null,null,null,null,null,null,null,null,null];
(statearr_29317[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_29317[(1)] = (1));

return statearr_29317;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_29296){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29318){if((e29318 instanceof Object)){
var ex__28530__auto__ = e29318;
var statearr_29319_29340 = state_29296;
(statearr_29319_29340[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29341 = state_29296;
state_29296 = G__29341;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_29296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_29296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___29325,tc,fc))
})();
var state__28640__auto__ = (function (){var statearr_29320 = f__28639__auto__.call(null);
(statearr_29320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___29325);

return statearr_29320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___29325,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__){
return (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (7))){
var inst_29401 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29407_29428 = state_29405__$1;
(statearr_29407_29428[(2)] = inst_29401);

(statearr_29407_29428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (1))){
var inst_29385 = init;
var state_29405__$1 = (function (){var statearr_29408 = state_29405;
(statearr_29408[(7)] = inst_29385);

return statearr_29408;
})();
var statearr_29409_29429 = state_29405__$1;
(statearr_29409_29429[(2)] = null);

(statearr_29409_29429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (4))){
var inst_29388 = (state_29405[(8)]);
var inst_29388__$1 = (state_29405[(2)]);
var inst_29389 = (inst_29388__$1 == null);
var state_29405__$1 = (function (){var statearr_29410 = state_29405;
(statearr_29410[(8)] = inst_29388__$1);

return statearr_29410;
})();
if(cljs.core.truth_(inst_29389)){
var statearr_29411_29430 = state_29405__$1;
(statearr_29411_29430[(1)] = (5));

} else {
var statearr_29412_29431 = state_29405__$1;
(statearr_29412_29431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (6))){
var inst_29388 = (state_29405[(8)]);
var inst_29385 = (state_29405[(7)]);
var inst_29392 = (state_29405[(9)]);
var inst_29392__$1 = f.call(null,inst_29385,inst_29388);
var inst_29393 = cljs.core.reduced_QMARK_.call(null,inst_29392__$1);
var state_29405__$1 = (function (){var statearr_29413 = state_29405;
(statearr_29413[(9)] = inst_29392__$1);

return statearr_29413;
})();
if(inst_29393){
var statearr_29414_29432 = state_29405__$1;
(statearr_29414_29432[(1)] = (8));

} else {
var statearr_29415_29433 = state_29405__$1;
(statearr_29415_29433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (3))){
var inst_29403 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29405__$1,inst_29403);
} else {
if((state_val_29406 === (2))){
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29405__$1,(4),ch);
} else {
if((state_val_29406 === (9))){
var inst_29392 = (state_29405[(9)]);
var inst_29385 = inst_29392;
var state_29405__$1 = (function (){var statearr_29416 = state_29405;
(statearr_29416[(7)] = inst_29385);

return statearr_29416;
})();
var statearr_29417_29434 = state_29405__$1;
(statearr_29417_29434[(2)] = null);

(statearr_29417_29434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (5))){
var inst_29385 = (state_29405[(7)]);
var state_29405__$1 = state_29405;
var statearr_29418_29435 = state_29405__$1;
(statearr_29418_29435[(2)] = inst_29385);

(statearr_29418_29435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (10))){
var inst_29399 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29419_29436 = state_29405__$1;
(statearr_29419_29436[(2)] = inst_29399);

(statearr_29419_29436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (8))){
var inst_29392 = (state_29405[(9)]);
var inst_29395 = cljs.core.deref.call(null,inst_29392);
var state_29405__$1 = state_29405;
var statearr_29420_29437 = state_29405__$1;
(statearr_29420_29437[(2)] = inst_29395);

(statearr_29420_29437[(1)] = (10));


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
});})(c__28638__auto__))
;
return ((function (switch__28526__auto__,c__28638__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28527__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28527__auto____0 = (function (){
var statearr_29424 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29424[(0)] = cljs$core$async$reduce_$_state_machine__28527__auto__);

(statearr_29424[(1)] = (1));

return statearr_29424;
});
var cljs$core$async$reduce_$_state_machine__28527__auto____1 = (function (state_29405){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29425){if((e29425 instanceof Object)){
var ex__28530__auto__ = e29425;
var statearr_29426_29438 = state_29405;
(statearr_29426_29438[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29439 = state_29405;
state_29405 = G__29439;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28527__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28527__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28527__auto____0;
cljs$core$async$reduce_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28527__auto____1;
return cljs$core$async$reduce_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__))
})();
var state__28640__auto__ = (function (){var statearr_29427 = f__28639__auto__.call(null);
(statearr_29427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_29427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__))
);

return c__28638__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__,f__$1){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__,f__$1){
return (function (state_29459){
var state_val_29460 = (state_29459[(1)]);
if((state_val_29460 === (1))){
var inst_29454 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29459__$1 = state_29459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29459__$1,(2),inst_29454);
} else {
if((state_val_29460 === (2))){
var inst_29456 = (state_29459[(2)]);
var inst_29457 = f__$1.call(null,inst_29456);
var state_29459__$1 = state_29459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29459__$1,inst_29457);
} else {
return null;
}
}
});})(c__28638__auto__,f__$1))
;
return ((function (switch__28526__auto__,c__28638__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28527__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28527__auto____0 = (function (){
var statearr_29464 = [null,null,null,null,null,null,null];
(statearr_29464[(0)] = cljs$core$async$transduce_$_state_machine__28527__auto__);

(statearr_29464[(1)] = (1));

return statearr_29464;
});
var cljs$core$async$transduce_$_state_machine__28527__auto____1 = (function (state_29459){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29465){if((e29465 instanceof Object)){
var ex__28530__auto__ = e29465;
var statearr_29466_29468 = state_29459;
(statearr_29466_29468[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29469 = state_29459;
state_29459 = G__29469;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28527__auto__ = function(state_29459){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28527__auto____1.call(this,state_29459);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28527__auto____0;
cljs$core$async$transduce_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28527__auto____1;
return cljs$core$async$transduce_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__,f__$1))
})();
var state__28640__auto__ = (function (){var statearr_29467 = f__28639__auto__.call(null);
(statearr_29467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_29467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__,f__$1))
);

return c__28638__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29470 = [];
var len__27540__auto___29522 = arguments.length;
var i__27541__auto___29523 = (0);
while(true){
if((i__27541__auto___29523 < len__27540__auto___29522)){
args29470.push((arguments[i__27541__auto___29523]));

var G__29524 = (i__27541__auto___29523 + (1));
i__27541__auto___29523 = G__29524;
continue;
} else {
}
break;
}

var G__29472 = args29470.length;
switch (G__29472) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29470.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__){
return (function (state_29497){
var state_val_29498 = (state_29497[(1)]);
if((state_val_29498 === (7))){
var inst_29479 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29499_29526 = state_29497__$1;
(statearr_29499_29526[(2)] = inst_29479);

(statearr_29499_29526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (1))){
var inst_29473 = cljs.core.seq.call(null,coll);
var inst_29474 = inst_29473;
var state_29497__$1 = (function (){var statearr_29500 = state_29497;
(statearr_29500[(7)] = inst_29474);

return statearr_29500;
})();
var statearr_29501_29527 = state_29497__$1;
(statearr_29501_29527[(2)] = null);

(statearr_29501_29527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (4))){
var inst_29474 = (state_29497[(7)]);
var inst_29477 = cljs.core.first.call(null,inst_29474);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29497__$1,(7),ch,inst_29477);
} else {
if((state_val_29498 === (13))){
var inst_29491 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29502_29528 = state_29497__$1;
(statearr_29502_29528[(2)] = inst_29491);

(statearr_29502_29528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (6))){
var inst_29482 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
if(cljs.core.truth_(inst_29482)){
var statearr_29503_29529 = state_29497__$1;
(statearr_29503_29529[(1)] = (8));

} else {
var statearr_29504_29530 = state_29497__$1;
(statearr_29504_29530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (3))){
var inst_29495 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29497__$1,inst_29495);
} else {
if((state_val_29498 === (12))){
var state_29497__$1 = state_29497;
var statearr_29505_29531 = state_29497__$1;
(statearr_29505_29531[(2)] = null);

(statearr_29505_29531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (2))){
var inst_29474 = (state_29497[(7)]);
var state_29497__$1 = state_29497;
if(cljs.core.truth_(inst_29474)){
var statearr_29506_29532 = state_29497__$1;
(statearr_29506_29532[(1)] = (4));

} else {
var statearr_29507_29533 = state_29497__$1;
(statearr_29507_29533[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (11))){
var inst_29488 = cljs.core.async.close_BANG_.call(null,ch);
var state_29497__$1 = state_29497;
var statearr_29508_29534 = state_29497__$1;
(statearr_29508_29534[(2)] = inst_29488);

(statearr_29508_29534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (9))){
var state_29497__$1 = state_29497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29509_29535 = state_29497__$1;
(statearr_29509_29535[(1)] = (11));

} else {
var statearr_29510_29536 = state_29497__$1;
(statearr_29510_29536[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (5))){
var inst_29474 = (state_29497[(7)]);
var state_29497__$1 = state_29497;
var statearr_29511_29537 = state_29497__$1;
(statearr_29511_29537[(2)] = inst_29474);

(statearr_29511_29537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (10))){
var inst_29493 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29512_29538 = state_29497__$1;
(statearr_29512_29538[(2)] = inst_29493);

(statearr_29512_29538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (8))){
var inst_29474 = (state_29497[(7)]);
var inst_29484 = cljs.core.next.call(null,inst_29474);
var inst_29474__$1 = inst_29484;
var state_29497__$1 = (function (){var statearr_29513 = state_29497;
(statearr_29513[(7)] = inst_29474__$1);

return statearr_29513;
})();
var statearr_29514_29539 = state_29497__$1;
(statearr_29514_29539[(2)] = null);

(statearr_29514_29539[(1)] = (2));


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
});})(c__28638__auto__))
;
return ((function (switch__28526__auto__,c__28638__auto__){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_29518 = [null,null,null,null,null,null,null,null];
(statearr_29518[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_29518[(1)] = (1));

return statearr_29518;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_29497){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29519){if((e29519 instanceof Object)){
var ex__28530__auto__ = e29519;
var statearr_29520_29540 = state_29497;
(statearr_29520_29540[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29541 = state_29497;
state_29497 = G__29541;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_29497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_29497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__))
})();
var state__28640__auto__ = (function (){var statearr_29521 = f__28639__auto__.call(null);
(statearr_29521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_29521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__))
);

return c__28638__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27095__auto__ = (((_ == null))?null:_);
var m__27096__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,_);
} else {
var m__27096__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27095__auto__ = (((m == null))?null:m);
var m__27096__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27096__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27095__auto__ = (((m == null))?null:m);
var m__27096__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,m,ch);
} else {
var m__27096__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27095__auto__ = (((m == null))?null:m);
var m__27096__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,m);
} else {
var m__27096__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29767 = (function (ch,cs,meta29768){
this.ch = ch;
this.cs = cs;
this.meta29768 = meta29768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29769,meta29768__$1){
var self__ = this;
var _29769__$1 = this;
return (new cljs.core.async.t_cljs$core$async29767(self__.ch,self__.cs,meta29768__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29769){
var self__ = this;
var _29769__$1 = this;
return self__.meta29768;
});})(cs))
;

cljs.core.async.t_cljs$core$async29767.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29767.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29767.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29768","meta29768",-1153349095,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29767";

cljs.core.async.t_cljs$core$async29767.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async29767");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29767 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29767(ch__$1,cs__$1,meta29768){
return (new cljs.core.async.t_cljs$core$async29767(ch__$1,cs__$1,meta29768));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29767(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28638__auto___29992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___29992,cs,m,dchan,dctr,done){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___29992,cs,m,dchan,dctr,done){
return (function (state_29904){
var state_val_29905 = (state_29904[(1)]);
if((state_val_29905 === (7))){
var inst_29900 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29906_29993 = state_29904__$1;
(statearr_29906_29993[(2)] = inst_29900);

(statearr_29906_29993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (20))){
var inst_29803 = (state_29904[(7)]);
var inst_29815 = cljs.core.first.call(null,inst_29803);
var inst_29816 = cljs.core.nth.call(null,inst_29815,(0),null);
var inst_29817 = cljs.core.nth.call(null,inst_29815,(1),null);
var state_29904__$1 = (function (){var statearr_29907 = state_29904;
(statearr_29907[(8)] = inst_29816);

return statearr_29907;
})();
if(cljs.core.truth_(inst_29817)){
var statearr_29908_29994 = state_29904__$1;
(statearr_29908_29994[(1)] = (22));

} else {
var statearr_29909_29995 = state_29904__$1;
(statearr_29909_29995[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (27))){
var inst_29772 = (state_29904[(9)]);
var inst_29845 = (state_29904[(10)]);
var inst_29847 = (state_29904[(11)]);
var inst_29852 = (state_29904[(12)]);
var inst_29852__$1 = cljs.core._nth.call(null,inst_29845,inst_29847);
var inst_29853 = cljs.core.async.put_BANG_.call(null,inst_29852__$1,inst_29772,done);
var state_29904__$1 = (function (){var statearr_29910 = state_29904;
(statearr_29910[(12)] = inst_29852__$1);

return statearr_29910;
})();
if(cljs.core.truth_(inst_29853)){
var statearr_29911_29996 = state_29904__$1;
(statearr_29911_29996[(1)] = (30));

} else {
var statearr_29912_29997 = state_29904__$1;
(statearr_29912_29997[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (1))){
var state_29904__$1 = state_29904;
var statearr_29913_29998 = state_29904__$1;
(statearr_29913_29998[(2)] = null);

(statearr_29913_29998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (24))){
var inst_29803 = (state_29904[(7)]);
var inst_29822 = (state_29904[(2)]);
var inst_29823 = cljs.core.next.call(null,inst_29803);
var inst_29781 = inst_29823;
var inst_29782 = null;
var inst_29783 = (0);
var inst_29784 = (0);
var state_29904__$1 = (function (){var statearr_29914 = state_29904;
(statearr_29914[(13)] = inst_29782);

(statearr_29914[(14)] = inst_29781);

(statearr_29914[(15)] = inst_29822);

(statearr_29914[(16)] = inst_29783);

(statearr_29914[(17)] = inst_29784);

return statearr_29914;
})();
var statearr_29915_29999 = state_29904__$1;
(statearr_29915_29999[(2)] = null);

(statearr_29915_29999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (39))){
var state_29904__$1 = state_29904;
var statearr_29919_30000 = state_29904__$1;
(statearr_29919_30000[(2)] = null);

(statearr_29919_30000[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (4))){
var inst_29772 = (state_29904[(9)]);
var inst_29772__$1 = (state_29904[(2)]);
var inst_29773 = (inst_29772__$1 == null);
var state_29904__$1 = (function (){var statearr_29920 = state_29904;
(statearr_29920[(9)] = inst_29772__$1);

return statearr_29920;
})();
if(cljs.core.truth_(inst_29773)){
var statearr_29921_30001 = state_29904__$1;
(statearr_29921_30001[(1)] = (5));

} else {
var statearr_29922_30002 = state_29904__$1;
(statearr_29922_30002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (15))){
var inst_29782 = (state_29904[(13)]);
var inst_29781 = (state_29904[(14)]);
var inst_29783 = (state_29904[(16)]);
var inst_29784 = (state_29904[(17)]);
var inst_29799 = (state_29904[(2)]);
var inst_29800 = (inst_29784 + (1));
var tmp29916 = inst_29782;
var tmp29917 = inst_29781;
var tmp29918 = inst_29783;
var inst_29781__$1 = tmp29917;
var inst_29782__$1 = tmp29916;
var inst_29783__$1 = tmp29918;
var inst_29784__$1 = inst_29800;
var state_29904__$1 = (function (){var statearr_29923 = state_29904;
(statearr_29923[(13)] = inst_29782__$1);

(statearr_29923[(14)] = inst_29781__$1);

(statearr_29923[(18)] = inst_29799);

(statearr_29923[(16)] = inst_29783__$1);

(statearr_29923[(17)] = inst_29784__$1);

return statearr_29923;
})();
var statearr_29924_30003 = state_29904__$1;
(statearr_29924_30003[(2)] = null);

(statearr_29924_30003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (21))){
var inst_29826 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29928_30004 = state_29904__$1;
(statearr_29928_30004[(2)] = inst_29826);

(statearr_29928_30004[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (31))){
var inst_29852 = (state_29904[(12)]);
var inst_29856 = done.call(null,null);
var inst_29857 = cljs.core.async.untap_STAR_.call(null,m,inst_29852);
var state_29904__$1 = (function (){var statearr_29929 = state_29904;
(statearr_29929[(19)] = inst_29856);

return statearr_29929;
})();
var statearr_29930_30005 = state_29904__$1;
(statearr_29930_30005[(2)] = inst_29857);

(statearr_29930_30005[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (32))){
var inst_29844 = (state_29904[(20)]);
var inst_29845 = (state_29904[(10)]);
var inst_29847 = (state_29904[(11)]);
var inst_29846 = (state_29904[(21)]);
var inst_29859 = (state_29904[(2)]);
var inst_29860 = (inst_29847 + (1));
var tmp29925 = inst_29844;
var tmp29926 = inst_29845;
var tmp29927 = inst_29846;
var inst_29844__$1 = tmp29925;
var inst_29845__$1 = tmp29926;
var inst_29846__$1 = tmp29927;
var inst_29847__$1 = inst_29860;
var state_29904__$1 = (function (){var statearr_29931 = state_29904;
(statearr_29931[(22)] = inst_29859);

(statearr_29931[(20)] = inst_29844__$1);

(statearr_29931[(10)] = inst_29845__$1);

(statearr_29931[(11)] = inst_29847__$1);

(statearr_29931[(21)] = inst_29846__$1);

return statearr_29931;
})();
var statearr_29932_30006 = state_29904__$1;
(statearr_29932_30006[(2)] = null);

(statearr_29932_30006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (40))){
var inst_29872 = (state_29904[(23)]);
var inst_29876 = done.call(null,null);
var inst_29877 = cljs.core.async.untap_STAR_.call(null,m,inst_29872);
var state_29904__$1 = (function (){var statearr_29933 = state_29904;
(statearr_29933[(24)] = inst_29876);

return statearr_29933;
})();
var statearr_29934_30007 = state_29904__$1;
(statearr_29934_30007[(2)] = inst_29877);

(statearr_29934_30007[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (33))){
var inst_29863 = (state_29904[(25)]);
var inst_29865 = cljs.core.chunked_seq_QMARK_.call(null,inst_29863);
var state_29904__$1 = state_29904;
if(inst_29865){
var statearr_29935_30008 = state_29904__$1;
(statearr_29935_30008[(1)] = (36));

} else {
var statearr_29936_30009 = state_29904__$1;
(statearr_29936_30009[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (13))){
var inst_29793 = (state_29904[(26)]);
var inst_29796 = cljs.core.async.close_BANG_.call(null,inst_29793);
var state_29904__$1 = state_29904;
var statearr_29937_30010 = state_29904__$1;
(statearr_29937_30010[(2)] = inst_29796);

(statearr_29937_30010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (22))){
var inst_29816 = (state_29904[(8)]);
var inst_29819 = cljs.core.async.close_BANG_.call(null,inst_29816);
var state_29904__$1 = state_29904;
var statearr_29938_30011 = state_29904__$1;
(statearr_29938_30011[(2)] = inst_29819);

(statearr_29938_30011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (36))){
var inst_29863 = (state_29904[(25)]);
var inst_29867 = cljs.core.chunk_first.call(null,inst_29863);
var inst_29868 = cljs.core.chunk_rest.call(null,inst_29863);
var inst_29869 = cljs.core.count.call(null,inst_29867);
var inst_29844 = inst_29868;
var inst_29845 = inst_29867;
var inst_29846 = inst_29869;
var inst_29847 = (0);
var state_29904__$1 = (function (){var statearr_29939 = state_29904;
(statearr_29939[(20)] = inst_29844);

(statearr_29939[(10)] = inst_29845);

(statearr_29939[(11)] = inst_29847);

(statearr_29939[(21)] = inst_29846);

return statearr_29939;
})();
var statearr_29940_30012 = state_29904__$1;
(statearr_29940_30012[(2)] = null);

(statearr_29940_30012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (41))){
var inst_29863 = (state_29904[(25)]);
var inst_29879 = (state_29904[(2)]);
var inst_29880 = cljs.core.next.call(null,inst_29863);
var inst_29844 = inst_29880;
var inst_29845 = null;
var inst_29846 = (0);
var inst_29847 = (0);
var state_29904__$1 = (function (){var statearr_29941 = state_29904;
(statearr_29941[(20)] = inst_29844);

(statearr_29941[(10)] = inst_29845);

(statearr_29941[(11)] = inst_29847);

(statearr_29941[(21)] = inst_29846);

(statearr_29941[(27)] = inst_29879);

return statearr_29941;
})();
var statearr_29942_30013 = state_29904__$1;
(statearr_29942_30013[(2)] = null);

(statearr_29942_30013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (43))){
var state_29904__$1 = state_29904;
var statearr_29943_30014 = state_29904__$1;
(statearr_29943_30014[(2)] = null);

(statearr_29943_30014[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (29))){
var inst_29888 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29944_30015 = state_29904__$1;
(statearr_29944_30015[(2)] = inst_29888);

(statearr_29944_30015[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (44))){
var inst_29897 = (state_29904[(2)]);
var state_29904__$1 = (function (){var statearr_29945 = state_29904;
(statearr_29945[(28)] = inst_29897);

return statearr_29945;
})();
var statearr_29946_30016 = state_29904__$1;
(statearr_29946_30016[(2)] = null);

(statearr_29946_30016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (6))){
var inst_29836 = (state_29904[(29)]);
var inst_29835 = cljs.core.deref.call(null,cs);
var inst_29836__$1 = cljs.core.keys.call(null,inst_29835);
var inst_29837 = cljs.core.count.call(null,inst_29836__$1);
var inst_29838 = cljs.core.reset_BANG_.call(null,dctr,inst_29837);
var inst_29843 = cljs.core.seq.call(null,inst_29836__$1);
var inst_29844 = inst_29843;
var inst_29845 = null;
var inst_29846 = (0);
var inst_29847 = (0);
var state_29904__$1 = (function (){var statearr_29947 = state_29904;
(statearr_29947[(30)] = inst_29838);

(statearr_29947[(20)] = inst_29844);

(statearr_29947[(10)] = inst_29845);

(statearr_29947[(11)] = inst_29847);

(statearr_29947[(21)] = inst_29846);

(statearr_29947[(29)] = inst_29836__$1);

return statearr_29947;
})();
var statearr_29948_30017 = state_29904__$1;
(statearr_29948_30017[(2)] = null);

(statearr_29948_30017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (28))){
var inst_29863 = (state_29904[(25)]);
var inst_29844 = (state_29904[(20)]);
var inst_29863__$1 = cljs.core.seq.call(null,inst_29844);
var state_29904__$1 = (function (){var statearr_29949 = state_29904;
(statearr_29949[(25)] = inst_29863__$1);

return statearr_29949;
})();
if(inst_29863__$1){
var statearr_29950_30018 = state_29904__$1;
(statearr_29950_30018[(1)] = (33));

} else {
var statearr_29951_30019 = state_29904__$1;
(statearr_29951_30019[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (25))){
var inst_29847 = (state_29904[(11)]);
var inst_29846 = (state_29904[(21)]);
var inst_29849 = (inst_29847 < inst_29846);
var inst_29850 = inst_29849;
var state_29904__$1 = state_29904;
if(cljs.core.truth_(inst_29850)){
var statearr_29952_30020 = state_29904__$1;
(statearr_29952_30020[(1)] = (27));

} else {
var statearr_29953_30021 = state_29904__$1;
(statearr_29953_30021[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (34))){
var state_29904__$1 = state_29904;
var statearr_29954_30022 = state_29904__$1;
(statearr_29954_30022[(2)] = null);

(statearr_29954_30022[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (17))){
var state_29904__$1 = state_29904;
var statearr_29955_30023 = state_29904__$1;
(statearr_29955_30023[(2)] = null);

(statearr_29955_30023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (3))){
var inst_29902 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29904__$1,inst_29902);
} else {
if((state_val_29905 === (12))){
var inst_29831 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29956_30024 = state_29904__$1;
(statearr_29956_30024[(2)] = inst_29831);

(statearr_29956_30024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (2))){
var state_29904__$1 = state_29904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29904__$1,(4),ch);
} else {
if((state_val_29905 === (23))){
var state_29904__$1 = state_29904;
var statearr_29957_30025 = state_29904__$1;
(statearr_29957_30025[(2)] = null);

(statearr_29957_30025[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (35))){
var inst_29886 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29958_30026 = state_29904__$1;
(statearr_29958_30026[(2)] = inst_29886);

(statearr_29958_30026[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (19))){
var inst_29803 = (state_29904[(7)]);
var inst_29807 = cljs.core.chunk_first.call(null,inst_29803);
var inst_29808 = cljs.core.chunk_rest.call(null,inst_29803);
var inst_29809 = cljs.core.count.call(null,inst_29807);
var inst_29781 = inst_29808;
var inst_29782 = inst_29807;
var inst_29783 = inst_29809;
var inst_29784 = (0);
var state_29904__$1 = (function (){var statearr_29959 = state_29904;
(statearr_29959[(13)] = inst_29782);

(statearr_29959[(14)] = inst_29781);

(statearr_29959[(16)] = inst_29783);

(statearr_29959[(17)] = inst_29784);

return statearr_29959;
})();
var statearr_29960_30027 = state_29904__$1;
(statearr_29960_30027[(2)] = null);

(statearr_29960_30027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (11))){
var inst_29781 = (state_29904[(14)]);
var inst_29803 = (state_29904[(7)]);
var inst_29803__$1 = cljs.core.seq.call(null,inst_29781);
var state_29904__$1 = (function (){var statearr_29961 = state_29904;
(statearr_29961[(7)] = inst_29803__$1);

return statearr_29961;
})();
if(inst_29803__$1){
var statearr_29962_30028 = state_29904__$1;
(statearr_29962_30028[(1)] = (16));

} else {
var statearr_29963_30029 = state_29904__$1;
(statearr_29963_30029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (9))){
var inst_29833 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29964_30030 = state_29904__$1;
(statearr_29964_30030[(2)] = inst_29833);

(statearr_29964_30030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (5))){
var inst_29779 = cljs.core.deref.call(null,cs);
var inst_29780 = cljs.core.seq.call(null,inst_29779);
var inst_29781 = inst_29780;
var inst_29782 = null;
var inst_29783 = (0);
var inst_29784 = (0);
var state_29904__$1 = (function (){var statearr_29965 = state_29904;
(statearr_29965[(13)] = inst_29782);

(statearr_29965[(14)] = inst_29781);

(statearr_29965[(16)] = inst_29783);

(statearr_29965[(17)] = inst_29784);

return statearr_29965;
})();
var statearr_29966_30031 = state_29904__$1;
(statearr_29966_30031[(2)] = null);

(statearr_29966_30031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (14))){
var state_29904__$1 = state_29904;
var statearr_29967_30032 = state_29904__$1;
(statearr_29967_30032[(2)] = null);

(statearr_29967_30032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (45))){
var inst_29894 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29968_30033 = state_29904__$1;
(statearr_29968_30033[(2)] = inst_29894);

(statearr_29968_30033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (26))){
var inst_29836 = (state_29904[(29)]);
var inst_29890 = (state_29904[(2)]);
var inst_29891 = cljs.core.seq.call(null,inst_29836);
var state_29904__$1 = (function (){var statearr_29969 = state_29904;
(statearr_29969[(31)] = inst_29890);

return statearr_29969;
})();
if(inst_29891){
var statearr_29970_30034 = state_29904__$1;
(statearr_29970_30034[(1)] = (42));

} else {
var statearr_29971_30035 = state_29904__$1;
(statearr_29971_30035[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (16))){
var inst_29803 = (state_29904[(7)]);
var inst_29805 = cljs.core.chunked_seq_QMARK_.call(null,inst_29803);
var state_29904__$1 = state_29904;
if(inst_29805){
var statearr_29972_30036 = state_29904__$1;
(statearr_29972_30036[(1)] = (19));

} else {
var statearr_29973_30037 = state_29904__$1;
(statearr_29973_30037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (38))){
var inst_29883 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29974_30038 = state_29904__$1;
(statearr_29974_30038[(2)] = inst_29883);

(statearr_29974_30038[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (30))){
var state_29904__$1 = state_29904;
var statearr_29975_30039 = state_29904__$1;
(statearr_29975_30039[(2)] = null);

(statearr_29975_30039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (10))){
var inst_29782 = (state_29904[(13)]);
var inst_29784 = (state_29904[(17)]);
var inst_29792 = cljs.core._nth.call(null,inst_29782,inst_29784);
var inst_29793 = cljs.core.nth.call(null,inst_29792,(0),null);
var inst_29794 = cljs.core.nth.call(null,inst_29792,(1),null);
var state_29904__$1 = (function (){var statearr_29976 = state_29904;
(statearr_29976[(26)] = inst_29793);

return statearr_29976;
})();
if(cljs.core.truth_(inst_29794)){
var statearr_29977_30040 = state_29904__$1;
(statearr_29977_30040[(1)] = (13));

} else {
var statearr_29978_30041 = state_29904__$1;
(statearr_29978_30041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (18))){
var inst_29829 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29979_30042 = state_29904__$1;
(statearr_29979_30042[(2)] = inst_29829);

(statearr_29979_30042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (42))){
var state_29904__$1 = state_29904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29904__$1,(45),dchan);
} else {
if((state_val_29905 === (37))){
var inst_29863 = (state_29904[(25)]);
var inst_29772 = (state_29904[(9)]);
var inst_29872 = (state_29904[(23)]);
var inst_29872__$1 = cljs.core.first.call(null,inst_29863);
var inst_29873 = cljs.core.async.put_BANG_.call(null,inst_29872__$1,inst_29772,done);
var state_29904__$1 = (function (){var statearr_29980 = state_29904;
(statearr_29980[(23)] = inst_29872__$1);

return statearr_29980;
})();
if(cljs.core.truth_(inst_29873)){
var statearr_29981_30043 = state_29904__$1;
(statearr_29981_30043[(1)] = (39));

} else {
var statearr_29982_30044 = state_29904__$1;
(statearr_29982_30044[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (8))){
var inst_29783 = (state_29904[(16)]);
var inst_29784 = (state_29904[(17)]);
var inst_29786 = (inst_29784 < inst_29783);
var inst_29787 = inst_29786;
var state_29904__$1 = state_29904;
if(cljs.core.truth_(inst_29787)){
var statearr_29983_30045 = state_29904__$1;
(statearr_29983_30045[(1)] = (10));

} else {
var statearr_29984_30046 = state_29904__$1;
(statearr_29984_30046[(1)] = (11));

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
});})(c__28638__auto___29992,cs,m,dchan,dctr,done))
;
return ((function (switch__28526__auto__,c__28638__auto___29992,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28527__auto__ = null;
var cljs$core$async$mult_$_state_machine__28527__auto____0 = (function (){
var statearr_29988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29988[(0)] = cljs$core$async$mult_$_state_machine__28527__auto__);

(statearr_29988[(1)] = (1));

return statearr_29988;
});
var cljs$core$async$mult_$_state_machine__28527__auto____1 = (function (state_29904){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_29904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e29989){if((e29989 instanceof Object)){
var ex__28530__auto__ = e29989;
var statearr_29990_30047 = state_29904;
(statearr_29990_30047[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30048 = state_29904;
state_29904 = G__30048;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28527__auto__ = function(state_29904){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28527__auto____1.call(this,state_29904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28527__auto____0;
cljs$core$async$mult_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28527__auto____1;
return cljs$core$async$mult_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___29992,cs,m,dchan,dctr,done))
})();
var state__28640__auto__ = (function (){var statearr_29991 = f__28639__auto__.call(null);
(statearr_29991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___29992);

return statearr_29991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___29992,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30049 = [];
var len__27540__auto___30052 = arguments.length;
var i__27541__auto___30053 = (0);
while(true){
if((i__27541__auto___30053 < len__27540__auto___30052)){
args30049.push((arguments[i__27541__auto___30053]));

var G__30054 = (i__27541__auto___30053 + (1));
i__27541__auto___30053 = G__30054;
continue;
} else {
}
break;
}

var G__30051 = args30049.length;
switch (G__30051) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30049.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27095__auto__ = (((m == null))?null:m);
var m__27096__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,m,ch);
} else {
var m__27096__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27095__auto__ = (((m == null))?null:m);
var m__27096__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,m,ch);
} else {
var m__27096__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27095__auto__ = (((m == null))?null:m);
var m__27096__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,m);
} else {
var m__27096__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27095__auto__ = (((m == null))?null:m);
var m__27096__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,m,state_map);
} else {
var m__27096__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27095__auto__ = (((m == null))?null:m);
var m__27096__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,m,mode);
} else {
var m__27096__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27547__auto__ = [];
var len__27540__auto___30066 = arguments.length;
var i__27541__auto___30067 = (0);
while(true){
if((i__27541__auto___30067 < len__27540__auto___30066)){
args__27547__auto__.push((arguments[i__27541__auto___30067]));

var G__30068 = (i__27541__auto___30067 + (1));
i__27541__auto___30067 = G__30068;
continue;
} else {
}
break;
}

var argseq__27548__auto__ = ((((3) < args__27547__auto__.length))?(new cljs.core.IndexedSeq(args__27547__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27548__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30060){
var map__30061 = p__30060;
var map__30061__$1 = ((((!((map__30061 == null)))?((((map__30061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30061):map__30061);
var opts = map__30061__$1;
var statearr_30063_30069 = state;
(statearr_30063_30069[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30061,map__30061__$1,opts){
return (function (val){
var statearr_30064_30070 = state;
(statearr_30064_30070[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30061,map__30061__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30065_30071 = state;
(statearr_30065_30071[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30056){
var G__30057 = cljs.core.first.call(null,seq30056);
var seq30056__$1 = cljs.core.next.call(null,seq30056);
var G__30058 = cljs.core.first.call(null,seq30056__$1);
var seq30056__$2 = cljs.core.next.call(null,seq30056__$1);
var G__30059 = cljs.core.first.call(null,seq30056__$2);
var seq30056__$3 = cljs.core.next.call(null,seq30056__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30057,G__30058,G__30059,seq30056__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30239 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30240){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30240 = meta30240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30241,meta30240__$1){
var self__ = this;
var _30241__$1 = this;
return (new cljs.core.async.t_cljs$core$async30239(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30240__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30241){
var self__ = this;
var _30241__$1 = this;
return self__.meta30240;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30240","meta30240",-909939135,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30239";

cljs.core.async.t_cljs$core$async30239.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async30239");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30239 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30239(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30240){
return (new cljs.core.async.t_cljs$core$async30239(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30240));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30239(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28638__auto___30406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___30406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___30406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30343){
var state_val_30344 = (state_30343[(1)]);
if((state_val_30344 === (7))){
var inst_30258 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30345_30407 = state_30343__$1;
(statearr_30345_30407[(2)] = inst_30258);

(statearr_30345_30407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (20))){
var inst_30270 = (state_30343[(7)]);
var state_30343__$1 = state_30343;
var statearr_30346_30408 = state_30343__$1;
(statearr_30346_30408[(2)] = inst_30270);

(statearr_30346_30408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (27))){
var state_30343__$1 = state_30343;
var statearr_30347_30409 = state_30343__$1;
(statearr_30347_30409[(2)] = null);

(statearr_30347_30409[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (1))){
var inst_30245 = (state_30343[(8)]);
var inst_30245__$1 = calc_state.call(null);
var inst_30247 = (inst_30245__$1 == null);
var inst_30248 = cljs.core.not.call(null,inst_30247);
var state_30343__$1 = (function (){var statearr_30348 = state_30343;
(statearr_30348[(8)] = inst_30245__$1);

return statearr_30348;
})();
if(inst_30248){
var statearr_30349_30410 = state_30343__$1;
(statearr_30349_30410[(1)] = (2));

} else {
var statearr_30350_30411 = state_30343__$1;
(statearr_30350_30411[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (24))){
var inst_30294 = (state_30343[(9)]);
var inst_30303 = (state_30343[(10)]);
var inst_30317 = (state_30343[(11)]);
var inst_30317__$1 = inst_30294.call(null,inst_30303);
var state_30343__$1 = (function (){var statearr_30351 = state_30343;
(statearr_30351[(11)] = inst_30317__$1);

return statearr_30351;
})();
if(cljs.core.truth_(inst_30317__$1)){
var statearr_30352_30412 = state_30343__$1;
(statearr_30352_30412[(1)] = (29));

} else {
var statearr_30353_30413 = state_30343__$1;
(statearr_30353_30413[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (4))){
var inst_30261 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30261)){
var statearr_30354_30414 = state_30343__$1;
(statearr_30354_30414[(1)] = (8));

} else {
var statearr_30355_30415 = state_30343__$1;
(statearr_30355_30415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (15))){
var inst_30288 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30288)){
var statearr_30356_30416 = state_30343__$1;
(statearr_30356_30416[(1)] = (19));

} else {
var statearr_30357_30417 = state_30343__$1;
(statearr_30357_30417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (21))){
var inst_30293 = (state_30343[(12)]);
var inst_30293__$1 = (state_30343[(2)]);
var inst_30294 = cljs.core.get.call(null,inst_30293__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30295 = cljs.core.get.call(null,inst_30293__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30296 = cljs.core.get.call(null,inst_30293__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30343__$1 = (function (){var statearr_30358 = state_30343;
(statearr_30358[(12)] = inst_30293__$1);

(statearr_30358[(9)] = inst_30294);

(statearr_30358[(13)] = inst_30295);

return statearr_30358;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30343__$1,(22),inst_30296);
} else {
if((state_val_30344 === (31))){
var inst_30325 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30325)){
var statearr_30359_30418 = state_30343__$1;
(statearr_30359_30418[(1)] = (32));

} else {
var statearr_30360_30419 = state_30343__$1;
(statearr_30360_30419[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (32))){
var inst_30302 = (state_30343[(14)]);
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30343__$1,(35),out,inst_30302);
} else {
if((state_val_30344 === (33))){
var inst_30293 = (state_30343[(12)]);
var inst_30270 = inst_30293;
var state_30343__$1 = (function (){var statearr_30361 = state_30343;
(statearr_30361[(7)] = inst_30270);

return statearr_30361;
})();
var statearr_30362_30420 = state_30343__$1;
(statearr_30362_30420[(2)] = null);

(statearr_30362_30420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (13))){
var inst_30270 = (state_30343[(7)]);
var inst_30277 = inst_30270.cljs$lang$protocol_mask$partition0$;
var inst_30278 = (inst_30277 & (64));
var inst_30279 = inst_30270.cljs$core$ISeq$;
var inst_30280 = (cljs.core.PROTOCOL_SENTINEL === inst_30279);
var inst_30281 = (inst_30278) || (inst_30280);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30281)){
var statearr_30363_30421 = state_30343__$1;
(statearr_30363_30421[(1)] = (16));

} else {
var statearr_30364_30422 = state_30343__$1;
(statearr_30364_30422[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (22))){
var inst_30303 = (state_30343[(10)]);
var inst_30302 = (state_30343[(14)]);
var inst_30301 = (state_30343[(2)]);
var inst_30302__$1 = cljs.core.nth.call(null,inst_30301,(0),null);
var inst_30303__$1 = cljs.core.nth.call(null,inst_30301,(1),null);
var inst_30304 = (inst_30302__$1 == null);
var inst_30305 = cljs.core._EQ_.call(null,inst_30303__$1,change);
var inst_30306 = (inst_30304) || (inst_30305);
var state_30343__$1 = (function (){var statearr_30365 = state_30343;
(statearr_30365[(10)] = inst_30303__$1);

(statearr_30365[(14)] = inst_30302__$1);

return statearr_30365;
})();
if(cljs.core.truth_(inst_30306)){
var statearr_30366_30423 = state_30343__$1;
(statearr_30366_30423[(1)] = (23));

} else {
var statearr_30367_30424 = state_30343__$1;
(statearr_30367_30424[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (36))){
var inst_30293 = (state_30343[(12)]);
var inst_30270 = inst_30293;
var state_30343__$1 = (function (){var statearr_30368 = state_30343;
(statearr_30368[(7)] = inst_30270);

return statearr_30368;
})();
var statearr_30369_30425 = state_30343__$1;
(statearr_30369_30425[(2)] = null);

(statearr_30369_30425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (29))){
var inst_30317 = (state_30343[(11)]);
var state_30343__$1 = state_30343;
var statearr_30370_30426 = state_30343__$1;
(statearr_30370_30426[(2)] = inst_30317);

(statearr_30370_30426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (6))){
var state_30343__$1 = state_30343;
var statearr_30371_30427 = state_30343__$1;
(statearr_30371_30427[(2)] = false);

(statearr_30371_30427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (28))){
var inst_30313 = (state_30343[(2)]);
var inst_30314 = calc_state.call(null);
var inst_30270 = inst_30314;
var state_30343__$1 = (function (){var statearr_30372 = state_30343;
(statearr_30372[(7)] = inst_30270);

(statearr_30372[(15)] = inst_30313);

return statearr_30372;
})();
var statearr_30373_30428 = state_30343__$1;
(statearr_30373_30428[(2)] = null);

(statearr_30373_30428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (25))){
var inst_30339 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30374_30429 = state_30343__$1;
(statearr_30374_30429[(2)] = inst_30339);

(statearr_30374_30429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (34))){
var inst_30337 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30375_30430 = state_30343__$1;
(statearr_30375_30430[(2)] = inst_30337);

(statearr_30375_30430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (17))){
var state_30343__$1 = state_30343;
var statearr_30376_30431 = state_30343__$1;
(statearr_30376_30431[(2)] = false);

(statearr_30376_30431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (3))){
var state_30343__$1 = state_30343;
var statearr_30377_30432 = state_30343__$1;
(statearr_30377_30432[(2)] = false);

(statearr_30377_30432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (12))){
var inst_30341 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30343__$1,inst_30341);
} else {
if((state_val_30344 === (2))){
var inst_30245 = (state_30343[(8)]);
var inst_30250 = inst_30245.cljs$lang$protocol_mask$partition0$;
var inst_30251 = (inst_30250 & (64));
var inst_30252 = inst_30245.cljs$core$ISeq$;
var inst_30253 = (cljs.core.PROTOCOL_SENTINEL === inst_30252);
var inst_30254 = (inst_30251) || (inst_30253);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30254)){
var statearr_30378_30433 = state_30343__$1;
(statearr_30378_30433[(1)] = (5));

} else {
var statearr_30379_30434 = state_30343__$1;
(statearr_30379_30434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (23))){
var inst_30302 = (state_30343[(14)]);
var inst_30308 = (inst_30302 == null);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30308)){
var statearr_30380_30435 = state_30343__$1;
(statearr_30380_30435[(1)] = (26));

} else {
var statearr_30381_30436 = state_30343__$1;
(statearr_30381_30436[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (35))){
var inst_30328 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30328)){
var statearr_30382_30437 = state_30343__$1;
(statearr_30382_30437[(1)] = (36));

} else {
var statearr_30383_30438 = state_30343__$1;
(statearr_30383_30438[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (19))){
var inst_30270 = (state_30343[(7)]);
var inst_30290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30270);
var state_30343__$1 = state_30343;
var statearr_30384_30439 = state_30343__$1;
(statearr_30384_30439[(2)] = inst_30290);

(statearr_30384_30439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (11))){
var inst_30270 = (state_30343[(7)]);
var inst_30274 = (inst_30270 == null);
var inst_30275 = cljs.core.not.call(null,inst_30274);
var state_30343__$1 = state_30343;
if(inst_30275){
var statearr_30385_30440 = state_30343__$1;
(statearr_30385_30440[(1)] = (13));

} else {
var statearr_30386_30441 = state_30343__$1;
(statearr_30386_30441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (9))){
var inst_30245 = (state_30343[(8)]);
var state_30343__$1 = state_30343;
var statearr_30387_30442 = state_30343__$1;
(statearr_30387_30442[(2)] = inst_30245);

(statearr_30387_30442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (5))){
var state_30343__$1 = state_30343;
var statearr_30388_30443 = state_30343__$1;
(statearr_30388_30443[(2)] = true);

(statearr_30388_30443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (14))){
var state_30343__$1 = state_30343;
var statearr_30389_30444 = state_30343__$1;
(statearr_30389_30444[(2)] = false);

(statearr_30389_30444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (26))){
var inst_30303 = (state_30343[(10)]);
var inst_30310 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30303);
var state_30343__$1 = state_30343;
var statearr_30390_30445 = state_30343__$1;
(statearr_30390_30445[(2)] = inst_30310);

(statearr_30390_30445[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (16))){
var state_30343__$1 = state_30343;
var statearr_30391_30446 = state_30343__$1;
(statearr_30391_30446[(2)] = true);

(statearr_30391_30446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (38))){
var inst_30333 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30392_30447 = state_30343__$1;
(statearr_30392_30447[(2)] = inst_30333);

(statearr_30392_30447[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (30))){
var inst_30294 = (state_30343[(9)]);
var inst_30303 = (state_30343[(10)]);
var inst_30295 = (state_30343[(13)]);
var inst_30320 = cljs.core.empty_QMARK_.call(null,inst_30294);
var inst_30321 = inst_30295.call(null,inst_30303);
var inst_30322 = cljs.core.not.call(null,inst_30321);
var inst_30323 = (inst_30320) && (inst_30322);
var state_30343__$1 = state_30343;
var statearr_30393_30448 = state_30343__$1;
(statearr_30393_30448[(2)] = inst_30323);

(statearr_30393_30448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (10))){
var inst_30245 = (state_30343[(8)]);
var inst_30266 = (state_30343[(2)]);
var inst_30267 = cljs.core.get.call(null,inst_30266,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30268 = cljs.core.get.call(null,inst_30266,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30269 = cljs.core.get.call(null,inst_30266,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30270 = inst_30245;
var state_30343__$1 = (function (){var statearr_30394 = state_30343;
(statearr_30394[(16)] = inst_30269);

(statearr_30394[(7)] = inst_30270);

(statearr_30394[(17)] = inst_30268);

(statearr_30394[(18)] = inst_30267);

return statearr_30394;
})();
var statearr_30395_30449 = state_30343__$1;
(statearr_30395_30449[(2)] = null);

(statearr_30395_30449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (18))){
var inst_30285 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30396_30450 = state_30343__$1;
(statearr_30396_30450[(2)] = inst_30285);

(statearr_30396_30450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (37))){
var state_30343__$1 = state_30343;
var statearr_30397_30451 = state_30343__$1;
(statearr_30397_30451[(2)] = null);

(statearr_30397_30451[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (8))){
var inst_30245 = (state_30343[(8)]);
var inst_30263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30245);
var state_30343__$1 = state_30343;
var statearr_30398_30452 = state_30343__$1;
(statearr_30398_30452[(2)] = inst_30263);

(statearr_30398_30452[(1)] = (10));


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
});})(c__28638__auto___30406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28526__auto__,c__28638__auto___30406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28527__auto__ = null;
var cljs$core$async$mix_$_state_machine__28527__auto____0 = (function (){
var statearr_30402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30402[(0)] = cljs$core$async$mix_$_state_machine__28527__auto__);

(statearr_30402[(1)] = (1));

return statearr_30402;
});
var cljs$core$async$mix_$_state_machine__28527__auto____1 = (function (state_30343){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_30343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e30403){if((e30403 instanceof Object)){
var ex__28530__auto__ = e30403;
var statearr_30404_30453 = state_30343;
(statearr_30404_30453[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30454 = state_30343;
state_30343 = G__30454;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28527__auto__ = function(state_30343){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28527__auto____1.call(this,state_30343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28527__auto____0;
cljs$core$async$mix_$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28527__auto____1;
return cljs$core$async$mix_$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___30406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28640__auto__ = (function (){var statearr_30405 = f__28639__auto__.call(null);
(statearr_30405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___30406);

return statearr_30405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___30406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27095__auto__ = (((p == null))?null:p);
var m__27096__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27096__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27095__auto__ = (((p == null))?null:p);
var m__27096__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,p,v,ch);
} else {
var m__27096__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30455 = [];
var len__27540__auto___30458 = arguments.length;
var i__27541__auto___30459 = (0);
while(true){
if((i__27541__auto___30459 < len__27540__auto___30458)){
args30455.push((arguments[i__27541__auto___30459]));

var G__30460 = (i__27541__auto___30459 + (1));
i__27541__auto___30459 = G__30460;
continue;
} else {
}
break;
}

var G__30457 = args30455.length;
switch (G__30457) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30455.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27095__auto__ = (((p == null))?null:p);
var m__27096__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,p);
} else {
var m__27096__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27095__auto__ = (((p == null))?null:p);
var m__27096__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27095__auto__)]);
if(!((m__27096__auto__ == null))){
return m__27096__auto__.call(null,p,v);
} else {
var m__27096__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27096__auto____$1 == null))){
return m__27096__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30463 = [];
var len__27540__auto___30588 = arguments.length;
var i__27541__auto___30589 = (0);
while(true){
if((i__27541__auto___30589 < len__27540__auto___30588)){
args30463.push((arguments[i__27541__auto___30589]));

var G__30590 = (i__27541__auto___30589 + (1));
i__27541__auto___30589 = G__30590;
continue;
} else {
}
break;
}

var G__30465 = args30463.length;
switch (G__30465) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30463.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26427__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26427__auto__)){
return or__26427__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26427__auto__,mults){
return (function (p1__30462_SHARP_){
if(cljs.core.truth_(p1__30462_SHARP_.call(null,topic))){
return p1__30462_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30462_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26427__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30466 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30467){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30467 = meta30467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30468,meta30467__$1){
var self__ = this;
var _30468__$1 = this;
return (new cljs.core.async.t_cljs$core$async30466(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30467__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30468){
var self__ = this;
var _30468__$1 = this;
return self__.meta30467;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30466.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30467","meta30467",795890632,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30466";

cljs.core.async.t_cljs$core$async30466.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async30466");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30466 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30466(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30467){
return (new cljs.core.async.t_cljs$core$async30466(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30467));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30466(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28638__auto___30592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___30592,mults,ensure_mult,p){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___30592,mults,ensure_mult,p){
return (function (state_30540){
var state_val_30541 = (state_30540[(1)]);
if((state_val_30541 === (7))){
var inst_30536 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30542_30593 = state_30540__$1;
(statearr_30542_30593[(2)] = inst_30536);

(statearr_30542_30593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (20))){
var state_30540__$1 = state_30540;
var statearr_30543_30594 = state_30540__$1;
(statearr_30543_30594[(2)] = null);

(statearr_30543_30594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (1))){
var state_30540__$1 = state_30540;
var statearr_30544_30595 = state_30540__$1;
(statearr_30544_30595[(2)] = null);

(statearr_30544_30595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (24))){
var inst_30519 = (state_30540[(7)]);
var inst_30528 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30519);
var state_30540__$1 = state_30540;
var statearr_30545_30596 = state_30540__$1;
(statearr_30545_30596[(2)] = inst_30528);

(statearr_30545_30596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (4))){
var inst_30471 = (state_30540[(8)]);
var inst_30471__$1 = (state_30540[(2)]);
var inst_30472 = (inst_30471__$1 == null);
var state_30540__$1 = (function (){var statearr_30546 = state_30540;
(statearr_30546[(8)] = inst_30471__$1);

return statearr_30546;
})();
if(cljs.core.truth_(inst_30472)){
var statearr_30547_30597 = state_30540__$1;
(statearr_30547_30597[(1)] = (5));

} else {
var statearr_30548_30598 = state_30540__$1;
(statearr_30548_30598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (15))){
var inst_30513 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30549_30599 = state_30540__$1;
(statearr_30549_30599[(2)] = inst_30513);

(statearr_30549_30599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (21))){
var inst_30533 = (state_30540[(2)]);
var state_30540__$1 = (function (){var statearr_30550 = state_30540;
(statearr_30550[(9)] = inst_30533);

return statearr_30550;
})();
var statearr_30551_30600 = state_30540__$1;
(statearr_30551_30600[(2)] = null);

(statearr_30551_30600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (13))){
var inst_30495 = (state_30540[(10)]);
var inst_30497 = cljs.core.chunked_seq_QMARK_.call(null,inst_30495);
var state_30540__$1 = state_30540;
if(inst_30497){
var statearr_30552_30601 = state_30540__$1;
(statearr_30552_30601[(1)] = (16));

} else {
var statearr_30553_30602 = state_30540__$1;
(statearr_30553_30602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (22))){
var inst_30525 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30525)){
var statearr_30554_30603 = state_30540__$1;
(statearr_30554_30603[(1)] = (23));

} else {
var statearr_30555_30604 = state_30540__$1;
(statearr_30555_30604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (6))){
var inst_30519 = (state_30540[(7)]);
var inst_30471 = (state_30540[(8)]);
var inst_30521 = (state_30540[(11)]);
var inst_30519__$1 = topic_fn.call(null,inst_30471);
var inst_30520 = cljs.core.deref.call(null,mults);
var inst_30521__$1 = cljs.core.get.call(null,inst_30520,inst_30519__$1);
var state_30540__$1 = (function (){var statearr_30556 = state_30540;
(statearr_30556[(7)] = inst_30519__$1);

(statearr_30556[(11)] = inst_30521__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30521__$1)){
var statearr_30557_30605 = state_30540__$1;
(statearr_30557_30605[(1)] = (19));

} else {
var statearr_30558_30606 = state_30540__$1;
(statearr_30558_30606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (25))){
var inst_30530 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30559_30607 = state_30540__$1;
(statearr_30559_30607[(2)] = inst_30530);

(statearr_30559_30607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (17))){
var inst_30495 = (state_30540[(10)]);
var inst_30504 = cljs.core.first.call(null,inst_30495);
var inst_30505 = cljs.core.async.muxch_STAR_.call(null,inst_30504);
var inst_30506 = cljs.core.async.close_BANG_.call(null,inst_30505);
var inst_30507 = cljs.core.next.call(null,inst_30495);
var inst_30481 = inst_30507;
var inst_30482 = null;
var inst_30483 = (0);
var inst_30484 = (0);
var state_30540__$1 = (function (){var statearr_30560 = state_30540;
(statearr_30560[(12)] = inst_30481);

(statearr_30560[(13)] = inst_30483);

(statearr_30560[(14)] = inst_30484);

(statearr_30560[(15)] = inst_30482);

(statearr_30560[(16)] = inst_30506);

return statearr_30560;
})();
var statearr_30561_30608 = state_30540__$1;
(statearr_30561_30608[(2)] = null);

(statearr_30561_30608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (3))){
var inst_30538 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30540__$1,inst_30538);
} else {
if((state_val_30541 === (12))){
var inst_30515 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30562_30609 = state_30540__$1;
(statearr_30562_30609[(2)] = inst_30515);

(statearr_30562_30609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (2))){
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30540__$1,(4),ch);
} else {
if((state_val_30541 === (23))){
var state_30540__$1 = state_30540;
var statearr_30563_30610 = state_30540__$1;
(statearr_30563_30610[(2)] = null);

(statearr_30563_30610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (19))){
var inst_30471 = (state_30540[(8)]);
var inst_30521 = (state_30540[(11)]);
var inst_30523 = cljs.core.async.muxch_STAR_.call(null,inst_30521);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30540__$1,(22),inst_30523,inst_30471);
} else {
if((state_val_30541 === (11))){
var inst_30481 = (state_30540[(12)]);
var inst_30495 = (state_30540[(10)]);
var inst_30495__$1 = cljs.core.seq.call(null,inst_30481);
var state_30540__$1 = (function (){var statearr_30564 = state_30540;
(statearr_30564[(10)] = inst_30495__$1);

return statearr_30564;
})();
if(inst_30495__$1){
var statearr_30565_30611 = state_30540__$1;
(statearr_30565_30611[(1)] = (13));

} else {
var statearr_30566_30612 = state_30540__$1;
(statearr_30566_30612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (9))){
var inst_30517 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30567_30613 = state_30540__$1;
(statearr_30567_30613[(2)] = inst_30517);

(statearr_30567_30613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (5))){
var inst_30478 = cljs.core.deref.call(null,mults);
var inst_30479 = cljs.core.vals.call(null,inst_30478);
var inst_30480 = cljs.core.seq.call(null,inst_30479);
var inst_30481 = inst_30480;
var inst_30482 = null;
var inst_30483 = (0);
var inst_30484 = (0);
var state_30540__$1 = (function (){var statearr_30568 = state_30540;
(statearr_30568[(12)] = inst_30481);

(statearr_30568[(13)] = inst_30483);

(statearr_30568[(14)] = inst_30484);

(statearr_30568[(15)] = inst_30482);

return statearr_30568;
})();
var statearr_30569_30614 = state_30540__$1;
(statearr_30569_30614[(2)] = null);

(statearr_30569_30614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (14))){
var state_30540__$1 = state_30540;
var statearr_30573_30615 = state_30540__$1;
(statearr_30573_30615[(2)] = null);

(statearr_30573_30615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (16))){
var inst_30495 = (state_30540[(10)]);
var inst_30499 = cljs.core.chunk_first.call(null,inst_30495);
var inst_30500 = cljs.core.chunk_rest.call(null,inst_30495);
var inst_30501 = cljs.core.count.call(null,inst_30499);
var inst_30481 = inst_30500;
var inst_30482 = inst_30499;
var inst_30483 = inst_30501;
var inst_30484 = (0);
var state_30540__$1 = (function (){var statearr_30574 = state_30540;
(statearr_30574[(12)] = inst_30481);

(statearr_30574[(13)] = inst_30483);

(statearr_30574[(14)] = inst_30484);

(statearr_30574[(15)] = inst_30482);

return statearr_30574;
})();
var statearr_30575_30616 = state_30540__$1;
(statearr_30575_30616[(2)] = null);

(statearr_30575_30616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (10))){
var inst_30481 = (state_30540[(12)]);
var inst_30483 = (state_30540[(13)]);
var inst_30484 = (state_30540[(14)]);
var inst_30482 = (state_30540[(15)]);
var inst_30489 = cljs.core._nth.call(null,inst_30482,inst_30484);
var inst_30490 = cljs.core.async.muxch_STAR_.call(null,inst_30489);
var inst_30491 = cljs.core.async.close_BANG_.call(null,inst_30490);
var inst_30492 = (inst_30484 + (1));
var tmp30570 = inst_30481;
var tmp30571 = inst_30483;
var tmp30572 = inst_30482;
var inst_30481__$1 = tmp30570;
var inst_30482__$1 = tmp30572;
var inst_30483__$1 = tmp30571;
var inst_30484__$1 = inst_30492;
var state_30540__$1 = (function (){var statearr_30576 = state_30540;
(statearr_30576[(12)] = inst_30481__$1);

(statearr_30576[(13)] = inst_30483__$1);

(statearr_30576[(17)] = inst_30491);

(statearr_30576[(14)] = inst_30484__$1);

(statearr_30576[(15)] = inst_30482__$1);

return statearr_30576;
})();
var statearr_30577_30617 = state_30540__$1;
(statearr_30577_30617[(2)] = null);

(statearr_30577_30617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (18))){
var inst_30510 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30578_30618 = state_30540__$1;
(statearr_30578_30618[(2)] = inst_30510);

(statearr_30578_30618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (8))){
var inst_30483 = (state_30540[(13)]);
var inst_30484 = (state_30540[(14)]);
var inst_30486 = (inst_30484 < inst_30483);
var inst_30487 = inst_30486;
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30487)){
var statearr_30579_30619 = state_30540__$1;
(statearr_30579_30619[(1)] = (10));

} else {
var statearr_30580_30620 = state_30540__$1;
(statearr_30580_30620[(1)] = (11));

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
});})(c__28638__auto___30592,mults,ensure_mult,p))
;
return ((function (switch__28526__auto__,c__28638__auto___30592,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_30584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30584[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_30584[(1)] = (1));

return statearr_30584;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_30540){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_30540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e30585){if((e30585 instanceof Object)){
var ex__28530__auto__ = e30585;
var statearr_30586_30621 = state_30540;
(statearr_30586_30621[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30622 = state_30540;
state_30540 = G__30622;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_30540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_30540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___30592,mults,ensure_mult,p))
})();
var state__28640__auto__ = (function (){var statearr_30587 = f__28639__auto__.call(null);
(statearr_30587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___30592);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___30592,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30623 = [];
var len__27540__auto___30626 = arguments.length;
var i__27541__auto___30627 = (0);
while(true){
if((i__27541__auto___30627 < len__27540__auto___30626)){
args30623.push((arguments[i__27541__auto___30627]));

var G__30628 = (i__27541__auto___30627 + (1));
i__27541__auto___30627 = G__30628;
continue;
} else {
}
break;
}

var G__30625 = args30623.length;
switch (G__30625) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30623.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30630 = [];
var len__27540__auto___30633 = arguments.length;
var i__27541__auto___30634 = (0);
while(true){
if((i__27541__auto___30634 < len__27540__auto___30633)){
args30630.push((arguments[i__27541__auto___30634]));

var G__30635 = (i__27541__auto___30634 + (1));
i__27541__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var G__30632 = args30630.length;
switch (G__30632) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30630.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30637 = [];
var len__27540__auto___30708 = arguments.length;
var i__27541__auto___30709 = (0);
while(true){
if((i__27541__auto___30709 < len__27540__auto___30708)){
args30637.push((arguments[i__27541__auto___30709]));

var G__30710 = (i__27541__auto___30709 + (1));
i__27541__auto___30709 = G__30710;
continue;
} else {
}
break;
}

var G__30639 = args30637.length;
switch (G__30639) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30637.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28638__auto___30712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___30712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___30712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30678){
var state_val_30679 = (state_30678[(1)]);
if((state_val_30679 === (7))){
var state_30678__$1 = state_30678;
var statearr_30680_30713 = state_30678__$1;
(statearr_30680_30713[(2)] = null);

(statearr_30680_30713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (1))){
var state_30678__$1 = state_30678;
var statearr_30681_30714 = state_30678__$1;
(statearr_30681_30714[(2)] = null);

(statearr_30681_30714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (4))){
var inst_30642 = (state_30678[(7)]);
var inst_30644 = (inst_30642 < cnt);
var state_30678__$1 = state_30678;
if(cljs.core.truth_(inst_30644)){
var statearr_30682_30715 = state_30678__$1;
(statearr_30682_30715[(1)] = (6));

} else {
var statearr_30683_30716 = state_30678__$1;
(statearr_30683_30716[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (15))){
var inst_30674 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
var statearr_30684_30717 = state_30678__$1;
(statearr_30684_30717[(2)] = inst_30674);

(statearr_30684_30717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (13))){
var inst_30667 = cljs.core.async.close_BANG_.call(null,out);
var state_30678__$1 = state_30678;
var statearr_30685_30718 = state_30678__$1;
(statearr_30685_30718[(2)] = inst_30667);

(statearr_30685_30718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (6))){
var state_30678__$1 = state_30678;
var statearr_30686_30719 = state_30678__$1;
(statearr_30686_30719[(2)] = null);

(statearr_30686_30719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (3))){
var inst_30676 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30678__$1,inst_30676);
} else {
if((state_val_30679 === (12))){
var inst_30664 = (state_30678[(8)]);
var inst_30664__$1 = (state_30678[(2)]);
var inst_30665 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30664__$1);
var state_30678__$1 = (function (){var statearr_30687 = state_30678;
(statearr_30687[(8)] = inst_30664__$1);

return statearr_30687;
})();
if(cljs.core.truth_(inst_30665)){
var statearr_30688_30720 = state_30678__$1;
(statearr_30688_30720[(1)] = (13));

} else {
var statearr_30689_30721 = state_30678__$1;
(statearr_30689_30721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (2))){
var inst_30641 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30642 = (0);
var state_30678__$1 = (function (){var statearr_30690 = state_30678;
(statearr_30690[(7)] = inst_30642);

(statearr_30690[(9)] = inst_30641);

return statearr_30690;
})();
var statearr_30691_30722 = state_30678__$1;
(statearr_30691_30722[(2)] = null);

(statearr_30691_30722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (11))){
var inst_30642 = (state_30678[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30678,(10),Object,null,(9));
var inst_30651 = chs__$1.call(null,inst_30642);
var inst_30652 = done.call(null,inst_30642);
var inst_30653 = cljs.core.async.take_BANG_.call(null,inst_30651,inst_30652);
var state_30678__$1 = state_30678;
var statearr_30692_30723 = state_30678__$1;
(statearr_30692_30723[(2)] = inst_30653);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (9))){
var inst_30642 = (state_30678[(7)]);
var inst_30655 = (state_30678[(2)]);
var inst_30656 = (inst_30642 + (1));
var inst_30642__$1 = inst_30656;
var state_30678__$1 = (function (){var statearr_30693 = state_30678;
(statearr_30693[(7)] = inst_30642__$1);

(statearr_30693[(10)] = inst_30655);

return statearr_30693;
})();
var statearr_30694_30724 = state_30678__$1;
(statearr_30694_30724[(2)] = null);

(statearr_30694_30724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (5))){
var inst_30662 = (state_30678[(2)]);
var state_30678__$1 = (function (){var statearr_30695 = state_30678;
(statearr_30695[(11)] = inst_30662);

return statearr_30695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30678__$1,(12),dchan);
} else {
if((state_val_30679 === (14))){
var inst_30664 = (state_30678[(8)]);
var inst_30669 = cljs.core.apply.call(null,f,inst_30664);
var state_30678__$1 = state_30678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30678__$1,(16),out,inst_30669);
} else {
if((state_val_30679 === (16))){
var inst_30671 = (state_30678[(2)]);
var state_30678__$1 = (function (){var statearr_30696 = state_30678;
(statearr_30696[(12)] = inst_30671);

return statearr_30696;
})();
var statearr_30697_30725 = state_30678__$1;
(statearr_30697_30725[(2)] = null);

(statearr_30697_30725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (10))){
var inst_30646 = (state_30678[(2)]);
var inst_30647 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30678__$1 = (function (){var statearr_30698 = state_30678;
(statearr_30698[(13)] = inst_30646);

return statearr_30698;
})();
var statearr_30699_30726 = state_30678__$1;
(statearr_30699_30726[(2)] = inst_30647);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (8))){
var inst_30660 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
var statearr_30700_30727 = state_30678__$1;
(statearr_30700_30727[(2)] = inst_30660);

(statearr_30700_30727[(1)] = (5));


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
});})(c__28638__auto___30712,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28526__auto__,c__28638__auto___30712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_30704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30704[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_30704[(1)] = (1));

return statearr_30704;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_30678){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_30678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e30705){if((e30705 instanceof Object)){
var ex__28530__auto__ = e30705;
var statearr_30706_30728 = state_30678;
(statearr_30706_30728[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30729 = state_30678;
state_30678 = G__30729;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_30678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_30678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___30712,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28640__auto__ = (function (){var statearr_30707 = f__28639__auto__.call(null);
(statearr_30707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___30712);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___30712,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30731 = [];
var len__27540__auto___30789 = arguments.length;
var i__27541__auto___30790 = (0);
while(true){
if((i__27541__auto___30790 < len__27540__auto___30789)){
args30731.push((arguments[i__27541__auto___30790]));

var G__30791 = (i__27541__auto___30790 + (1));
i__27541__auto___30790 = G__30791;
continue;
} else {
}
break;
}

var G__30733 = args30731.length;
switch (G__30733) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30731.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28638__auto___30793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___30793,out){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___30793,out){
return (function (state_30765){
var state_val_30766 = (state_30765[(1)]);
if((state_val_30766 === (7))){
var inst_30745 = (state_30765[(7)]);
var inst_30744 = (state_30765[(8)]);
var inst_30744__$1 = (state_30765[(2)]);
var inst_30745__$1 = cljs.core.nth.call(null,inst_30744__$1,(0),null);
var inst_30746 = cljs.core.nth.call(null,inst_30744__$1,(1),null);
var inst_30747 = (inst_30745__$1 == null);
var state_30765__$1 = (function (){var statearr_30767 = state_30765;
(statearr_30767[(9)] = inst_30746);

(statearr_30767[(7)] = inst_30745__$1);

(statearr_30767[(8)] = inst_30744__$1);

return statearr_30767;
})();
if(cljs.core.truth_(inst_30747)){
var statearr_30768_30794 = state_30765__$1;
(statearr_30768_30794[(1)] = (8));

} else {
var statearr_30769_30795 = state_30765__$1;
(statearr_30769_30795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (1))){
var inst_30734 = cljs.core.vec.call(null,chs);
var inst_30735 = inst_30734;
var state_30765__$1 = (function (){var statearr_30770 = state_30765;
(statearr_30770[(10)] = inst_30735);

return statearr_30770;
})();
var statearr_30771_30796 = state_30765__$1;
(statearr_30771_30796[(2)] = null);

(statearr_30771_30796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (4))){
var inst_30735 = (state_30765[(10)]);
var state_30765__$1 = state_30765;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30765__$1,(7),inst_30735);
} else {
if((state_val_30766 === (6))){
var inst_30761 = (state_30765[(2)]);
var state_30765__$1 = state_30765;
var statearr_30772_30797 = state_30765__$1;
(statearr_30772_30797[(2)] = inst_30761);

(statearr_30772_30797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (3))){
var inst_30763 = (state_30765[(2)]);
var state_30765__$1 = state_30765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30765__$1,inst_30763);
} else {
if((state_val_30766 === (2))){
var inst_30735 = (state_30765[(10)]);
var inst_30737 = cljs.core.count.call(null,inst_30735);
var inst_30738 = (inst_30737 > (0));
var state_30765__$1 = state_30765;
if(cljs.core.truth_(inst_30738)){
var statearr_30774_30798 = state_30765__$1;
(statearr_30774_30798[(1)] = (4));

} else {
var statearr_30775_30799 = state_30765__$1;
(statearr_30775_30799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (11))){
var inst_30735 = (state_30765[(10)]);
var inst_30754 = (state_30765[(2)]);
var tmp30773 = inst_30735;
var inst_30735__$1 = tmp30773;
var state_30765__$1 = (function (){var statearr_30776 = state_30765;
(statearr_30776[(11)] = inst_30754);

(statearr_30776[(10)] = inst_30735__$1);

return statearr_30776;
})();
var statearr_30777_30800 = state_30765__$1;
(statearr_30777_30800[(2)] = null);

(statearr_30777_30800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (9))){
var inst_30745 = (state_30765[(7)]);
var state_30765__$1 = state_30765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30765__$1,(11),out,inst_30745);
} else {
if((state_val_30766 === (5))){
var inst_30759 = cljs.core.async.close_BANG_.call(null,out);
var state_30765__$1 = state_30765;
var statearr_30778_30801 = state_30765__$1;
(statearr_30778_30801[(2)] = inst_30759);

(statearr_30778_30801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (10))){
var inst_30757 = (state_30765[(2)]);
var state_30765__$1 = state_30765;
var statearr_30779_30802 = state_30765__$1;
(statearr_30779_30802[(2)] = inst_30757);

(statearr_30779_30802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30766 === (8))){
var inst_30746 = (state_30765[(9)]);
var inst_30745 = (state_30765[(7)]);
var inst_30735 = (state_30765[(10)]);
var inst_30744 = (state_30765[(8)]);
var inst_30749 = (function (){var cs = inst_30735;
var vec__30740 = inst_30744;
var v = inst_30745;
var c = inst_30746;
return ((function (cs,vec__30740,v,c,inst_30746,inst_30745,inst_30735,inst_30744,state_val_30766,c__28638__auto___30793,out){
return (function (p1__30730_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30730_SHARP_);
});
;})(cs,vec__30740,v,c,inst_30746,inst_30745,inst_30735,inst_30744,state_val_30766,c__28638__auto___30793,out))
})();
var inst_30750 = cljs.core.filterv.call(null,inst_30749,inst_30735);
var inst_30735__$1 = inst_30750;
var state_30765__$1 = (function (){var statearr_30780 = state_30765;
(statearr_30780[(10)] = inst_30735__$1);

return statearr_30780;
})();
var statearr_30781_30803 = state_30765__$1;
(statearr_30781_30803[(2)] = null);

(statearr_30781_30803[(1)] = (2));


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
});})(c__28638__auto___30793,out))
;
return ((function (switch__28526__auto__,c__28638__auto___30793,out){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_30785 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30785[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_30785[(1)] = (1));

return statearr_30785;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_30765){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_30765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e30786){if((e30786 instanceof Object)){
var ex__28530__auto__ = e30786;
var statearr_30787_30804 = state_30765;
(statearr_30787_30804[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30805 = state_30765;
state_30765 = G__30805;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_30765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_30765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___30793,out))
})();
var state__28640__auto__ = (function (){var statearr_30788 = f__28639__auto__.call(null);
(statearr_30788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___30793);

return statearr_30788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___30793,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30806 = [];
var len__27540__auto___30855 = arguments.length;
var i__27541__auto___30856 = (0);
while(true){
if((i__27541__auto___30856 < len__27540__auto___30855)){
args30806.push((arguments[i__27541__auto___30856]));

var G__30857 = (i__27541__auto___30856 + (1));
i__27541__auto___30856 = G__30857;
continue;
} else {
}
break;
}

var G__30808 = args30806.length;
switch (G__30808) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30806.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28638__auto___30859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___30859,out){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___30859,out){
return (function (state_30832){
var state_val_30833 = (state_30832[(1)]);
if((state_val_30833 === (7))){
var inst_30814 = (state_30832[(7)]);
var inst_30814__$1 = (state_30832[(2)]);
var inst_30815 = (inst_30814__$1 == null);
var inst_30816 = cljs.core.not.call(null,inst_30815);
var state_30832__$1 = (function (){var statearr_30834 = state_30832;
(statearr_30834[(7)] = inst_30814__$1);

return statearr_30834;
})();
if(inst_30816){
var statearr_30835_30860 = state_30832__$1;
(statearr_30835_30860[(1)] = (8));

} else {
var statearr_30836_30861 = state_30832__$1;
(statearr_30836_30861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30833 === (1))){
var inst_30809 = (0);
var state_30832__$1 = (function (){var statearr_30837 = state_30832;
(statearr_30837[(8)] = inst_30809);

return statearr_30837;
})();
var statearr_30838_30862 = state_30832__$1;
(statearr_30838_30862[(2)] = null);

(statearr_30838_30862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30833 === (4))){
var state_30832__$1 = state_30832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30832__$1,(7),ch);
} else {
if((state_val_30833 === (6))){
var inst_30827 = (state_30832[(2)]);
var state_30832__$1 = state_30832;
var statearr_30839_30863 = state_30832__$1;
(statearr_30839_30863[(2)] = inst_30827);

(statearr_30839_30863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30833 === (3))){
var inst_30829 = (state_30832[(2)]);
var inst_30830 = cljs.core.async.close_BANG_.call(null,out);
var state_30832__$1 = (function (){var statearr_30840 = state_30832;
(statearr_30840[(9)] = inst_30829);

return statearr_30840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30832__$1,inst_30830);
} else {
if((state_val_30833 === (2))){
var inst_30809 = (state_30832[(8)]);
var inst_30811 = (inst_30809 < n);
var state_30832__$1 = state_30832;
if(cljs.core.truth_(inst_30811)){
var statearr_30841_30864 = state_30832__$1;
(statearr_30841_30864[(1)] = (4));

} else {
var statearr_30842_30865 = state_30832__$1;
(statearr_30842_30865[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30833 === (11))){
var inst_30809 = (state_30832[(8)]);
var inst_30819 = (state_30832[(2)]);
var inst_30820 = (inst_30809 + (1));
var inst_30809__$1 = inst_30820;
var state_30832__$1 = (function (){var statearr_30843 = state_30832;
(statearr_30843[(10)] = inst_30819);

(statearr_30843[(8)] = inst_30809__$1);

return statearr_30843;
})();
var statearr_30844_30866 = state_30832__$1;
(statearr_30844_30866[(2)] = null);

(statearr_30844_30866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30833 === (9))){
var state_30832__$1 = state_30832;
var statearr_30845_30867 = state_30832__$1;
(statearr_30845_30867[(2)] = null);

(statearr_30845_30867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30833 === (5))){
var state_30832__$1 = state_30832;
var statearr_30846_30868 = state_30832__$1;
(statearr_30846_30868[(2)] = null);

(statearr_30846_30868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30833 === (10))){
var inst_30824 = (state_30832[(2)]);
var state_30832__$1 = state_30832;
var statearr_30847_30869 = state_30832__$1;
(statearr_30847_30869[(2)] = inst_30824);

(statearr_30847_30869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30833 === (8))){
var inst_30814 = (state_30832[(7)]);
var state_30832__$1 = state_30832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30832__$1,(11),out,inst_30814);
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
});})(c__28638__auto___30859,out))
;
return ((function (switch__28526__auto__,c__28638__auto___30859,out){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_30851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30851[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_30851[(1)] = (1));

return statearr_30851;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_30832){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_30832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e30852){if((e30852 instanceof Object)){
var ex__28530__auto__ = e30852;
var statearr_30853_30870 = state_30832;
(statearr_30853_30870[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30871 = state_30832;
state_30832 = G__30871;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_30832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_30832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___30859,out))
})();
var state__28640__auto__ = (function (){var statearr_30854 = f__28639__auto__.call(null);
(statearr_30854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___30859);

return statearr_30854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___30859,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30879 = (function (f,ch,meta30880){
this.f = f;
this.ch = ch;
this.meta30880 = meta30880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30881,meta30880__$1){
var self__ = this;
var _30881__$1 = this;
return (new cljs.core.async.t_cljs$core$async30879(self__.f,self__.ch,meta30880__$1));
});

cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30881){
var self__ = this;
var _30881__$1 = this;
return self__.meta30880;
});

cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30882 = (function (f,ch,meta30880,_,fn1,meta30883){
this.f = f;
this.ch = ch;
this.meta30880 = meta30880;
this._ = _;
this.fn1 = fn1;
this.meta30883 = meta30883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30884,meta30883__$1){
var self__ = this;
var _30884__$1 = this;
return (new cljs.core.async.t_cljs$core$async30882(self__.f,self__.ch,self__.meta30880,self__._,self__.fn1,meta30883__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30884){
var self__ = this;
var _30884__$1 = this;
return self__.meta30883;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30872_SHARP_){
return f1.call(null,(((p1__30872_SHARP_ == null))?null:self__.f.call(null,p1__30872_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30882.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30880","meta30880",1611166732,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30879","cljs.core.async/t_cljs$core$async30879",-1876158737,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30883","meta30883",-208343412,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30882";

cljs.core.async.t_cljs$core$async30882.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async30882");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30882 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30882(f__$1,ch__$1,meta30880__$1,___$2,fn1__$1,meta30883){
return (new cljs.core.async.t_cljs$core$async30882(f__$1,ch__$1,meta30880__$1,___$2,fn1__$1,meta30883));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30882(self__.f,self__.ch,self__.meta30880,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26415__auto__ = ret;
if(cljs.core.truth_(and__26415__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26415__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30880","meta30880",1611166732,null)], null);
});

cljs.core.async.t_cljs$core$async30879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30879";

cljs.core.async.t_cljs$core$async30879.cljs$lang$ctorPrWriter = (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async30879");
});

cljs.core.async.__GT_t_cljs$core$async30879 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30879(f__$1,ch__$1,meta30880){
return (new cljs.core.async.t_cljs$core$async30879(f__$1,ch__$1,meta30880));
});

}

return (new cljs.core.async.t_cljs$core$async30879(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30888 = (function (f,ch,meta30889){
this.f = f;
this.ch = ch;
this.meta30889 = meta30889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30890,meta30889__$1){
var self__ = this;
var _30890__$1 = this;
return (new cljs.core.async.t_cljs$core$async30888(self__.f,self__.ch,meta30889__$1));
});

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30890){
var self__ = this;
var _30890__$1 = this;
return self__.meta30889;
});

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30889","meta30889",1643013802,null)], null);
});

cljs.core.async.t_cljs$core$async30888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30888";

cljs.core.async.t_cljs$core$async30888.cljs$lang$ctorPrWriter = (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async30888");
});

cljs.core.async.__GT_t_cljs$core$async30888 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30888(f__$1,ch__$1,meta30889){
return (new cljs.core.async.t_cljs$core$async30888(f__$1,ch__$1,meta30889));
});

}

return (new cljs.core.async.t_cljs$core$async30888(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30894 = (function (p,ch,meta30895){
this.p = p;
this.ch = ch;
this.meta30895 = meta30895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30896,meta30895__$1){
var self__ = this;
var _30896__$1 = this;
return (new cljs.core.async.t_cljs$core$async30894(self__.p,self__.ch,meta30895__$1));
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30896){
var self__ = this;
var _30896__$1 = this;
return self__.meta30895;
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30895","meta30895",-444132911,null)], null);
});

cljs.core.async.t_cljs$core$async30894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30894";

cljs.core.async.t_cljs$core$async30894.cljs$lang$ctorPrWriter = (function (this__27038__auto__,writer__27039__auto__,opt__27040__auto__){
return cljs.core._write.call(null,writer__27039__auto__,"cljs.core.async/t_cljs$core$async30894");
});

cljs.core.async.__GT_t_cljs$core$async30894 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30894(p__$1,ch__$1,meta30895){
return (new cljs.core.async.t_cljs$core$async30894(p__$1,ch__$1,meta30895));
});

}

return (new cljs.core.async.t_cljs$core$async30894(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30897 = [];
var len__27540__auto___30941 = arguments.length;
var i__27541__auto___30942 = (0);
while(true){
if((i__27541__auto___30942 < len__27540__auto___30941)){
args30897.push((arguments[i__27541__auto___30942]));

var G__30943 = (i__27541__auto___30942 + (1));
i__27541__auto___30942 = G__30943;
continue;
} else {
}
break;
}

var G__30899 = args30897.length;
switch (G__30899) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30897.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28638__auto___30945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___30945,out){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___30945,out){
return (function (state_30920){
var state_val_30921 = (state_30920[(1)]);
if((state_val_30921 === (7))){
var inst_30916 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_30922_30946 = state_30920__$1;
(statearr_30922_30946[(2)] = inst_30916);

(statearr_30922_30946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (1))){
var state_30920__$1 = state_30920;
var statearr_30923_30947 = state_30920__$1;
(statearr_30923_30947[(2)] = null);

(statearr_30923_30947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (4))){
var inst_30902 = (state_30920[(7)]);
var inst_30902__$1 = (state_30920[(2)]);
var inst_30903 = (inst_30902__$1 == null);
var state_30920__$1 = (function (){var statearr_30924 = state_30920;
(statearr_30924[(7)] = inst_30902__$1);

return statearr_30924;
})();
if(cljs.core.truth_(inst_30903)){
var statearr_30925_30948 = state_30920__$1;
(statearr_30925_30948[(1)] = (5));

} else {
var statearr_30926_30949 = state_30920__$1;
(statearr_30926_30949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (6))){
var inst_30902 = (state_30920[(7)]);
var inst_30907 = p.call(null,inst_30902);
var state_30920__$1 = state_30920;
if(cljs.core.truth_(inst_30907)){
var statearr_30927_30950 = state_30920__$1;
(statearr_30927_30950[(1)] = (8));

} else {
var statearr_30928_30951 = state_30920__$1;
(statearr_30928_30951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (3))){
var inst_30918 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30920__$1,inst_30918);
} else {
if((state_val_30921 === (2))){
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30920__$1,(4),ch);
} else {
if((state_val_30921 === (11))){
var inst_30910 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_30929_30952 = state_30920__$1;
(statearr_30929_30952[(2)] = inst_30910);

(statearr_30929_30952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (9))){
var state_30920__$1 = state_30920;
var statearr_30930_30953 = state_30920__$1;
(statearr_30930_30953[(2)] = null);

(statearr_30930_30953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (5))){
var inst_30905 = cljs.core.async.close_BANG_.call(null,out);
var state_30920__$1 = state_30920;
var statearr_30931_30954 = state_30920__$1;
(statearr_30931_30954[(2)] = inst_30905);

(statearr_30931_30954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (10))){
var inst_30913 = (state_30920[(2)]);
var state_30920__$1 = (function (){var statearr_30932 = state_30920;
(statearr_30932[(8)] = inst_30913);

return statearr_30932;
})();
var statearr_30933_30955 = state_30920__$1;
(statearr_30933_30955[(2)] = null);

(statearr_30933_30955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (8))){
var inst_30902 = (state_30920[(7)]);
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30920__$1,(11),out,inst_30902);
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
});})(c__28638__auto___30945,out))
;
return ((function (switch__28526__auto__,c__28638__auto___30945,out){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_30937 = [null,null,null,null,null,null,null,null,null];
(statearr_30937[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_30937[(1)] = (1));

return statearr_30937;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_30920){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_30920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e30938){if((e30938 instanceof Object)){
var ex__28530__auto__ = e30938;
var statearr_30939_30956 = state_30920;
(statearr_30939_30956[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30957 = state_30920;
state_30920 = G__30957;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_30920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_30920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___30945,out))
})();
var state__28640__auto__ = (function (){var statearr_30940 = f__28639__auto__.call(null);
(statearr_30940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___30945);

return statearr_30940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___30945,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30958 = [];
var len__27540__auto___30961 = arguments.length;
var i__27541__auto___30962 = (0);
while(true){
if((i__27541__auto___30962 < len__27540__auto___30961)){
args30958.push((arguments[i__27541__auto___30962]));

var G__30963 = (i__27541__auto___30962 + (1));
i__27541__auto___30962 = G__30963;
continue;
} else {
}
break;
}

var G__30960 = args30958.length;
switch (G__30960) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30958.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28638__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto__){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto__){
return (function (state_31130){
var state_val_31131 = (state_31130[(1)]);
if((state_val_31131 === (7))){
var inst_31126 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31132_31173 = state_31130__$1;
(statearr_31132_31173[(2)] = inst_31126);

(statearr_31132_31173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (20))){
var inst_31096 = (state_31130[(7)]);
var inst_31107 = (state_31130[(2)]);
var inst_31108 = cljs.core.next.call(null,inst_31096);
var inst_31082 = inst_31108;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31130__$1 = (function (){var statearr_31133 = state_31130;
(statearr_31133[(8)] = inst_31107);

(statearr_31133[(9)] = inst_31083);

(statearr_31133[(10)] = inst_31084);

(statearr_31133[(11)] = inst_31085);

(statearr_31133[(12)] = inst_31082);

return statearr_31133;
})();
var statearr_31134_31174 = state_31130__$1;
(statearr_31134_31174[(2)] = null);

(statearr_31134_31174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (1))){
var state_31130__$1 = state_31130;
var statearr_31135_31175 = state_31130__$1;
(statearr_31135_31175[(2)] = null);

(statearr_31135_31175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (4))){
var inst_31071 = (state_31130[(13)]);
var inst_31071__$1 = (state_31130[(2)]);
var inst_31072 = (inst_31071__$1 == null);
var state_31130__$1 = (function (){var statearr_31136 = state_31130;
(statearr_31136[(13)] = inst_31071__$1);

return statearr_31136;
})();
if(cljs.core.truth_(inst_31072)){
var statearr_31137_31176 = state_31130__$1;
(statearr_31137_31176[(1)] = (5));

} else {
var statearr_31138_31177 = state_31130__$1;
(statearr_31138_31177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (15))){
var state_31130__$1 = state_31130;
var statearr_31142_31178 = state_31130__$1;
(statearr_31142_31178[(2)] = null);

(statearr_31142_31178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (21))){
var state_31130__$1 = state_31130;
var statearr_31143_31179 = state_31130__$1;
(statearr_31143_31179[(2)] = null);

(statearr_31143_31179[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (13))){
var inst_31083 = (state_31130[(9)]);
var inst_31084 = (state_31130[(10)]);
var inst_31085 = (state_31130[(11)]);
var inst_31082 = (state_31130[(12)]);
var inst_31092 = (state_31130[(2)]);
var inst_31093 = (inst_31085 + (1));
var tmp31139 = inst_31083;
var tmp31140 = inst_31084;
var tmp31141 = inst_31082;
var inst_31082__$1 = tmp31141;
var inst_31083__$1 = tmp31139;
var inst_31084__$1 = tmp31140;
var inst_31085__$1 = inst_31093;
var state_31130__$1 = (function (){var statearr_31144 = state_31130;
(statearr_31144[(14)] = inst_31092);

(statearr_31144[(9)] = inst_31083__$1);

(statearr_31144[(10)] = inst_31084__$1);

(statearr_31144[(11)] = inst_31085__$1);

(statearr_31144[(12)] = inst_31082__$1);

return statearr_31144;
})();
var statearr_31145_31180 = state_31130__$1;
(statearr_31145_31180[(2)] = null);

(statearr_31145_31180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (22))){
var state_31130__$1 = state_31130;
var statearr_31146_31181 = state_31130__$1;
(statearr_31146_31181[(2)] = null);

(statearr_31146_31181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (6))){
var inst_31071 = (state_31130[(13)]);
var inst_31080 = f.call(null,inst_31071);
var inst_31081 = cljs.core.seq.call(null,inst_31080);
var inst_31082 = inst_31081;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31130__$1 = (function (){var statearr_31147 = state_31130;
(statearr_31147[(9)] = inst_31083);

(statearr_31147[(10)] = inst_31084);

(statearr_31147[(11)] = inst_31085);

(statearr_31147[(12)] = inst_31082);

return statearr_31147;
})();
var statearr_31148_31182 = state_31130__$1;
(statearr_31148_31182[(2)] = null);

(statearr_31148_31182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (17))){
var inst_31096 = (state_31130[(7)]);
var inst_31100 = cljs.core.chunk_first.call(null,inst_31096);
var inst_31101 = cljs.core.chunk_rest.call(null,inst_31096);
var inst_31102 = cljs.core.count.call(null,inst_31100);
var inst_31082 = inst_31101;
var inst_31083 = inst_31100;
var inst_31084 = inst_31102;
var inst_31085 = (0);
var state_31130__$1 = (function (){var statearr_31149 = state_31130;
(statearr_31149[(9)] = inst_31083);

(statearr_31149[(10)] = inst_31084);

(statearr_31149[(11)] = inst_31085);

(statearr_31149[(12)] = inst_31082);

return statearr_31149;
})();
var statearr_31150_31183 = state_31130__$1;
(statearr_31150_31183[(2)] = null);

(statearr_31150_31183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (3))){
var inst_31128 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31130__$1,inst_31128);
} else {
if((state_val_31131 === (12))){
var inst_31116 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31151_31184 = state_31130__$1;
(statearr_31151_31184[(2)] = inst_31116);

(statearr_31151_31184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (2))){
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31130__$1,(4),in$);
} else {
if((state_val_31131 === (23))){
var inst_31124 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31152_31185 = state_31130__$1;
(statearr_31152_31185[(2)] = inst_31124);

(statearr_31152_31185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (19))){
var inst_31111 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31153_31186 = state_31130__$1;
(statearr_31153_31186[(2)] = inst_31111);

(statearr_31153_31186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (11))){
var inst_31096 = (state_31130[(7)]);
var inst_31082 = (state_31130[(12)]);
var inst_31096__$1 = cljs.core.seq.call(null,inst_31082);
var state_31130__$1 = (function (){var statearr_31154 = state_31130;
(statearr_31154[(7)] = inst_31096__$1);

return statearr_31154;
})();
if(inst_31096__$1){
var statearr_31155_31187 = state_31130__$1;
(statearr_31155_31187[(1)] = (14));

} else {
var statearr_31156_31188 = state_31130__$1;
(statearr_31156_31188[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (9))){
var inst_31118 = (state_31130[(2)]);
var inst_31119 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31130__$1 = (function (){var statearr_31157 = state_31130;
(statearr_31157[(15)] = inst_31118);

return statearr_31157;
})();
if(cljs.core.truth_(inst_31119)){
var statearr_31158_31189 = state_31130__$1;
(statearr_31158_31189[(1)] = (21));

} else {
var statearr_31159_31190 = state_31130__$1;
(statearr_31159_31190[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (5))){
var inst_31074 = cljs.core.async.close_BANG_.call(null,out);
var state_31130__$1 = state_31130;
var statearr_31160_31191 = state_31130__$1;
(statearr_31160_31191[(2)] = inst_31074);

(statearr_31160_31191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (14))){
var inst_31096 = (state_31130[(7)]);
var inst_31098 = cljs.core.chunked_seq_QMARK_.call(null,inst_31096);
var state_31130__$1 = state_31130;
if(inst_31098){
var statearr_31161_31192 = state_31130__$1;
(statearr_31161_31192[(1)] = (17));

} else {
var statearr_31162_31193 = state_31130__$1;
(statearr_31162_31193[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (16))){
var inst_31114 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31163_31194 = state_31130__$1;
(statearr_31163_31194[(2)] = inst_31114);

(statearr_31163_31194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (10))){
var inst_31083 = (state_31130[(9)]);
var inst_31085 = (state_31130[(11)]);
var inst_31090 = cljs.core._nth.call(null,inst_31083,inst_31085);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31130__$1,(13),out,inst_31090);
} else {
if((state_val_31131 === (18))){
var inst_31096 = (state_31130[(7)]);
var inst_31105 = cljs.core.first.call(null,inst_31096);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31130__$1,(20),out,inst_31105);
} else {
if((state_val_31131 === (8))){
var inst_31084 = (state_31130[(10)]);
var inst_31085 = (state_31130[(11)]);
var inst_31087 = (inst_31085 < inst_31084);
var inst_31088 = inst_31087;
var state_31130__$1 = state_31130;
if(cljs.core.truth_(inst_31088)){
var statearr_31164_31195 = state_31130__$1;
(statearr_31164_31195[(1)] = (10));

} else {
var statearr_31165_31196 = state_31130__$1;
(statearr_31165_31196[(1)] = (11));

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
});})(c__28638__auto__))
;
return ((function (switch__28526__auto__,c__28638__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28527__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28527__auto____0 = (function (){
var statearr_31169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31169[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28527__auto__);

(statearr_31169[(1)] = (1));

return statearr_31169;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28527__auto____1 = (function (state_31130){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_31130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e31170){if((e31170 instanceof Object)){
var ex__28530__auto__ = e31170;
var statearr_31171_31197 = state_31130;
(statearr_31171_31197[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31198 = state_31130;
state_31130 = G__31198;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28527__auto__ = function(state_31130){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28527__auto____1.call(this,state_31130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28527__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28527__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto__))
})();
var state__28640__auto__ = (function (){var statearr_31172 = f__28639__auto__.call(null);
(statearr_31172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto__);

return statearr_31172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto__))
);

return c__28638__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31199 = [];
var len__27540__auto___31202 = arguments.length;
var i__27541__auto___31203 = (0);
while(true){
if((i__27541__auto___31203 < len__27540__auto___31202)){
args31199.push((arguments[i__27541__auto___31203]));

var G__31204 = (i__27541__auto___31203 + (1));
i__27541__auto___31203 = G__31204;
continue;
} else {
}
break;
}

var G__31201 = args31199.length;
switch (G__31201) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31199.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31206 = [];
var len__27540__auto___31209 = arguments.length;
var i__27541__auto___31210 = (0);
while(true){
if((i__27541__auto___31210 < len__27540__auto___31209)){
args31206.push((arguments[i__27541__auto___31210]));

var G__31211 = (i__27541__auto___31210 + (1));
i__27541__auto___31210 = G__31211;
continue;
} else {
}
break;
}

var G__31208 = args31206.length;
switch (G__31208) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31206.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31213 = [];
var len__27540__auto___31264 = arguments.length;
var i__27541__auto___31265 = (0);
while(true){
if((i__27541__auto___31265 < len__27540__auto___31264)){
args31213.push((arguments[i__27541__auto___31265]));

var G__31266 = (i__27541__auto___31265 + (1));
i__27541__auto___31265 = G__31266;
continue;
} else {
}
break;
}

var G__31215 = args31213.length;
switch (G__31215) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31213.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28638__auto___31268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___31268,out){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___31268,out){
return (function (state_31239){
var state_val_31240 = (state_31239[(1)]);
if((state_val_31240 === (7))){
var inst_31234 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31241_31269 = state_31239__$1;
(statearr_31241_31269[(2)] = inst_31234);

(statearr_31241_31269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (1))){
var inst_31216 = null;
var state_31239__$1 = (function (){var statearr_31242 = state_31239;
(statearr_31242[(7)] = inst_31216);

return statearr_31242;
})();
var statearr_31243_31270 = state_31239__$1;
(statearr_31243_31270[(2)] = null);

(statearr_31243_31270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (4))){
var inst_31219 = (state_31239[(8)]);
var inst_31219__$1 = (state_31239[(2)]);
var inst_31220 = (inst_31219__$1 == null);
var inst_31221 = cljs.core.not.call(null,inst_31220);
var state_31239__$1 = (function (){var statearr_31244 = state_31239;
(statearr_31244[(8)] = inst_31219__$1);

return statearr_31244;
})();
if(inst_31221){
var statearr_31245_31271 = state_31239__$1;
(statearr_31245_31271[(1)] = (5));

} else {
var statearr_31246_31272 = state_31239__$1;
(statearr_31246_31272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (6))){
var state_31239__$1 = state_31239;
var statearr_31247_31273 = state_31239__$1;
(statearr_31247_31273[(2)] = null);

(statearr_31247_31273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (3))){
var inst_31236 = (state_31239[(2)]);
var inst_31237 = cljs.core.async.close_BANG_.call(null,out);
var state_31239__$1 = (function (){var statearr_31248 = state_31239;
(statearr_31248[(9)] = inst_31236);

return statearr_31248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31239__$1,inst_31237);
} else {
if((state_val_31240 === (2))){
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31239__$1,(4),ch);
} else {
if((state_val_31240 === (11))){
var inst_31219 = (state_31239[(8)]);
var inst_31228 = (state_31239[(2)]);
var inst_31216 = inst_31219;
var state_31239__$1 = (function (){var statearr_31249 = state_31239;
(statearr_31249[(10)] = inst_31228);

(statearr_31249[(7)] = inst_31216);

return statearr_31249;
})();
var statearr_31250_31274 = state_31239__$1;
(statearr_31250_31274[(2)] = null);

(statearr_31250_31274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (9))){
var inst_31219 = (state_31239[(8)]);
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31239__$1,(11),out,inst_31219);
} else {
if((state_val_31240 === (5))){
var inst_31219 = (state_31239[(8)]);
var inst_31216 = (state_31239[(7)]);
var inst_31223 = cljs.core._EQ_.call(null,inst_31219,inst_31216);
var state_31239__$1 = state_31239;
if(inst_31223){
var statearr_31252_31275 = state_31239__$1;
(statearr_31252_31275[(1)] = (8));

} else {
var statearr_31253_31276 = state_31239__$1;
(statearr_31253_31276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (10))){
var inst_31231 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31254_31277 = state_31239__$1;
(statearr_31254_31277[(2)] = inst_31231);

(statearr_31254_31277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (8))){
var inst_31216 = (state_31239[(7)]);
var tmp31251 = inst_31216;
var inst_31216__$1 = tmp31251;
var state_31239__$1 = (function (){var statearr_31255 = state_31239;
(statearr_31255[(7)] = inst_31216__$1);

return statearr_31255;
})();
var statearr_31256_31278 = state_31239__$1;
(statearr_31256_31278[(2)] = null);

(statearr_31256_31278[(1)] = (2));


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
});})(c__28638__auto___31268,out))
;
return ((function (switch__28526__auto__,c__28638__auto___31268,out){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_31260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31260[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_31260[(1)] = (1));

return statearr_31260;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_31239){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_31239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e31261){if((e31261 instanceof Object)){
var ex__28530__auto__ = e31261;
var statearr_31262_31279 = state_31239;
(statearr_31262_31279[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31280 = state_31239;
state_31239 = G__31280;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_31239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_31239);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___31268,out))
})();
var state__28640__auto__ = (function (){var statearr_31263 = f__28639__auto__.call(null);
(statearr_31263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___31268);

return statearr_31263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___31268,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31281 = [];
var len__27540__auto___31351 = arguments.length;
var i__27541__auto___31352 = (0);
while(true){
if((i__27541__auto___31352 < len__27540__auto___31351)){
args31281.push((arguments[i__27541__auto___31352]));

var G__31353 = (i__27541__auto___31352 + (1));
i__27541__auto___31352 = G__31353;
continue;
} else {
}
break;
}

var G__31283 = args31281.length;
switch (G__31283) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31281.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28638__auto___31355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___31355,out){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___31355,out){
return (function (state_31321){
var state_val_31322 = (state_31321[(1)]);
if((state_val_31322 === (7))){
var inst_31317 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31323_31356 = state_31321__$1;
(statearr_31323_31356[(2)] = inst_31317);

(statearr_31323_31356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (1))){
var inst_31284 = (new Array(n));
var inst_31285 = inst_31284;
var inst_31286 = (0);
var state_31321__$1 = (function (){var statearr_31324 = state_31321;
(statearr_31324[(7)] = inst_31285);

(statearr_31324[(8)] = inst_31286);

return statearr_31324;
})();
var statearr_31325_31357 = state_31321__$1;
(statearr_31325_31357[(2)] = null);

(statearr_31325_31357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (4))){
var inst_31289 = (state_31321[(9)]);
var inst_31289__$1 = (state_31321[(2)]);
var inst_31290 = (inst_31289__$1 == null);
var inst_31291 = cljs.core.not.call(null,inst_31290);
var state_31321__$1 = (function (){var statearr_31326 = state_31321;
(statearr_31326[(9)] = inst_31289__$1);

return statearr_31326;
})();
if(inst_31291){
var statearr_31327_31358 = state_31321__$1;
(statearr_31327_31358[(1)] = (5));

} else {
var statearr_31328_31359 = state_31321__$1;
(statearr_31328_31359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (15))){
var inst_31311 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31329_31360 = state_31321__$1;
(statearr_31329_31360[(2)] = inst_31311);

(statearr_31329_31360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (13))){
var state_31321__$1 = state_31321;
var statearr_31330_31361 = state_31321__$1;
(statearr_31330_31361[(2)] = null);

(statearr_31330_31361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (6))){
var inst_31286 = (state_31321[(8)]);
var inst_31307 = (inst_31286 > (0));
var state_31321__$1 = state_31321;
if(cljs.core.truth_(inst_31307)){
var statearr_31331_31362 = state_31321__$1;
(statearr_31331_31362[(1)] = (12));

} else {
var statearr_31332_31363 = state_31321__$1;
(statearr_31332_31363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (3))){
var inst_31319 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31321__$1,inst_31319);
} else {
if((state_val_31322 === (12))){
var inst_31285 = (state_31321[(7)]);
var inst_31309 = cljs.core.vec.call(null,inst_31285);
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31321__$1,(15),out,inst_31309);
} else {
if((state_val_31322 === (2))){
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31321__$1,(4),ch);
} else {
if((state_val_31322 === (11))){
var inst_31301 = (state_31321[(2)]);
var inst_31302 = (new Array(n));
var inst_31285 = inst_31302;
var inst_31286 = (0);
var state_31321__$1 = (function (){var statearr_31333 = state_31321;
(statearr_31333[(10)] = inst_31301);

(statearr_31333[(7)] = inst_31285);

(statearr_31333[(8)] = inst_31286);

return statearr_31333;
})();
var statearr_31334_31364 = state_31321__$1;
(statearr_31334_31364[(2)] = null);

(statearr_31334_31364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (9))){
var inst_31285 = (state_31321[(7)]);
var inst_31299 = cljs.core.vec.call(null,inst_31285);
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31321__$1,(11),out,inst_31299);
} else {
if((state_val_31322 === (5))){
var inst_31285 = (state_31321[(7)]);
var inst_31294 = (state_31321[(11)]);
var inst_31289 = (state_31321[(9)]);
var inst_31286 = (state_31321[(8)]);
var inst_31293 = (inst_31285[inst_31286] = inst_31289);
var inst_31294__$1 = (inst_31286 + (1));
var inst_31295 = (inst_31294__$1 < n);
var state_31321__$1 = (function (){var statearr_31335 = state_31321;
(statearr_31335[(11)] = inst_31294__$1);

(statearr_31335[(12)] = inst_31293);

return statearr_31335;
})();
if(cljs.core.truth_(inst_31295)){
var statearr_31336_31365 = state_31321__$1;
(statearr_31336_31365[(1)] = (8));

} else {
var statearr_31337_31366 = state_31321__$1;
(statearr_31337_31366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (14))){
var inst_31314 = (state_31321[(2)]);
var inst_31315 = cljs.core.async.close_BANG_.call(null,out);
var state_31321__$1 = (function (){var statearr_31339 = state_31321;
(statearr_31339[(13)] = inst_31314);

return statearr_31339;
})();
var statearr_31340_31367 = state_31321__$1;
(statearr_31340_31367[(2)] = inst_31315);

(statearr_31340_31367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (10))){
var inst_31305 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31341_31368 = state_31321__$1;
(statearr_31341_31368[(2)] = inst_31305);

(statearr_31341_31368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (8))){
var inst_31285 = (state_31321[(7)]);
var inst_31294 = (state_31321[(11)]);
var tmp31338 = inst_31285;
var inst_31285__$1 = tmp31338;
var inst_31286 = inst_31294;
var state_31321__$1 = (function (){var statearr_31342 = state_31321;
(statearr_31342[(7)] = inst_31285__$1);

(statearr_31342[(8)] = inst_31286);

return statearr_31342;
})();
var statearr_31343_31369 = state_31321__$1;
(statearr_31343_31369[(2)] = null);

(statearr_31343_31369[(1)] = (2));


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
});})(c__28638__auto___31355,out))
;
return ((function (switch__28526__auto__,c__28638__auto___31355,out){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_31347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31347[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_31347[(1)] = (1));

return statearr_31347;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_31321){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_31321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e31348){if((e31348 instanceof Object)){
var ex__28530__auto__ = e31348;
var statearr_31349_31370 = state_31321;
(statearr_31349_31370[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31371 = state_31321;
state_31321 = G__31371;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_31321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_31321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___31355,out))
})();
var state__28640__auto__ = (function (){var statearr_31350 = f__28639__auto__.call(null);
(statearr_31350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___31355);

return statearr_31350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___31355,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31372 = [];
var len__27540__auto___31446 = arguments.length;
var i__27541__auto___31447 = (0);
while(true){
if((i__27541__auto___31447 < len__27540__auto___31446)){
args31372.push((arguments[i__27541__auto___31447]));

var G__31448 = (i__27541__auto___31447 + (1));
i__27541__auto___31447 = G__31448;
continue;
} else {
}
break;
}

var G__31374 = args31372.length;
switch (G__31374) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31372.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28638__auto___31450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28638__auto___31450,out){
return (function (){
var f__28639__auto__ = (function (){var switch__28526__auto__ = ((function (c__28638__auto___31450,out){
return (function (state_31416){
var state_val_31417 = (state_31416[(1)]);
if((state_val_31417 === (7))){
var inst_31412 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
var statearr_31418_31451 = state_31416__$1;
(statearr_31418_31451[(2)] = inst_31412);

(statearr_31418_31451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (1))){
var inst_31375 = [];
var inst_31376 = inst_31375;
var inst_31377 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31416__$1 = (function (){var statearr_31419 = state_31416;
(statearr_31419[(7)] = inst_31376);

(statearr_31419[(8)] = inst_31377);

return statearr_31419;
})();
var statearr_31420_31452 = state_31416__$1;
(statearr_31420_31452[(2)] = null);

(statearr_31420_31452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (4))){
var inst_31380 = (state_31416[(9)]);
var inst_31380__$1 = (state_31416[(2)]);
var inst_31381 = (inst_31380__$1 == null);
var inst_31382 = cljs.core.not.call(null,inst_31381);
var state_31416__$1 = (function (){var statearr_31421 = state_31416;
(statearr_31421[(9)] = inst_31380__$1);

return statearr_31421;
})();
if(inst_31382){
var statearr_31422_31453 = state_31416__$1;
(statearr_31422_31453[(1)] = (5));

} else {
var statearr_31423_31454 = state_31416__$1;
(statearr_31423_31454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (15))){
var inst_31406 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
var statearr_31424_31455 = state_31416__$1;
(statearr_31424_31455[(2)] = inst_31406);

(statearr_31424_31455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (13))){
var state_31416__$1 = state_31416;
var statearr_31425_31456 = state_31416__$1;
(statearr_31425_31456[(2)] = null);

(statearr_31425_31456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (6))){
var inst_31376 = (state_31416[(7)]);
var inst_31401 = inst_31376.length;
var inst_31402 = (inst_31401 > (0));
var state_31416__$1 = state_31416;
if(cljs.core.truth_(inst_31402)){
var statearr_31426_31457 = state_31416__$1;
(statearr_31426_31457[(1)] = (12));

} else {
var statearr_31427_31458 = state_31416__$1;
(statearr_31427_31458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (3))){
var inst_31414 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31416__$1,inst_31414);
} else {
if((state_val_31417 === (12))){
var inst_31376 = (state_31416[(7)]);
var inst_31404 = cljs.core.vec.call(null,inst_31376);
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31416__$1,(15),out,inst_31404);
} else {
if((state_val_31417 === (2))){
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31416__$1,(4),ch);
} else {
if((state_val_31417 === (11))){
var inst_31380 = (state_31416[(9)]);
var inst_31384 = (state_31416[(10)]);
var inst_31394 = (state_31416[(2)]);
var inst_31395 = [];
var inst_31396 = inst_31395.push(inst_31380);
var inst_31376 = inst_31395;
var inst_31377 = inst_31384;
var state_31416__$1 = (function (){var statearr_31428 = state_31416;
(statearr_31428[(11)] = inst_31394);

(statearr_31428[(12)] = inst_31396);

(statearr_31428[(7)] = inst_31376);

(statearr_31428[(8)] = inst_31377);

return statearr_31428;
})();
var statearr_31429_31459 = state_31416__$1;
(statearr_31429_31459[(2)] = null);

(statearr_31429_31459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (9))){
var inst_31376 = (state_31416[(7)]);
var inst_31392 = cljs.core.vec.call(null,inst_31376);
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31416__$1,(11),out,inst_31392);
} else {
if((state_val_31417 === (5))){
var inst_31380 = (state_31416[(9)]);
var inst_31384 = (state_31416[(10)]);
var inst_31377 = (state_31416[(8)]);
var inst_31384__$1 = f.call(null,inst_31380);
var inst_31385 = cljs.core._EQ_.call(null,inst_31384__$1,inst_31377);
var inst_31386 = cljs.core.keyword_identical_QMARK_.call(null,inst_31377,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31387 = (inst_31385) || (inst_31386);
var state_31416__$1 = (function (){var statearr_31430 = state_31416;
(statearr_31430[(10)] = inst_31384__$1);

return statearr_31430;
})();
if(cljs.core.truth_(inst_31387)){
var statearr_31431_31460 = state_31416__$1;
(statearr_31431_31460[(1)] = (8));

} else {
var statearr_31432_31461 = state_31416__$1;
(statearr_31432_31461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (14))){
var inst_31409 = (state_31416[(2)]);
var inst_31410 = cljs.core.async.close_BANG_.call(null,out);
var state_31416__$1 = (function (){var statearr_31434 = state_31416;
(statearr_31434[(13)] = inst_31409);

return statearr_31434;
})();
var statearr_31435_31462 = state_31416__$1;
(statearr_31435_31462[(2)] = inst_31410);

(statearr_31435_31462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (10))){
var inst_31399 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
var statearr_31436_31463 = state_31416__$1;
(statearr_31436_31463[(2)] = inst_31399);

(statearr_31436_31463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (8))){
var inst_31380 = (state_31416[(9)]);
var inst_31384 = (state_31416[(10)]);
var inst_31376 = (state_31416[(7)]);
var inst_31389 = inst_31376.push(inst_31380);
var tmp31433 = inst_31376;
var inst_31376__$1 = tmp31433;
var inst_31377 = inst_31384;
var state_31416__$1 = (function (){var statearr_31437 = state_31416;
(statearr_31437[(14)] = inst_31389);

(statearr_31437[(7)] = inst_31376__$1);

(statearr_31437[(8)] = inst_31377);

return statearr_31437;
})();
var statearr_31438_31464 = state_31416__$1;
(statearr_31438_31464[(2)] = null);

(statearr_31438_31464[(1)] = (2));


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
});})(c__28638__auto___31450,out))
;
return ((function (switch__28526__auto__,c__28638__auto___31450,out){
return (function() {
var cljs$core$async$state_machine__28527__auto__ = null;
var cljs$core$async$state_machine__28527__auto____0 = (function (){
var statearr_31442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31442[(0)] = cljs$core$async$state_machine__28527__auto__);

(statearr_31442[(1)] = (1));

return statearr_31442;
});
var cljs$core$async$state_machine__28527__auto____1 = (function (state_31416){
while(true){
var ret_value__28528__auto__ = (function (){try{while(true){
var result__28529__auto__ = switch__28526__auto__.call(null,state_31416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28529__auto__;
}
break;
}
}catch (e31443){if((e31443 instanceof Object)){
var ex__28530__auto__ = e31443;
var statearr_31444_31465 = state_31416;
(statearr_31444_31465[(5)] = ex__28530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31466 = state_31416;
state_31416 = G__31466;
continue;
} else {
return ret_value__28528__auto__;
}
break;
}
});
cljs$core$async$state_machine__28527__auto__ = function(state_31416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28527__auto____1.call(this,state_31416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28527__auto____0;
cljs$core$async$state_machine__28527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28527__auto____1;
return cljs$core$async$state_machine__28527__auto__;
})()
;})(switch__28526__auto__,c__28638__auto___31450,out))
})();
var state__28640__auto__ = (function (){var statearr_31445 = f__28639__auto__.call(null);
(statearr_31445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28638__auto___31450);

return statearr_31445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28640__auto__);
});})(c__28638__auto___31450,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1495581585697