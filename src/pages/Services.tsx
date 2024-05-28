import useSetDocumentTitle from '../hooks/useSetDocumentTitle';
import { useAuth } from "../hooks/useAuth";

export default function Services() {
	const { logout } = useAuth();
	useSetDocumentTitle({ separator: '-', reverse: true });

	let openingHours = JSON.parse(import.meta.env.VITE_OPENING_HOURS);

	return (
		<div className='page'>
			<div className='container page content'>
				<section>
					<div className='py-28 gap-12 overflow-hidden md:flex'>

						<h1>Services</h1>
						<div>{import.meta.env.VITE_OPENING_HOURS}</div>
						<p>{openingHours[0]['dayOfWeek']}</p>
						<p>{import.meta.env.VITE_ADDRESS_STREET}</p>
					</div>
          <button onClick={logout}>Logout</button>
				</section>
			</div>
		</div>
	);
}
