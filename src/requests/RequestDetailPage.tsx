

//request props in header
//edit button in header

//requestlinestable in body

//when request is new, add send for review button in the top right
//when request is in review, add approve / reject buttons on requests that dont belong to the currently logged in user
//if user owns request, add message that says you cannont review your own requests
//if user is not review, add message that says they dont have permission to review requests (or just disable approve/reject buttons)

//if reject button is clicked, add rejection reason


function RequestDetailPage() {
   


	return (
		<>
      <section></section>
			<div>
				<RequestDetail />
			</div>
			<div>
				<RequestLinesTable />
			</div>
			
		</>
	);
}

export default RequestDetailPage;

