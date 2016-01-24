var input = document.getElementById('input'),
    key = document.getElementById('key'),
    result = document.getElementById('result'),
    enc = document.getElementById('enc'),
    dec = document.getElementById('dec');

enc.onclick = (function(){
	result.value = encrypt(input.value, key.value);
});

dec.onclick = (function(){
	result.value = decrypt(input.value, key.value);
});
