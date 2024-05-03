import { PrimaryLink } from "components/primary-link";
import { AppRoutes } from "router/AppRoutes";

function RootPage() {
	return (
		<div>
			<PrimaryLink to={AppRoutes.Home}>Got to Home Page</PrimaryLink>
		</div>
	)
}

export default RootPage;
