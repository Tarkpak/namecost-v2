import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/common/AuthLayout'
import { Button } from '@/components/common/Button'
import { TextField } from '@/components/common/Fields'
import { Logo } from '@/components/Logo'
import { SendField } from '@/components/common/SendField'

import http from '@/utils/axios'
import { useForm, Controller } from 'react-hook-form'

export default function Register() {
  const { register, control, watch, trigger, handleSubmit } = useForm()

  const email = watch('email')

  const handleRegistry = (form) => {
    http.post('/users/register', form).then((res) => {
      location.href = '/login'
    })
  }

  return (
    <>
      <Head>
        <title>Sign Up - NameCost</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleRegistry)}
          className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            {...register('firstname', { required: true })}
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
            {...register('lastname', { required: true })}
          />
          <TextField
            className="col-span-full"
            label="User Name"
            id="username"
            name="username"
            type="text"
            autoComplete="text"
            {...register('username', { required: true })}
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            {...register('email', { required: true })}
          />
          <Controller
            name="Activationkey"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <SendField
                email={email}
                trigger={trigger}
                emailType="reg"
                {...field}
              />
            )}
          />
          {/* <SendField email={form.email} emailType="reg" getCode={ getCode } /> */}
          <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            {...register('password', { required: true })}
          />
          <TextField
            className="col-span-full"
            label="Password Verification"
            id="passwordverification"
            name="passwordverification"
            type="password"
            autoComplete="new-password"
            {...register('repassword', { required: true })}
          />

          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="subgreen"
              className="w-full"
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
