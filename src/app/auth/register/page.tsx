import React from 'react'

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from 'app/api/auth/[...nextauth]/route'
import RegisterForm from '@components/form/register-form/RegisterForm'

const Register = async () => {
  const session = await getServerSession(authOptions)
  if (session) redirect('/auth/userInfo')

  return (
    <div className="grid h-screen w-full place-items-center">
      <RegisterForm />
    </div>
  )
}

export default Register
