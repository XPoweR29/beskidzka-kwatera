import { useAppContext } from "./useAppContext";

export const useBreakpoints = () => {
	const { breakpoint } = useAppContext();

	if (breakpoint === undefined) {
		throw new Error("useBreakpoints hook must be used within ContexProvider");
	}

	return { breakpoint };
};
