import type { AppProps } from 'next/app'
import './../styles/index.scss'
import UserProvider from './context/UserContext/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<Component {...pageProps} />
		</UserProvider>
	)
}

export default MyApp
