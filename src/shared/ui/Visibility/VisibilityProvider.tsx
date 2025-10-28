import { useCallback, useState, type FC, type ReactNode } from "react";
import {
	VisibilityContext,
	type IVisibilityContext,
} from "./VisibilityContext";

interface VisibilityProviderProps {
	children: ReactNode;
}

const VisibilityProvider: FC<VisibilityProviderProps> = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggle = useCallback(() => {
		setIsVisible(prev => !prev);
	}, []);

	const show = useCallback(() => {
		setIsVisible(true);
	}, []);

	const hide = useCallback(() => {
		setIsVisible(false);
	}, []);

	const ctxValue: IVisibilityContext = {
		isVisible,
		toggle,
		show,
		hide,
	};

	return <VisibilityContext value={ctxValue}>{children}</VisibilityContext>;
};

export default VisibilityProvider;
