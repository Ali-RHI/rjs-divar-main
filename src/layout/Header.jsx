import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from 'services/user.js';

function Header() {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
	});
	return (
		<header className={styles.header}>
			<div>
				<Link to="/">
					<img
						src="divar.svg"
						className={styles.logo}
					/>
				</Link>
				<span>
					<img src="location.svg" />
					<p>تهران</p>
				</span>
			</div>
			<div>
				{data && data.data.role === 'ADMIN' && (
					<Link to="/admin">
						<span>
							<img src="manager.svg" id={styles.manager} />
							<p>مدیریت</p>
						</span>
					</Link>
				)}

				<Link to="/auth">
					<span>
						<img src="profile.svg" />
						<p>دیوار من</p>
					</span>
				</Link>
				<Link
					to="/dashboard"
					className={styles.button}>
					{' '}
					ثبت آگهی
				</Link>
			</div>
		</header>
	);
}

export default Header;
