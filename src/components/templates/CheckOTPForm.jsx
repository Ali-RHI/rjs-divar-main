import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { checkOTP } from 'services/auth.js';
import { setCookie } from 'utils/cookies.js';
import { getProfile } from '../../services/user.js';

import styles from "./CheckOTPForm.module.css"

function CheckOTPForm({ code, setCode, setStep, mobile }) {
	const navigate = useNavigate();

	const { refetch } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
	});

	const submitHandler = async (e) => {
		e.preventDefault();
		if (code.length !== 5) return;
		const { response, error } = await checkOTP(mobile, code);
		if (response) {
			setCookie(response.data);
			navigate("/")
			refetch()
		}
		if (error) {
			console.log(error.response.data.message);
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<p>تایید کد اس ام اس شده</p>
			<span>کد پیامک شده به شماره «{mobile}» را وارد کنید.</span>
			<label htmlFor="input">کد تایید را وارد کنید</label>
			<input
				type="text"
				id="input"
				placeholder="کد تایید"
				value={code}
				onChange={(e) => setCode(e.target.value)}
			/>
			<button type="submit">ورود</button>
			<button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
		</form>
	);
}

export default CheckOTPForm;
