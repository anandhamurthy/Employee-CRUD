import React from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
	const local = localStorage.getItem("emp_details");
	const emp_details = JSON.parse(local);

	const { id } = useParams();
	const updatedList = emp_details.filter((item) => item.id !== id);

	// const deleteEmp = async (id) => {
	// 	await axios.delete(`http://localhost:3003/users/${id}`);
	// 	loadUsers();
	// };

	// const editEmp = async (id) => {
	// 	await axios.delete(`http://localhost:3003/users/${id}`);
	// };
	return (
		<div className="container">
			<div className="py-4">
				<table class="table border shadow">
					<thead class="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">User Name</th>
							<th scope="col">Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{emp_details.map((user, index) => (
							<tr>
								<th scope="row">{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>
									<a href="/view-employee">
										<button className="btn btn-primary btn-sm mx-2">
											View
										</button>
									</a>
									<a href="/edit-employee">
										<button className="btn btn-primary btn-sm mx-2">
											Edit
										</button>
									</a>
									<button className="btn btn-primary btn-sm mx-2">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Home;
