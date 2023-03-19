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
export function ShareTwitter ({codelink}){
  return (
    <button
    type="button"
    className="inline-flex items-center rounded-full border border-transparent bg-[#1da1f2] px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    onClick={() => {
      socialWindow(`https://twitter.com/intent/tweet?url=${location.href}&text=${codelink}`)
    }}
  >
    <svg
      viewBox="0 0 48 48"
      className="mr-1 h-6 w-6 fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"
        fill="#fff"
        stroke="#fff"
        stroke-width="4"
        strokeLinejoin="round"
      />
    </svg>
    Share on Twitter
  </button>
  )
}