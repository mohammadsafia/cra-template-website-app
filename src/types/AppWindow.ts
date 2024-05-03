import { Liferay } from "types/Liferay";

export type AppWindow = Window & typeof globalThis &
	{
		Liferay: Liferay
	}
