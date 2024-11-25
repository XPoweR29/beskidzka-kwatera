// NOTE: Należy stworzyć odpowiedni plik declaration z określonymi typami dla używania SCSS modules.
// Definicja dla modułów SCSS (styles.module.scss)
declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export = classes;
}

// Definicja dla globalnych plików SCSS (global.scss)
declare module '*.scss' {
	const content: string;
	export default content;
}

// Definicja dla plików SVG
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
