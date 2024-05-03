import { Liferay } from "types/Liferay";

declare global {
	interface Window {
		Liferay: Liferay
	}
}