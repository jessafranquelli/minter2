function modify_max(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    var max = document.getElementById('max').value;
    var new_max = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
    document.getElementById('max').value = new_max;
    return new_max;
}
