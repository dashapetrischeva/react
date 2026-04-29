export interface StorageEventHandler {
	(e: StorageEvent): void;
}

export interface AppInitComponent {
	(): null;
}
