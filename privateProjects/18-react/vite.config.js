import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
// 	plugins: [react()],
// 	base: '',
// 	build: {
// 		outDir: './dist',
// 	},
// 	css: {
// 		modules: {
// 			localsConvention: 'camelCase',
// 			generateScopedName: '[name]_[local]__[hash:base64:5]',
// 		},
// 	},
// })

export default args => {
	const generateScopedName = args.mode === 'production' ? '[hash:base64:5]' : '[name]_[local]__[hash:base64:5]'

	return defineConfig({
		plugins: [react()],
		base: '',
		build: {
			outDir: './dist',
		},
		css: {
			modules: {
				localsConvention: 'camelCase',
				generateScopedName,
			},
		},
	})
}
