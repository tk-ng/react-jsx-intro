const Tweet = (props) => {
	return (
		<div className="card">
			<div className="container">
				<h4 className="heading">
					<b>{props.name}</b>
					<small>{props.username}</small>
				</h4>
				<p>{props.message}</p>
				<small>{props.date}</small>
			</div>
		</div>
	);
};
