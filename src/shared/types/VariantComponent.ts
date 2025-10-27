/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VariantProps } from "class-variance-authority";

export default interface VariantComponent<
	TVariants extends (...args: any) => any
> {
	className?: string;
	config?: VariantProps<TVariants>;
}
