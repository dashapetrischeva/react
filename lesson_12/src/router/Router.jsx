import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import ExpensesPage from "@/pages/ExpensesPage";
import Home from "@/pages/Home";
import PostsPage from "@/pages/PostsPage";
import AddPost from "@/pages/PostsPage/AddPost";
import { Component } from "react";
import { createBrowserRouter } from "react-router";

export const routes = [
	{
		Component: MainLayout,
		children: [
			{
				path: '/',
				Component: Home,
				meta: {
					title: 'Home'
				}
			},
			{
				path: '/posts',
				Component: PostsPage,
				meta: {
					title: 'Posts'
				}
			},
			{
				path: '/about',
				Component: About,
				meta: {
					title: 'About us'
				}
			},
			{
				path: '/add',
				Component: AddPost,
				meta: {
					title: 'Add Post'
				}
			},
			{
				path: '/expenses',
				Component: ExpensesPage,
				meta: {
					title: 'Expenses'
				}
			},
		]

	},
]

export const router = createBrowserRouter(routes);

