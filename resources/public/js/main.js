var CLOSURE_UNCOMPILED_DEFINES = null;
if(typeof goog == "undefined") document.write('<script src="js/goog/base.js"></script>');
document.write('<script src="js/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.build_main\"); }</script>");
document.write('<script>goog.require("hello_world.core");</script>');