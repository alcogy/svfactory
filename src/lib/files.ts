import * as fs from 'fs';
import type { Routes } from '$lib';
import { fileTypes } from '$lib';
import { v4 as uuidv4 } from 'uuid';

export function readSvelteRoutes(path: string): Routes {
    const children: Routes[] = [];
    const svFiles: string[] = [];
    if (!fs.lstatSync(path).isDirectory()) {
        return {
            id: uuidv4(),
            name: getNameFromFullPath(path),
            path: path,
            isDir: false,
            files: [],
            children: []
        }
    }
    
    let files = fs.readdirSync(path);
    for (const file of files) {
        const result = readSvelteRoutes(path+'/'+file);
        if (fileTypes.includes(result.name)) {
            svFiles.push(result.name)
        } else {
            children.push(result);
        }
        
    }

    return {
        id: uuidv4(),
        name: getNameFromFullPath(path),
        path: path,
        isDir: true,
        files: svFiles,
        children: children
    }
}

function getNameFromFullPath(path: string): string {
    const pathes = path.split('/');
    return pathes[pathes.length - 1];
}