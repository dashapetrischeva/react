import api from "..";

export const doctorApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// doctors
		getDoctors: builder.query({
			query: () => '/admin/doctors',
			// для кешування даних та автоматичного оновлення при зміні даних
			// відслідковування кожного окремого елементу
			providesTags: ['Doctors'],
		}),
		getDoctorById: builder.query({
			query: (id) => `/admin/doctors/${id}`,
			providesTags: (result, error, id) => [{ type: 'Doctor', id }],
		}),
		createDoctor: builder.mutation({
			query: (data) => ({
				url: '/admin/doctors', // куди надсилати дані при створенні нового лікаря
				method: 'POST',
				body: data,
			}),
			// оновити дані списку лікарів після створення нового лікаря
			invalidatesTags: ['Doctors'],
		}),
		deleteDoctor: builder.mutation({
			query: (id) => ({
				url: `/admin/doctors/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Doctor', id },
				'Doctors',
				'Appointments',
			],
		}),
		editDoctor: builder.mutation({
			query: ({ id, ...updatedDoctor }) => ({
				url: `/admin/doctors/${id}`,
				method: 'PUT',
				body: updatedDoctor,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Doctor', id },
				'Doctors'
			],

		}),
	})
})

export const {
	useGetDoctorsQuery,
	useCreateDoctorMutation,
	useDeleteDoctorMutation,
	useGetDoctorByIdQuery,
	useEditDoctorMutation,
} = doctorApi