import './vendor';

var colors = [ "#ffc815", "#a3cd3b", "#0093d7"];
var maxCounter = 1200;

// get color index from counter value
function getColorIndexFromValue(counter)
{
	var ind = Math.floor(counter*3/maxCounter);
	if(ind < 0) ind = 0;
	if(ind > 2) ind = 2;
	return ind;
}

// updates counter and rotates an arrow
function updateCounter(value, arrow, text)
{
	text.text(Math.round(value));
	var colorIndex = getColorIndexFromValue(value);
	text.css({color: colors[colorIndex]});
	if(arrow)
	{
		var angle = 180*(value/maxCounter);
		arrow.css({
			transform: 'rotate(' + angle + 'deg)'
		});
	}
}

// start counter animation when page loaded
$(document).ready(function() {
	$(".counter-animated").each(function () {
		var $this = $(this);
		var arrow = $("#arrow");
		var countTo =  $this.attr("countTo");
		$this.text("0");
		jQuery({Counter: 0}).animate({Counter: countTo}, {
			duration: 2500,
			delay: 3000,
			easing:  'swing',
			step: function () {
				updateCounter(this.Counter, arrow, $this)
			},
			complete: function() {
				updateCounter(countTo, arrow, $this)
			}
		});
	});
});
