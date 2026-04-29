import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/Home";
import EditDream from "@/pages/dreams/EditDream";
import DreamsPlanner from "@/pages/dreams/DreamsPlanner";
import LoginPage from "@/pages/LoginPage";
import Page404 from "@/pages/Page404";
import type { AppRoute } from "./router.types";

export const routes: AppRoute[] = [
	{
		Component: MainLayout,
		children: [
			{
				path: "/",
				Component: Home,
				meta: {
					title: 'Home',
					menuKey: 'home',
					isInMenu: true,
					requireAuth: false,
				}
			},
			{
				path: '/dreams',
				meta: {
					title: 'Dreams planner',
					menuKey: 'dreams',
					isInMenu: true,
					requireAuth: true,
				},
				children: [
					{
						index: true,
						Component: DreamsPlanner
					},
					{
						path: 'new',
						Component: EditDream
					},
					{
						path: ':id/edit',
						Component: EditDream
					}
				]
			},
			{
				path: '/login',
				Component: LoginPage,
				meta: {
					title: 'Login',
					isInMenu: false,
					requireAuth: false,
				},
			},
			{
				path: '*',
				Component: Page404,
				meta: {
					title: '404',
					isInMenu: false,
					requireAuth: false,
				},
			}
		]
	},
];