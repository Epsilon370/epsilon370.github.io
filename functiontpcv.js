document.querySelectorAll('h1').forEach(function(h1) {
	h1.addEventListener('mouseover', function() {
		h1.style.color = 'green';
});
	h1.addEventListener('mouseout', function() {
		h1.style.color = 'black';
});
});

document.querySelectorAll('h2').forEach(function(h2) {
	h2.addEventListener('mouseover', function() {
		h2.style.color = 'blue';
});
	h2.addEventListener('mouseout', function() {
		h2.style.color = 'black';
});
});
