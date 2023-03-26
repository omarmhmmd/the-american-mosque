import "../styles/globals.css";
import localFont from '@next/font/local'

const graphik = localFont({
  src: [
    {
      path: './fonts/Graphik-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Graphik-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Graphik-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Graphik-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Graphik-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})


function MyApp({ Component, pageProps }) {
  return (
    <main className={graphik.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp;
