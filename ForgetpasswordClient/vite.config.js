import {defineConfig} from 'vite';
import React from '@vitejs/plugin-react';
import pluginRewriteAll   from  'reax-plugin-rewrite-all';

export default defineConfig({
    plugins: [
        React(),
        pluginRewriteAll()
    ]
})