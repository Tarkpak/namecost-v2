import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/common/AuthLayout'
import { Button } from '@/components/common/Button'
import { TextField } from '@/components/common/Fields'
import { Logo } from '@/components/Logo'
import { useState } from 'react'
import http from '@/utils/axios'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const [form, setForm] = useState({ username: '', password: '' })
  return (
    <>
      <Head>
        <title>Sign In - NameCost</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-green-600 hover:underline"
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </p>
          </div>
        </div>
        <form
          method="post"
          className="mt-10 grid grid-cols-1 gap-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            http
              .post('/users/login', form)
              .then((token) => {
                token && localStorage.setItem('token', token)
                router.push('/')
              })
              .catch((err) => {
                console.log(err)
              })
          }}
        >
          <TextField
            label="Account"
            id="text"
            name="username"
            type="text"
            autoComplete="account-name"
            required
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="/resetpassword"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              variant="solid"
              color="subgreen"
              className="w-full"
            >
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
