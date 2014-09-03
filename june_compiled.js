if(!lt.util.load.provided_QMARK_('lt.plugins.june')) {
goog.provide('lt.plugins.june');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.june.highlight = (function highlight(selector,cm,line,dom){var seq__8005_8012 = cljs.core.seq.call(null,dom.querySelectorAll(selector));var chunk__8007_8013 = null;var count__8008_8014 = 0;var i__8009_8015 = 0;while(true){
if((i__8009_8015 < count__8008_8014))
{var node_8016 = cljs.core._nth.call(null,chunk__8007_8013,i__8009_8015);var hash_8017 = cljs.core.mod.call(null,cljs.core.hash.call(null,node_8016.innerText),20);node_8016.classList.add([cljs.core.str("cm-hash-"),cljs.core.str(hash_8017)].join(''));
{
var G__8018 = seq__8005_8012;
var G__8019 = chunk__8007_8013;
var G__8020 = count__8008_8014;
var G__8021 = (i__8009_8015 + 1);
seq__8005_8012 = G__8018;
chunk__8007_8013 = G__8019;
count__8008_8014 = G__8020;
i__8009_8015 = G__8021;
continue;
}
} else
{var temp__4092__auto___8022 = cljs.core.seq.call(null,seq__8005_8012);if(temp__4092__auto___8022)
{var seq__8005_8023__$1 = temp__4092__auto___8022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8005_8023__$1))
{var c__7119__auto___8024 = cljs.core.chunk_first.call(null,seq__8005_8023__$1);{
var G__8025 = cljs.core.chunk_rest.call(null,seq__8005_8023__$1);
var G__8026 = c__7119__auto___8024;
var G__8027 = cljs.core.count.call(null,c__7119__auto___8024);
var G__8028 = 0;
seq__8005_8012 = G__8025;
chunk__8007_8013 = G__8026;
count__8008_8014 = G__8027;
i__8009_8015 = G__8028;
continue;
}
} else
{var node_8029 = cljs.core.first.call(null,seq__8005_8023__$1);var hash_8030 = cljs.core.mod.call(null,cljs.core.hash.call(null,node_8029.innerText),20);node_8029.classList.add([cljs.core.str("cm-hash-"),cljs.core.str(hash_8030)].join(''));
{
var G__8031 = cljs.core.next.call(null,seq__8005_8023__$1);
var G__8032 = null;
var G__8033 = 0;
var G__8034 = 0;
seq__8005_8012 = G__8031;
chunk__8007_8013 = G__8032;
count__8008_8014 = G__8033;
i__8009_8015 = G__8034;
continue;
}
}
} else
{}
}
break;
}
return dom;
});
lt.plugins.june.selector = (function selector(types){return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__8011_SHARP_){return [cljs.core.str("span.cm-"),cljs.core.str(p1__8011_SHARP_)].join('');
}),cljs.core.map.call(null,cljs.core.name,types)));
});
/**
* @param {...*} var_args
*/
lt.plugins.june.__BEH__highlight = (function() { 
var __BEH__highlight__delegate = function (editor,types){var selector = lt.plugins.june.selector.call(null,((cljs.core.empty_QMARK_.call(null,types))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",4059284974),new cljs.core.Keyword(null,"variable-2","variable-2",2752060563),new cljs.core.Keyword(null,"variable-3","variable-3",2752060564),new cljs.core.Keyword(null,"def","def",1014003575)], null):types));return lt.objs.editor.on.call(null,editor,new cljs.core.Keyword(null,"renderLine","renderLine",2207751708),((function (selector){
return (function() { 
var G__8035__delegate = function (args){return cljs.core.apply.call(null,lt.plugins.june.highlight,selector,args);
};
var G__8035 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8035__delegate.call(this,args);};
G__8035.cljs$lang$maxFixedArity = 0;
G__8035.cljs$lang$applyTo = (function (arglist__8036){
var args = cljs.core.seq(arglist__8036);
return G__8035__delegate(args);
});
G__8035.cljs$core$IFn$_invoke$arity$variadic = G__8035__delegate;
return G__8035;
})()
;})(selector))
);
};
var __BEH__highlight = function (editor,var_args){
var types = null;if (arguments.length > 1) {
  types = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__highlight__delegate.call(this,editor,types);};
__BEH__highlight.cljs$lang$maxFixedArity = 1;
__BEH__highlight.cljs$lang$applyTo = (function (arglist__8037){
var editor = cljs.core.first(arglist__8037);
var types = cljs.core.rest(arglist__8037);
return __BEH__highlight__delegate(editor,types);
});
__BEH__highlight.cljs$core$IFn$_invoke$arity$variadic = __BEH__highlight__delegate;
return __BEH__highlight;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.june","highlight","lt.plugins.june/highlight",3060533045),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.june.__BEH__highlight,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
}

//# sourceMappingURL=june_compiled.js.map