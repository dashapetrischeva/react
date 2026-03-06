import api from "..";

export const patientApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// patients
		getPatients: builder.query({
			query: () => '/patients',
			// для кешування даних та автоматичного оновлення при зміні даних
			// відслідковування кожного окремого елементу
			providesTags: ['Patients'],
		}),
		getPatientById: builder.query({
			query: (id) => `/patients/${id}`,
			providesTags: (result, error, id) => [{ type: 'Patient', id }],
		}),
		createPatient: builder.mutation({
			query: (data) => ({
				url: '/patients', // куди надсилати дані при створенні нового пацієнта
				method: 'POST',
				body: data,
			}),
			// оновити дані списку пацієнтів після створення нового пацієнта
			invalidatesTags: ['Patients'],
		}),
		deletePatient: builder.mutation({
			query: (id) => ({
				url: `/patients/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Patient', id },
				'Patients',
				'Appointments',
			],
		}),

		editPatient: builder.mutation({
			query: ({ id, ...updatedPatient }) => ({
				url: `/patients/${id}`,
				method: 'PUT',
				body: updatedPatient,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Patient', id },
				'Patients'
			],

		}),
	})
})

export const {
	useGetPatientsQuery,
	useGetPatientByIdQuery,
	useCreatePatientMutation,
	useDeletePatientMutation,
	useEditPatientMutation,
} = patientApi