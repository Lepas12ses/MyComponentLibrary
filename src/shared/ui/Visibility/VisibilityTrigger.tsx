import { type FC, type ReactNode } from "react";
import useVisibilityContext from "./VisibilityContext";

interface VisibilityTriggerProps {
	render: (options: {
		toggle: () => void;
		show: () => void;
		hide: () => void;
	}) => ReactNode;
}

const VisibilityTrigger: FC<VisibilityTriggerProps> = ({ render }) => {
	const { toggle, show, hide } = useVisibilityContext();

	return render({ toggle, show, hide });
};

export default VisibilityTrigger;
