function partitionOn(pred, items) {
	    var falsenum = 0
	    for (var i = 0; i < items.length; i++) {
	        var currentItem = items[i];
	        if (!pred(currentItem)) {
	            items.splice(i, 1); 
	            items.splice(false_idx, 0, currentItem); 
	            falsenum += 1;
	        }
	    }
	    return falsenum
	}