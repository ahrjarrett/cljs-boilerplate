ClojureScript Boilerplate Project, using Leiningen and Figwheel.

Intended to be simpler and less opinionated than [Chestnut](https://github.com/plexus/chestnut) or [Figwheel-Template](https://github.com/bhauman/figwheel-template) (even though Chestnut is technically for Clojure, not ClojureScript).


**To build:**

Download the [ClojureScript JAR](https://github.com/clojure/clojurescript/releases/download/r1.9.293/cljs.jar) into your directory.

Set the classpath to the ClojureScript JAR:

```
java -cp cljs.jar:src clojure.main build.clj
```

Auto-build with:
```
java -cp cljs.jar:src clojure.main watch.clj
```

If you want the broswer REPL, first install rlwrap:
```
brew install rlwrap
```

Recompile (I think this is necessary?), then wrap the repl command like so:
```
rlwrap java -cp cljs.jar:src clojure.main repl.clj
```

The REPL will write activity to out/watch.log, but several people suggest running the following command in a separate terminal window to monitor the log, making debugging easier:
```
tail -f out/watch.log
```

For production builds (make sure you remove the repl stuff from core.clj):
```
java -cp cljs.jar:src clojure.main release.clj
```

Alternatively, as the classpath gets more complicated, instead of creating a lib folder and running 'cljs.jar:lib/*:src', use leiningen. For example, to start the repl:
```
lein run -m clojure.main repl.clj
```
