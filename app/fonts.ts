import localFont from 'next/font/local'

export const nordhin = localFont({
  src: [
    {
      path: './fonts/Nordhin.ttf',
      weight: '400',
      style: 'normal',
    },

  ],
  variable: '--font-nordhin',
})

export default nordhin
