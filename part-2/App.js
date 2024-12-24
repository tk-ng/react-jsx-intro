const tweets = [
	{
		tid: 1,
		username: "userken",
		name: "Ken",
		date: "12/24/2024",
		message: "Message Content 1",
	},
	{
		tid: 2,
		username: "usersam",
		name: "Sam",
		date: "1/25/2024",
		message: "Message Content 2",
	},
	{
		tid: 3,
		username: "userben",
		name: "Ben",
		date: "2/19/2024",
		message: "Message Content 3",
	},
];

const App = () => {
	const msgs = tweets.map((t) => (
		<Tweet
			key={t.tid}
			username={t.username}
			name={t.name}
			date={new Date().toDateString()} //{t.date}
			message={t.message}
		/>
	));
	return msgs;
};
