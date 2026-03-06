import api from "..";

export const appointmentApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// appointments
		getAppointments: builder.query({
			query: () => '/appointments',
			// для кешування даних та автоматичного оновлення при зміні даних
			// відслідковування кожного окремого елементу
			providesTags: ['Appointments'],
		}),
		getAppointmentById: builder.query({
			query: (id) => `/appointments/${id}`,
			providesTags: (result, error, id) => [{ type: 'Appointment', id }],
		}),
		createAppointment: builder.mutation({
			query: (data) => ({
				url: '/appointments', // куди надсилати дані при створенні нового запису
				method: 'POST',
				body: data,
			}),
			// оновити дані списку записів після створення нового запису
			invalidatesTags: ['Appointments'],
		}),
		deleteAppointment: builder.mutation({
			query: (id) => ({
				url: `/appointments/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Appointment', id },
				'Appointments',
			],
		}),
		editAppointment: builder.mutation({
			query: ({ id, ...updatedAppointment }) => ({
				url: `/appointments/${id}`,
				method: 'PUT',
				body: updatedAppointment,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Appointment', id },
				'Appointments'
			],

		}),

	})
})

export const {
	useGetAppointmentsQuery,
	useGetAppointmentByIdQuery,
	useCreateAppointmentMutation,
	useDeleteAppointmentMutation,
	useEditAppointmentMutation,
} = appointmentApi