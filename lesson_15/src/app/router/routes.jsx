import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import EditDream from "@/pages/dreams/EditDream";
import DreamsPlanner from "@/pages/dreams/DreamsPlanner";


export const routes = [
	{

		Component: MainLayout,
		children: [
			{
				path: "/",
				Component: Home,
				meta: {
					title: 'Home'
				}
			},
			{
				path: '/dreams',
				meta: {
					title: 'Dreams planner'
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
				path: '/about',
				Component: About,
				meta: {
					title: 'About'
				},
			},

		]
	},
]