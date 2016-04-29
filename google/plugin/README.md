# each of the plugin are exported and made available from the view

# namespace :D

plugin.google
plugin.piratebay
plugin.*

# each of the plugin should support one metods
get(query) return [list{title: url}] % where query is the stuff to lookup and returns key value(url resources) 




