import { configureStore } from '@reduxjs/toolkit'
import { api } from '@/shared/api/baseApi'

// auth
import { authApi } from '@/features/auth/api/authApi'
import authReducer from '@/features/auth/api/authSlice'

// entities APIs
import { userApi } from '@/entities/user/api/userApi'

export const store = configureStore({
	reducer: {
		// base api (если используешь отдельно)
		[api.reducerPath]: api.reducer,

		// auth slice + auth api
		auth: authReducer,
		[authApi.reducerPath]: authApi.reducer,

		// other RTK Query APIs
		[userApi.reducerPath]: userApi.reducer,

	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			api.middleware,
			authApi.middleware,
			userApi.middleware,
		),
})