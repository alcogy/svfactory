// place files you want to import through the `$lib` alias in this folder.
export interface FileSystem {
    name: string;
    isDir: boolean;
    children: FileSystem[];
}