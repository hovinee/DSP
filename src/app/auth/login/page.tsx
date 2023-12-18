import LoginForm from '@components/form/login-form/LoginForm'
import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const Login = async () => {
  const session = await getServerSession(authOptions)
  if (session) redirect('/')

  return (
    <div className="grid h-screen w-full place-items-center">
      <LoginForm />
    </div>
  )
}

export default Login
