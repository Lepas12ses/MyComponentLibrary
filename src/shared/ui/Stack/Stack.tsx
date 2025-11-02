import type VariantComponent from "@/shared/types/VariantComponent";
import cn from "@/shared/util/cn";
import { cva } from "class-variance-authority";
import type { ElementType, FC, PropsWithChildren } from "react";

const stack = cva("flex w-fit items-center", {
	variants: {
		direction: {
			row: "flex-row",
			col: "flex-col",
		},
		gap: {
			xs: "gap-0.5",
			sm: "gap-2",
			md: "gap-4",
			lg: "gap-8",
			xl: "gap-12",
		},
		wrap: {
			wrap: "flex-wrap",
		},
	},
	defaultVariants: {
		direction: "row",
		gap: "sm",
	},
});

interface StackProps extends PropsWithChildren, VariantComponent<typeof stack> {
	component?: ElementType;
}

const Stack: FC<StackProps> = ({
	children,
	className,
	config,
	component: Component = "div",
}) => {
	const classes = cn(stack({ ...config }), className);

	return <Component className={classes}>{children}</Component>;
};

export default Stack;
