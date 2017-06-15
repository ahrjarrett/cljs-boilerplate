(ns hello-world.core
  (:require [clojure.browser.repl :as repl]))

;; We create a connection with DEFONCE so that
;; if we reload the namespace during development,
;; we won't get multiple connection instances.
(defonce conn
  (repl/connect "http://localhost:9000/repl"))


(enable-console-print!)

(println "hello werld")

(defn foo [a b]
  (- a b))

(println (foo 10 100))

(println (js/parseInt "222"))

;; For RegExp you need to invoke the "new" special form,
;; which you can do in two ways:

(new js/RegExp "^foo$")

(js/RegExp. "^foo$")

;; The second one is what is recommended.

;; If we want to invoke methods of some object instance,
;; re use the . first:
;; (notice how .test is used; usually you test a string
;; -- can you test a RegExp against an object? --
;; Here we call the method and pass in the thing we want
;; to test, followed by the object we're actually testing)

(def re (js/RegExp "^Clojure"))
(println
  (.test re "ClojureScript")) ;; => true


(.sqrt js/Math 9)
(js/Math.sqrt 15)
(js/console.log "Hello")

;; JS-OBJ is a new function:
(def javascript-object
  (js-obj "taste" "flavor")) ;; {:taste flavor}


;; #JS

;; #js is a reader macro that prepends the argument

(println javascript-object) ;; #js {:taste flavor}

(set! (.-taste javascript-object) "flavors")

(println javascript-object) ;; #js {:taste flavors}


;; The problem is that these JS objects cannot access
;; nested objects

(def new-js-obj #js {:country {:code "FR" :name "France"}})

(println new-js-obj)
(println (.-country new-js-obj)) ;; => {:code "FR" :name "France"}})
(println (.-code (.-country new-js-obj))) ;; => nil

;; That's why we need the clj->js and js->clj functions.

(def newly-minted-clojure-obj (js->clj new-js-obj))
(println (str "this is my newly minted clojure object made from js->clj: \n"
              newly-minted-clojure-obj
              "\n"
              "and this is the JS object: \n"
              (.-country new-js-obj)
              ))

;; For some reason this still returns NIL should be "FR"
(println (:country newly-minted-clojure-obj))

;; INTO-ARRAY behaves as expected:

(into-array ["Bob Dylan" "The Birds" "The Yardbirds"]) ;; => #js [...]

;; We can also preallocate arrays:

(println (make-array 10)) ;; => [nil nil nil nil nil nil nil nil nil nil ]
(println (count (make-array 11))) ;; => 11






















