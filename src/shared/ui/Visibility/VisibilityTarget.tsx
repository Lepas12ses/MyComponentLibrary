import type { FC, ReactNode } from "react";
import useVisibilityContext from "./VisibilityContext";

interface VisibilityTargetProps {
	children: ReactNode;
}

const VisibilityTarget: FC<VisibilityTargetProps> = ({ children }) => {
	const { isVisible } = useVisibilityContext();

	if (!isVisible) return;

	return children;
};

export default VisibilityTarget;
