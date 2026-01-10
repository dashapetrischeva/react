import { Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import frontRoutes from './frontRoutes'
import HomePage from '../pages/HomePage'
import TeachersForm from '../pages/teachers/TeachersForm'
import TeachersDetail from '../pages/teachers/TeachersDetail'
import Meetings from '../pages/Meetings'
import InfoLayout from '../layouts/InfoLayout'
import AboutApp from '../pages/AboutApp'
import AboutDev from '../pages/AboutDev'
import TeachersList from '../pages/teachers/TeachersList'

function AppRoutes() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path={frontRoutes.pages.home} element={<HomePage />} />
				<Route path={frontRoutes.pages.teachers.root}>
					<Route index element={<TeachersList />} />
					<Route path={frontRoutes.pages.teachers.add} element={<TeachersForm />} />
					<Route path={frontRoutes.pages.teachers.edit} element={<TeachersForm />} />
					<Route path={frontRoutes.pages.teachers.detail} element={<TeachersDetail />} />
				</Route>
				<Route path={frontRoutes.pages.meetings} element={<Meetings />} />
			</Route>
			<Route element={<InfoLayout />}>
				<Route path={frontRoutes.pages.aboutApp} element={<AboutApp />} />
				<Route path={frontRoutes.pages.aboutDev} element={<AboutDev />} />
			</Route>
		</Routes>

	);
}

export default AppRoutes;