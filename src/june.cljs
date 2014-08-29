(ns lt.plugins.june
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [clojure.string :as str])
  (:require-macros [lt.macros :refer [behavior]]))

(defn highlight [selector cm line dom]
  (doseq [node (-> dom (.querySelectorAll selector))
          :let [hash (mod (hash (.-innerText node)) 20)]]
    (.add (.-classList node) (str "cm-hash-" hash))))

(defn selector [types]
  (->> types (map name) (map #(str "span.cm-" %)) (str/join ", ")))

(behavior ::highlight
          :triggers #{:object.instant}
          :reaction (fn [editor & types]
                      (let [selector (selector (if (empty? types)
                                                 [:variable :variable-2 :variable-3 :def]
                                                 types))]
                        (editor/on editor :renderLine
                                   (fn [& args] (apply highlight selector args))))))
