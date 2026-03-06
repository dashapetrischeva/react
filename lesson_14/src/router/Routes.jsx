import MainLayout from "@/layouts/MainLayout";
import AppointmentsForm from "@/pages/appointments/AppointmentsForm";
import AppointmentsList from "@/pages/appointments/AppointmentsList";
import DoctorsForm from "@/pages/doctors/DoctorsForm";
import DoctorsList from "@/pages/doctors/DoctorsList";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";
import PatientsForm from "@/pages/patients/PatientsForm";
import PatientsList from "@/pages/patients/PatientsList";

export const routes = [
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: Home,
				meta: { title: "Home" }
			},
			// patients
			{
				path: 'patients',
				meta: { title: "Patients" },
				children: [
					{
						index: true,
						Component: PatientsList,
					},
					{
						path: 'new',
						Component: PatientsForm,
					},
					{
						path: ':id?',
						Component: PatientsForm,
					}
				]
			},
			// doctors
			{
				path: 'doctors',
				meta: { title: "Doctors" },
				children: [
					{
						index: true,
						Component: DoctorsList,
					},
					{
						path: 'new',
						Component: DoctorsForm,
					},
					{
						path: ':id?',
						Component: DoctorsForm,
					}
				]
			},
			//appointments
			{
				path: 'appointments',
				meta: { title: "Appointments" },
				children: [
					{
						index: true,
						Component: AppointmentsList,
					},
					{
						path: 'new',
						Component: AppointmentsForm,
					},
					{
						path: ':id?',
						Component: AppointmentsForm,
					}
				]
			},
			{
				path: '*',
				Component: PageNotFound,
			},
		]
	}
]
