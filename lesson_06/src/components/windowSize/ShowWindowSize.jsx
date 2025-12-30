import useWindowSize from './useWindowSize'
import styles from './ShowWindowSize.module.css'
function ShowWindowSize() {

	let device
	const { width, height } = useWindowSize()
	if (width >= 1024) device = 'desktop'
	else if (width >= 768) device = 'tablet'
	else device = 'phone'

	return (
		<div className={styles.showWindowSize}>
			<h2>Розмір вікна браузера</h2>
			{device === 'desktop' && <img src='./desktop.png' alt="Icon" />}
			{device === 'tablet' && <img src='./tablet.png' alt="Icon" />}
			{device === 'phone' && <img src='./phone.png' alt="Icon" />}
			<div className={styles.windowSize}>{width}*{height}</div>
		</div>
	);
}

export default ShowWindowSize;