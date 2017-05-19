ClojureScript Boilerplate Project, using Leiningen and Figwheel.

Intended to be simpler and less opinionated than [Chestnut](https://github.com/plexus/chestnut) or [Figwheel-Template](https://github.com/bhauman/figwheel-template) (even though Chestnut is technically for Clojure, not ClojureScript).

**To build:**

Download the [ClojureScript JAR](https://github.com/clojure/clojurescript/releases/download/r1.9.293/cljs.jar) into your directory.

Set the classpath to the ClojureScript JAR:

```
java -cp cljs.jar:src clojure.main build.clj
```
