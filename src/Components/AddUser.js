import React from "react";
import { useState } from "react";

function AddUser() {
	const [details, addDetail] = useState([]);
	const [employee, addEmp] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		website: "",
	});
	const { name, username, email, phone, website } = employee;
	const onSubmit = async (e) => {
		e.preventDefault();
		addDetail([...details, employee]);
		localStorage.setItem(
			"emp_details",
			JSON.stringify([...details, employee])
		);
		addEmp({ name: "", username: "", email: "", phone: "", website: "" });
	};
	const getInput = (e) => {
		addEmp({ ...employee, [e.target.name]: e.target.value });
	};
	return (
		<div className="container mt-2">
			<div className="w-75 mx-auto shadow p-3">
				<h2 className="text-center mb-4">Add Employee</h2>
				<form onSubmit={(e) => onSubmit(e)}>
					<div className="form-group">
						<input
							type="text"
							className="form-control form-control-lg m-2"
							placeholder="Enter Your Name"
							name="name"
							value={name}
							onChange={getInput}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control form-control-lg m-2"
							placeholder="Enter Your Username"
							name="username"
							value={username}
							onChange={getInput}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control form-control-lg m-2"
							placeholder="Enter Your E-mail Address"
							name="email"
							value={email}
							onChange={getInput}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control form-control-lg m-2"
							placeholder="Enter Your Phone Number"
							name="phone"
							value={phone}
							onChange={getInput}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control form-control-lg m-2"
							placeholder="Enter Your Website Name"
							name="website"
							value={website}
							onChange={getInput}
							required
						/>
					</div>
					<button className="btn btn-primary btn-block m-2">
						Add Employee
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddUser;
