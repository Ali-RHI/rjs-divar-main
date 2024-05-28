import Main from '../components/templates/Main.jsx';
import Sidebar from '../components/templates/Sidebar.jsx';

const style = {display:"flex"}

function HomePage() {
	return (
		<div style={style}>
			<Sidebar />
			<Main />
		</div>
	);
}

export default HomePage;
