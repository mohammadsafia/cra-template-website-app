import { ComponentType, Suspense, ComponentProps } from "react";

const WithLoadable = <T extends ComponentType<any>>(Component: T) => (props: ComponentProps<T>) => (
	<Suspense fallback={<span>loading</span>}>
		<Component {...props} />
	</Suspense>
);

export default WithLoadable;
