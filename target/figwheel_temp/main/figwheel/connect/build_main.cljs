(ns figwheel.connect.build-main (:require [hello-world.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "main", :websocket-url "ws://localhost:3449/figwheel-ws"})

