import http from '@/utils/axios'
import { forwardRef, useState } from 'react'

export const SendField = forwardRef(
  ({ value, email, onChange, emailType, trigger }, ref) => {
    const [disabled, setDisabled] = useState(false)
    const [second, setSecond] = useState(10)

    const sendCode = async () => {
      const valid = await trigger('email', { shouldFocus: true })
      let interval = null
      if (valid) {
        http
          .post('/users/send-email-code', { email, email_type: emailType })
          .then((res) => {
            setDisabled(true)
            interval = setInterval(() => {
              if (second === 0) {
                setSecond(10)
                setDisabled(false)
                clearInterval(interval)
                return
              }
              setSecond(--second)
            }, 1000)
          })
      }
    }

    return (
      <div className="col-span-full flex">
        <input
          value={value}
          type="text"
          name="validcode"
          id="validcode"
          className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-green-500 sm:text-sm"
          placeholder="validation code"
          required
          onChange={onChange}
        />

        <button
          type="button"
          className={`bg-mygreen-500 relative -ml-px inline-flex w-20 items-center space-x-2 rounded-r-md border border-gray-300 px-4 py-2 text-sm font-medium text-white ${
            disabled ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={disabled}
          onClick={sendCode}
        >
          <span className="flex-1">{disabled ? second : 'Send'}</span>
        </button>
      </div>
    )
  }
)
