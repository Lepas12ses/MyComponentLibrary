export default function repeat<T>(
	count: number,
	repeatFn: (index: number) => T
): T[] {
	if (count <= 0) return [];
	return new Array(count).fill(0).map((_, index) => repeatFn(index));
}
