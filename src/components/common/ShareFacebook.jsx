function socialWindow(url) {
  var left = (screen.width - 570) / 2
  var top = (screen.height - 570) / 2
  var params =
    'menubar=no,toolbar=no,status=no,width=570,height=570,top=' +
    top +
    ',left=' +
    left
  window.open(url, 'NewWindow', params)
}
export function ShareFacebook ({codelink}){
  return (
    <button
    type="button"
    className="inline-flex items-center rounded-full border border-transparent bg-[#1877f2] px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    onClick={() => {
      socialWindow(`https://www.facebook.com/sharer.php?u=${location.href}&text=${codelink}`)
    }}
  >
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1 h-6 w-6 fill-white"
    >
      <path
        d="M36 12.5997H31.2489H29.9871C28.9009 12.5997 28.0203 13.4803 28.0203 14.5666V21.4674H36L34.8313 29.0643H28.0203V43H19.2451V29.0643H12V21.4674H19.1515L19.2451 14.2563L19.2318 12.9471C19.1879 8.60218 22.6745 5.04434 27.0194 5.0004C27.0459 5.00013 27.0724 5 27.0989 5H36V12.5997Z"
        fill="#ebebeb"
        stroke="#ebebeb"
        stroke-width="4"
        strokeLinejoin="round"
      />
    </svg>
    Share on Facebook
  </button>
  )
}