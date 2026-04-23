import styles from './About.module.css'

function About() {
	return (
		<section className={styles.about}>
			<h1 className={styles.title}>About Dream Planner</h1>
			<p className={styles.description}>
				This app is a playful place to collect your dreams, plan next steps, and keep the spark alive.
				It is built with React, Redux, and a splash of pink magic.
			</p>
		</section>
	)
}

export default About;