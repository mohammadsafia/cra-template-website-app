import { PrimaryLink } from "components/primary-link";
import { useDemoQuery } from "hooks/demo";
import { AppRoutes } from "router/AppRoutes";

function HomePage() {
	const { data, isLoading } = useDemoQuery();

	if(isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Welcome to the home page!</h1>
			<PrimaryLink to={AppRoutes.RootPage}>Go to Root Page</PrimaryLink>
			<ul>
				{data?.map((item, index) => (
					<li key={item.id}>{item.body}</li>
				))}
			</ul>
		</div>
	);
}
export default HomePage;