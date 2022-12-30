interface ErrorMessageProps{
    error: string
}
export const ErrorMessage = ({error} : ErrorMessageProps) => {
    return <p className="text-center text-red-500">{error}</p>
}

