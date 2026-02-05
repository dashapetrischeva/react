import AddProduct from "@/components/Products/AddProduct";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import PostsPage from "@/pages/PostsPage";
import ProductsPage from "@/pages/ProductsPage";
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
				path: '/products',
				Component: ProductsPage,
				meta: {
					title: 'Products'
				}
			},
			{
				path: '/add',
				Component: AddProduct,
				meta: {
					title: 'Add Product'
				}
			},
		]

	},
]

export const router = createBrowserRouter(routes);

