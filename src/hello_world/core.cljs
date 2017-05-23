(ns hello-world.core
  (:require [clojure.browser.repl :as repl]))

;; We create a connection with DEFONCE so that
;; if we reload the namespace during development,
;; we won't get multiple connection instances.
(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "hello werld")



(defn add10 [n]
  (+ 10 n))
(defn add9 [n]
  (+ 9 n))


