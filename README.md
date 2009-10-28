# jQuery Shortcuts

A very lightweight approach to keyboard shortcuts (hotkeys) with [jQuery](http://jquery.com/).

## Example Usage

    $(document).shortcuts({
      "Q": {
        keys: [81],
        desc: "Log Q to the console",
        func: function() { console.log("You pressed Q") }
      },
      "ALT I": {
        keys: [18, 73],
        desc: "Log this key combination to the console",
        func: function() { console.log("You pressed ALT and I") }
      }
    });

## License

Copyright &copy; 2009 Jason L Perry

Dual licensed under the MIT and GPL licenses.
Uses the same license as [jQuery](http://docs.jquery.com/License).
