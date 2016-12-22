$( document ).ready(function() {
	$("#mailist").delegate('.email-item','click', function(e) {
		e.preventDefault();
		var mailid = $(this).data('mailid');
		$(".mailcontent").html(mailid);
	});
});