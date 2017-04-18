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
		$(this).toggleClass('hideTrailImg');
	});

	$('#target-2').on('click', function () {
		console.log("clicked on this:", this);
		$('#openTicketBadge').toggleClass('hideTrailImg');
		$('#openTicketBadge').addClass('animModal');
	});

	$('#target-3').on('click', function () {
		console.log("clicked on this:", this);
		$('#mapMarker').toggleClass('hideTrailImg');
		$('#mapMarker').addClass('animModal');
	});

	$('#target-4').on('click', function () {
		console.log("clicked on this:", this);
		$('#userPost').toggleClass('hideTrailImg');
		$('#userPost').addClass('animModal');
	});

	$('#target-5').on('click', function () {
		console.log("clicked on this:", this);
		switchHCphoto();
	});

	$('#HCphoto').on('click', function () {
		console.log("clicked on this:", this);
		switchHCphoto();
	});

	const switchHCphoto = () => {
		$('#trailView').toggleClass('hideTrailImg');
		$('#HCphoto').toggleClass('hideTrailImg');
		$('#target-3').toggleClass('hideTrailImg');
		$('#target-4').toggleClass('hideTrailImg');
		$('#target-5').toggleClass('hideTrailImg');
		$('#target-6').toggleClass('hideTrailImg');
	}

	$('#target-6').on('click', function () {
		console.log("clicked on this:", this);
		$('#closeTicket').toggleClass('hideTrailImg');
		$('#closeTicket').addClass('animModal');
	});

});



