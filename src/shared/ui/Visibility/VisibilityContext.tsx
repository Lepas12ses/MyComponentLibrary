import { createContext, useContext } from "react";

export interface IVisibilityContext {
	isVisible: boolean;
	toggle: () => void;
	show: () => void;
	hide: () => void;
}

export const VisibilityContext = createContext<IVisibilityContext | null>(null);

export default function useVisibilityContext() {
	const context = useContext(VisibilityContext);

	if (!context) {
		throw new Error(
			"You cannot use VisibilityContext outside VisibilityProvider"
		);
	}

	return context;
}
