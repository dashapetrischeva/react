export interface ErrorFallbackProps {
	error: Error | unknown
	resetErrorBoundary: () => void
}