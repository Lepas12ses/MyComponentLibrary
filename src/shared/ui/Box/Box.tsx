import type VariantComponent from "@/shared/types/VariantComponent";
import cn from "@/shared/util/cn";
import { cva } from "class-variance-authority";
import type { FC, PropsWithChildren } from "react";

const box = cva("flex", {
	variants: {
		variants: {
			center: "items-center justify-center",
			left: "justify-start",
			right: "justify-end",
			top: "items-start",
			bottom: "items-end",
		},
		size: {
			full: "h-full w-full",
			screen: "h-screen w-screen",
		},
	},
	defaultVariants: {
		size: "full",
		variants: "center",
	},
});

interface BoxProps extends PropsWithChildren, VariantComponent<typeof box> {}

const Box: FC<BoxProps> = ({ children, className, config }) => {
	const classes = cn(box({ ...config }), className);

	return <div className={classes}>{children}</div>;
};

export default Box;
