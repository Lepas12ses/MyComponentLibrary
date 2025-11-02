import { useCallback, useEffect, useId, useState } from "react";

export default function useVisibility(name: string) {
	const [isVisible, setIsVisible] = useState(false);
	const uniqueId = useId();

	const show = useCallback(() => {
		setIsVisible(true);
	}, []);

	const hide = useCallback(() => {
		setIsVisible(false);
	}, []);

	const toggle = useCallback(() => {
		setIsVisible(prev => !prev);
	}, []);

	useEffect(() => {
		if (name) {
			function onVisibilityEvent(e: Event) {
				const customEvent = e as CustomEvent<{
					name: string;
					isVisible: boolean;
					from: string;
				}>;
				const {
					name: componentName,
					isVisible: componentVisibility,
					from,
				} = customEvent.detail;
				if (componentName === name && from !== uniqueId) {
					setIsVisible(componentVisibility);
				}
			}

			document.addEventListener("visibility", onVisibilityEvent);

			return () => {
				document.removeEventListener("visibility", onVisibilityEvent);
			};
		}
	}, [name, uniqueId]);

	useEffect(() => {
		if (name) {
			const event = new CustomEvent("visibility", {
				detail: {
					name,
					from: uniqueId,
					isVisible,
				},
			});
			document.dispatchEvent(event);
		}
	}, [isVisible, name, uniqueId]);

	return { isVisible, show, hide, toggle };
}
