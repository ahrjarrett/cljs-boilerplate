;; See the README.md for how to change core.cljs for production builds.

(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:output-to "out/main.js"
                       :optimizations :advanced})

(System/exit 0)

