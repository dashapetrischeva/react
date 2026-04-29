import { RouteObject } from 'react-router';

export interface RouteMeta {
	title: string;
	menuKey?: string;
	isInMenu: boolean;
	requireAuth: boolean;
	roles?: string[];
}

export type AppRoute = Omit<RouteObject, 'children'> & {
	meta?: RouteMeta;
	children?: AppRoute[];
};