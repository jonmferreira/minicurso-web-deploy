import { defineConfig as defineVite}  from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig, mergeConfig  } from 'vitest/config'
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/

const configVite = defineVite({
    plugins: [
        react(  ),
        tsconfigPaths(),
        reactRefresh({
            // @ts-ignore
            excludeExports: ['mapStateToProps', 'mapDispatchToProps']
        })
    ],
    esbuild: {
        pure: ['console.log'],
    },
    worker: {
        plugins: [react()],
    },
    base: "/minicurso-web-deploy",
    server: {
        host: true,
        port: 8000, // This is the port which we will use in docker
        // Thanks @sergiomoura for the window fix
        // add the next lines if you're using windows and hot reload doesn't work
        watch: {
            usePolling: true
        }
    }
})

export default mergeConfig(configVite, defineConfig({

    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'jest-setup.js',
        // you might want to disable it, if you don't have tests that rely on CSS
        // since parsing CSS is slow
        css: true,
    },
}))


