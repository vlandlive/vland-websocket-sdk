import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2";

import terser from "@rollup/plugin-terser";
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

const rollupConfig = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        // terser(),
        json(),
        copy({
            targets: [
                { src: 'src/data/*', dest: 'dist/data' }
            ]
        })
    ]
}

export default rollupConfig
