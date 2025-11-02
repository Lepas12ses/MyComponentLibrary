import type { FC, ReactNode } from "react";
import useVisibilityContext from "./VisibilityContext";

interface VisibilityTargetProps {
	render: (isVisible: boolean) => ReactNode;
}

const VisibilityTarget: FC<VisibilityTargetProps> = ({ render }) => {
	const { isVisible } = useVisibilityContext();

	return render(isVisible);
};

export default VisibilityTarget;
