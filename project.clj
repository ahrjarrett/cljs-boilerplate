(defproject hello-world "0.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.542"]]

  :plugins [[lein-cljsbuild "1.1.6"]
            [lein-figwheel "0.5.10"]]

  ;; this will build cljs on `lein compile`
  :hooks [leiningen.cljsbuild]

  ;; cljsbuild configuraiton
              ;; takes multimple builds (will execute in parallel)
                       ;; choosing a name for a build allows to modify it in other profiles (see below)
  :cljsbuild {:builds {:main {:source-paths ["src"]
                              :compiler {:main hello-world.core
                                         :output-to "resources/public/js/main.js"
                                         :output-dir "resources/public/js"
                                         :asset-path "js"}}}}

  ;; I suggest using profiles from the beginning
             ;; `dev` profile is known to lein and enabled by default
                   ;; binaryage and devtools not currently working?
  :profiles {:dev {;;:dependences [[binaryage/devtools "0.9.4"]]
                   :cljsbuild {:builds {:main {:figwheel true
                                               :compiler {:optimizations :none
                                                          :source-map true}}}}}
                                                          ;; These are settings for devtools (see above)
                                                          ;;:preloads [devtools.preload]
             ;; `prod` key is not known to lein and is arbitrary
             :prod {:cljsbuild {:builds {:main {:compiler {:optimizations :advanced
                                                           :pretty-print false}}}}}}

  ;; `resources/public/js` is a non-standard target folder, so we overwrite `clean-targets`
  :clean-targets ^{:protect false} ["target" "resources/public/js"])
