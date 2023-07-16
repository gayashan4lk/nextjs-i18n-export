import { useRouter } from 'next/router';
import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
	const router = useRouter();

	const changeLanguage = (locale) => {
		router.push(router.pathname, router.asPath, { locale });
	};

	return (
		<div className={styles.langTranslationBtnContainer}>
			<button onClick={() => changeLanguage('en')}>English</button>
			<button onClick={() => changeLanguage('si')}>සිංහල</button>
			<button onClick={() => changeLanguage('ta')}>தமிழ்</button>
		</div>
	);
}
