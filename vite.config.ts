import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		imagemin({
			gifsicle: {
				optimizationLevel: 3,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 5,
			},
			mozjpeg: {
				quality: 85,
			},
			pngquant: {
				quality: [0.7, 0.9],
				speed: 1,
			},
			webp: {
				quality: 85,
			},
		}),
	],
	server: {
		port: 3000,
	},
	css: {
		devSourcemap: true,
	},
});
