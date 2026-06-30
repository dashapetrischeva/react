import styles from "./SearchResult.module.css"
function SearchResult() {
	const results = [
		{
			id: 1,
			url: 'https://www.coursera.org/learn/react-basics',
			title: 'React Basics Course',
			text: 'Learn React Basics today — React is a powerful JavaScript library that you can use to build user interfaces for web and mobile applications (apps) Learn At Your Own Pace. Flexible Online'
		},
		{
			id: 2,
			url: 'https://www.udemy.com/',
			title: 'Udemy Online Course',
			text: 'Udemy — Lerne online mit praxisnahen Kursen. Starte jetzt deinen Online-Kurs. ChatGPT Lernen. Lernen jetzt anfangen. Verbessere deine Skills. Verbessere deine Karriere. Investiere in dich selbst.'
		},
		{
			id: 3,
			url: 'https://brilliant.org/topics/coding/tutor/',
			title: 'Learn Coding for Free',
			text: "From Beginner to Advanced — Step-by-step interactive coding lessons start at your level and help you master key ideas. Learn by doing – Interactive problem solving that's effective and fun. "
		},

	]
	return (
		<>
			<h2>Task 5</h2>
			<div className={styles.results}>
				{results.map((result) => (
					<div className={styles.itemResult} key={result.id}>
						<a className={styles.itemResult__url} href={result.url}>{result.url}</a>
						<h3 className={styles.itemResult__title}>{result.title}</h3>
						<p className={styles.itemResult__text}>{result.text}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default SearchResult;