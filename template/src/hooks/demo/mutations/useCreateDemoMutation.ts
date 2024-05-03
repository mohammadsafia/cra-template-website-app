import { useMutation } from "@tanstack/react-query";
import { DemoService } from "api";

export const useCreateDemoMutation = () => {
	const createDemoMutation = useMutation({
		mutationKey: [DemoService.create.mutationKey],
		mutationFn: DemoService.create.request,
	})

	return {
		...createDemoMutation,
	}
}