import './vendor';

let colors = ['#ffc815', '#a3cd3b', '#0093d7'];
let maxCounter = 1200;

// get color index from counter value
function getColorIndexFromValue(counter) {
	let ind = Math.floor(counter*3/maxCounter);

	if (ind < 0) ind = 0;
	if (ind > 2) ind = 2;

	return ind;
}

// updates counter and rotates an arrow
function updateCounter(value, arrow, text) {
	var colorIndex = getColorIndexFromValue(value);

	text.text(Math.round(value));
	text.css({color: colors[colorIndex]});

	if(arrow) {
		let angle = 180*(value/maxCounter);

		arrow.css({
			transform: 'rotate(' + angle + 'deg)'
		});
	}
}

// start counter animation when page loaded
$(document).ready(() => {
	$('.counter-animated').each((index, element) => {
		let counter = $(element);
		let arrow = $('#arrow');
		let countTo =  counter.attr('countTo');

		counter.text("0");
		jQuery({Counter: 0}).animate({Counter: countTo}, {
			duration: 2500,
			delay: 3000,
			easing:  'swing',
			step: (now, tween) => {
				updateCounter(now, arrow, counter);
			},
			complete: () => {
				updateCounter(countTo, arrow, counter);
			}
		});
	});
});
