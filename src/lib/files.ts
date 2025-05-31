import * as fs from 'fs';
import type { FileSystem } from '$lib';

export function readfiles(path: string): FileSystem {
    const children: FileSystem[] = [];
    if (!fs.lstatSync(path).isDirectory()) {
        return { name: path, isDir: false, children: [] }
    }
    
    let files = fs.readdirSync(path);
    for (const file of files) {
        const child = readfiles(path+'/'+file);
        children.push(child);
    }

    return { name: path, isDir: true, children: children }
}