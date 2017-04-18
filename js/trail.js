$(function() {

	$('#target-1').on('click', function () {
		console.log("clicked on this:", this);
		switchTrailSelect();
	});

	$('#target-1b').on('click', function () {
		console.log("clicked on this:", this);
		switchTrailSelect();
	});

	const switchTrailSelect = () => {
		$('#trailSelect2').toggleClass('hideTrailImg');
		$('#target-1b').toggleClass('hideTrailImg');
		$('#trailSelect1').toggleClass('hideTrailImg');
		$('#target-1').toggleClass('hideTrailImg');
	};

	$('#target-2').on('click', function () {
		console.log("clicked on this:", this);
		$('#openTicketBadge').toggleClass('hideTrailImg')

	});
	$('#openTicketBadge').on('click', function () {
		console.log("clicked on this:", this);
		$('#openTicketBadge').toggleClass('hideTrailImg')

	});


});



