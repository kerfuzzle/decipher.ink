export function memoize<Arguments extends unknown[], Result>(func: (...args: Arguments) => Result): (...args: Arguments) => Result {
	const resultMap = new Map<string, Result>();
	return (...args): Result => {
		const argsJSON = JSON.stringify(args);
		let result = resultMap.get(argsJSON);
		if (result) return result;
		result = func(...args);
		resultMap.set(argsJSON, result);
		return result;
	};
}