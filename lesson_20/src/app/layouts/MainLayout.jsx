import Header from "@/widgets/Header";
import { Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/shared/ui/ErrorFallback"
function MainLayout() {
	return (
		<div>
			<Header />
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Outlet />
			</ErrorBoundary>
		</div>
	)
}

export default MainLayout;

