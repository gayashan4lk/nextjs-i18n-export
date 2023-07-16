import { useMemo } from 'react';
import '@/styles/globals.css';
import English from '@/lang/en.json';
import Sinhala from '@/lang/si.json';
import Tamil from '@/lang/ta.json';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
	const langs = {
		en: English,
		si: Sinhala,
		ta: Tamil,
	};

	const { locale } = useRouter();
	const [shortLocale] = locale ? locale.split('-') : ['en'];

	const messages = useMemo(() => {
		return langs[shortLocale] || langs.en;
	}, [shortLocale, langs]);

	return (
		<IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
			<Component {...pageProps} />
		</IntlProvider>
	);
}
