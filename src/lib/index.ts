// place files you want to import through the `$lib` alias in this folder.

export interface Routes {
    id: string;
    name: string;
    path: string;
    isDir: boolean;
    files: string[];
    children: Routes[];
}

export const fileTypes = [
    '+page.svelte',
    '+page.ts',
    '+page.server.ts',
    '+error.svelte',
    '+layout.svelte',
    '+layout.ts',
    '+layout.server.ts',
    '+server.ts'
]


export interface RouteState {
    path: string;
    routes: Routes | null;
    selected: Routes | null;
}