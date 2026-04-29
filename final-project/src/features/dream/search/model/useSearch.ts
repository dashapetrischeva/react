import { useState, useMemo } from "react";

export function useSearch<T>(items: T[], key: keyof T) {
	const [query, setQuery] = useState("");

	const filteredItems = useMemo(() => {
		return items.filter((item) =>
			String(item[key]).toLowerCase().includes(query.toLowerCase())
		);
	}, [items, query, key]);

	return {
		query,
		setQuery,
		filteredItems,
	};
}