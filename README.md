ClojureScript Boilerplate Project, using Leiningen and Figwheel.

Intended to be simpler and less opinionated than [Chestnut](https://github.com/plexus/chestnut) or [Figwheel-Template](https://github.com/bhauman/figwheel-template) (even though Chestnut is technically for Clojure, not ClojureScript).

**Note:** In order to interact w/ files in the REPL, you need to require the namespace, like so:

```
(require '[hello-world.core :as hello] :reload)
```

05/23/2017: Installed figwheel and using Lein. Run `lein compile` to compile to ClojureScript.

Created a hook in project.clj so that...

```
lein compile
```

...is a hook for:

```
lein cljsbuild once
```

To run figwheel, just run:
```
rlwrap lein fighweel
```

And navigate to localhost:3449. Remember, rlwrap just wraps the REPL so you can do things like access command history, etc.

For a production build run:
```
lein with-profile prod do clean, compile
```

**Also:** I've noticed that you still have to run the following command for Figwheel to"jack-in" to the REPL (otherwise you get console errors...also I think I might need to turn a verbose-mode on, because I'm not getting any console messages from Figwheel besides the path to the file it reloaded; most of the tutorials I'm going through get constant feedback from Figwheel, but maybe this changed with a recent patch or version?):
```
java -cp cljs.jar:src clojure.main repl.clj
```

(Then again, this might simply be because src/hello_world/core.cljs is telling it to connect.)





[ Below: Deprecated ]

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
