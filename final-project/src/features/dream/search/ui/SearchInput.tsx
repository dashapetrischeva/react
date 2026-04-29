import type { SearchInputProps } from "./SearchInput.types"
import styles from "./SearchInput.module.css"
import { useTranslation } from 'react-i18next'

export function SearchInput({ value, onChange }: SearchInputProps) {
	const { t } = useTranslation()

	return (
		<div className={styles.searchInput}>
			<div className={styles.searchIcon}>
				<svg viewBox="0 0 24 24" fill="none">
					<path
						d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>

			<input
				type="text"
				placeholder={t('search.placeholder')}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				data-testid="search-input"
			/>
		</div>
	)
}