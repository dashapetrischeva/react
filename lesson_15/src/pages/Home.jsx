import styles from './Home.module.css'


function Home() {
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>Dream Planner</h1>
			<p className={styles.subtitle}>
				Keep track of your big ideas, set goals that matter, and make every day a little more magical.
			</p>

		</section>
	)
}

export default Home;