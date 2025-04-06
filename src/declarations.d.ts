
declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export = classes;
}

declare module '*.scss' {
	const content: string;
	export default content;
}


declare module '*.svg' {
	const content: string;
	export default content;
}

declare module '*.webp' {
	const value: string;
	export default value;
}

declare module '*.avif' {
	const value: string;
	export default value;
}

declare module '*.png' {
	const value: string;
	export default value;
}

declare module '*.jpg' {
	const value: string;
	export default value;
}

declare module '*.jpeg' {
	const value: string;
	export default value;
}
