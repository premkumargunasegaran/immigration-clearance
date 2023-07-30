import React from 'react'
import "./immigation.css"

function Immigration() {
  return (
    <div className="container my-5">

	<div className="form-wrap">	
		<form id="survey-form">
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<label id="name-label" for="name">Name</label>
						<input type="text" name="name" id="name" placeholder="Enter your name" className="form-control" required  />
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label id="email-label" for="email">Email</label>
						<input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" required />
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<label id="number-label" for="number">Age <small>(optional)</small></label>
						<input type="number" name="age" id="number" min="10" max="99" className="form-control" placeholder="Age" />
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label>current role</label>
						<select id="dropdown" name="role" className="form-control" required >
							<option disabled selected value>Select</option>
							<option value="student">Student</option>
							<option value="job">Full Time Job</option>
							<option value="learner">Full Time Learner</option>
							<option value="preferNo">Prefer not to say</option>
							<option value="other">Other</option>
						</select>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<label>Aadhar</label>
						<div className="custom-control custom-radio custom-control-inline">
                        <input type="text"  className="form-control" placeholder="766**************" />
							
						</div>
						
					</div>
				</div>
                <div className="col-md-6">
					<div className="form-group">
						<label>Mobile</label>
						<div className="">
                        <input type="number"  className="form-control" placeholder="766*******" />
							
						</div>
						
					</div>
				</div>

				
			</div>


			<div className="row">
				<div className="col-md-12">
					<div className="form-group">
						<label>Reason To Apply</label>
						<textarea  id="comments" className="form-control" name="comment" placeholder="Enter your comment here..."></textarea>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-4">
					<button type="submit" id="submit" className="btn btn-primary btn-block">Apply</button>
				</div>
			</div>

		</form>
	</div>	
</div>
  )
}

export default Immigration