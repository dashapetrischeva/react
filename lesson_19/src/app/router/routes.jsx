import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import EditDream from "@/pages/dreams/EditDream";
import DreamsPlanner from "@/pages/dreams/DreamsPlanner";
import { LoginForm } from "@/features/auth";
import LoginPage from "@/pages/LoginPage";


export const routes = [
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
			// {
			// 	path: '/about',
			// 	Component: About,
			// 	meta: {
			// 		title: 'About'
			// 	},
			// },
			{
				path: '/login',
				Component: LoginPage,
				meta: {
					title: 'Login',
					isInMenu: false,
					requireAuth: false,
				},
			},
		]
	},
]