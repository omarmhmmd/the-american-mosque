import "../styles/globals.css";
import localFont from '@next/font/local'
import { motion } from "framer-motion"

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
      path: './fonts/Graphik-Semibold.otf',
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={graphik.className}>
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp;
