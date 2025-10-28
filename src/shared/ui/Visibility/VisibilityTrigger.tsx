import {
	cloneElement,
	type FC,
	type HTMLAttributes,
	type ReactElement,
} from "react";
import useVisibilityContext from "./VisibilityContext";

interface VisibilityTriggerProps {
	children: ReactElement<HTMLAttributes<HTMLElement>>;
}

const VisibilityTrigger: FC<VisibilityTriggerProps> = ({ children }) => {
	const { toggle } = useVisibilityContext();

	const cloned = cloneElement(children, { onClick: toggle });

	return cloned;
};

export default VisibilityTrigger;
