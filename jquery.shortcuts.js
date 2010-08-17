/* 
 * jQuery Shortcuts
 * http://github.com/ambethia/jquery-shortcuts
 *
 * A very lightweight approach to keyboard shortcuts (hotkeys) with jQuery.
 * 
 * Example Usage:
 *
 *   $(document).shortcuts({
 *     "Q": {
 *       keys: [81],
 *       desc: "Log Q to the console",
 *       func: function() { console.log("You pressed Q") }
 *     },
 *     "ALT I": {
 *       keys: [18, 73],
 *       desc: "Log this key combination to the console",
 *       func: function() { console.log("You pressed ALT and I") }
 *     }
 *   });
 *
 * Copyright (c) 2009 Jason L Perry
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see http://docs.jquery.com/License
 *
 * @version 0.1
 */

jQuery.fn.shortcuts = function(keys) {
  var self = this;
  this.pressed = new Array();

  jQuery(this).keydown(function(event) {
    // Don't fire in text-accepting inputs that we didn't directly bind to
    if (this !== event.target && (/textarea|select/i.test( event.target.nodeName ) || event.target.type === "text")) {
      return;
    }
    self.pressed.push(event.keyCode);
    for(combo in keys) {
      if (self.compare(keys[combo].keys, self.pressed)) {
        keys[combo].func(event);
      };
    };
  });

  jQuery(this).keyup(function(event) {
    self.pressed.splice(jQuery.inArray(event.keyCode, self.pressed), 1);
  });

  this.compare = function(a, b) {
    if (a.length != b.length) return false; a.sort(); b.sort();
    for (var i=0; i < a.length; i++) { if (a[i] != b[i]) return false; };
    return true;
  }

  return this;
};
