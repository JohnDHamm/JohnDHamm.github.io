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

	$('.modalDiv').on('click', function () {
		console.log("clicked on modalDiv");
		$(this).toggleClass('hideTrailImg')
	});

	$('#target-2').on('click', function () {
		console.log("clicked on this:", this);
		$('#openTicketBadge').toggleClass('hideTrailImg')
	});

	$('#target-3').on('click', function () {
		console.log("clicked on this:", this);
		$('#mapMarker').toggleClass('hideTrailImg')
	});

	$('#target-4').on('click', function () {
		console.log("clicked on this:", this);
		$('#userPost').toggleClass('hideTrailImg')
	});

	$('#target-5').on('click', function () {
		console.log("clicked on this:", this);
		$('#photoThumb').toggleClass('hideTrailImg')
	});

	$('#target-6').on('click', function () {
		console.log("clicked on this:", this);
		$('#closeTicket').toggleClass('hideTrailImg')
	});






});



