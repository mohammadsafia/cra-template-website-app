import { useQuery } from "@tanstack/react-query";
import { DemoService } from "api";

export const useDemoQuery = () => {
	const demoQuery = useQuery({
		queryKey: [DemoService.list.queryKey],
		queryFn: DemoService.list.request,
	});

	return {
		...demoQuery
	}
}