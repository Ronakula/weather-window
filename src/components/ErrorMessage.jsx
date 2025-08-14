import '../styles/ErrorMessage.css'

function ErrorMessage({ message }) {
  return (
    <div className='error'>
        Error: {message}
    </div>
  )
}

export default ErrorMessage