import useSetDocumentTitle from '../hooks/useSetDocumentTitle';
import { useAuth } from "../hooks/useAuth";

function Login() {
	useSetDocumentTitle();
	const { login } = useAuth();

	function handleButton(e: { preventDefault: () => void; }) {
    	e.preventDefault();
    	//const data = new FormData(e.currentTarget);
    	//TODO
    	login({
			token: 'AAAA'
    	});
	}

	return (
		<div className='container page content'>
			<section className='py-14'>
				<h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>Login</h3>
			</section>
          <button onClick={handleButton}>ログイン</button>
		</div>
	);
}

export default Login;
