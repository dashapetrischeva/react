import styles from "./SearchResult.module.css"
function SearchResult() {
	const results = [
		{
			id: 1,
			url: 'w3schoolsua.github.io/react/index.html',
			title: 'React Підручник - W3Schools українською - GitHub Pages',
			text: 'Підручник React. Навчання на прикладах. Навчання за вправами. Вікторина. Створити додаток React. Запустіть програму React. Що ви вже повинні знати.'
		},
		{
			id: 2,
			url: 'https://uk.legacy.reactjs.org/tutorial/tutorial.html',
			title: 'Посібник: знайомство з React',
			text: 'Даний посібник не потребує попереднього ознайомлення з React. Перед початком роботи. У цьому посібнику ми працюватимемо над створенням маленької гри.'
		},
		{
			id: 3,
			url: 'w3schoolsua.github.io/react/react_getstarted.html',
			title: 'React Старт - W3Schools українською',
			text: 'Найшвидший спосіб почати вивчати React — це написати React безпосередньо у своїх файлах HTML. Почніть із додавання трьох скриптів: перші два дозволяють нам ...'
		},

	]
	return (
		<>
			<h2>Задача 5</h2>
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