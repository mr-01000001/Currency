let egp = document.getElementById('egp');
let usd = document.getElementById('usd');
let euro = document.getElementById('euro');
let pound = document.getElementById('pound');

egp.onkeyup = function(){
    usd.value   = `$ ${(egp.value / 18.31).toFixed(2)}`;
    euro.value  = `€ ${(egp.value / 19.95).toFixed(2)}`;
    pound.value = `£ ${(egp.value / 23.93).toFixed(2)}`;
};
usd.onkeyup = function(){
    egp.value   = `E£ ${(usd.value * 18.31).toFixed(2)}`;
    euro.value  = `€  ${(usd.value / 0.92).toFixed(2)}`;
    pound.value = `£  ${(usd.value / 0.77).toFixed(2)}`;
};
euro.onkeyup = function(){
    egp.value   = `E£ ${euro.value * 19.95}`;          
    usd.value   = `$  ${euro.value * 0.92}`;    
    pound.value = `£  ${euro.value * 0.83}`;    
};
pound.onkeyup = function(){
    egp.value   = `E£  ${(pound.value * 23.93).toFixed(2)}`;          
    usd.value   = `$   ${(pound.value * 1.31).toFixed(2)}`;    
    euro.value  = `€   ${(pound.value / 0.83).toFixed(2)}`;    
};
