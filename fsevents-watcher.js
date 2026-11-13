import { fsevents } from "fsevents";
import { jqueryQueryBuilder } from "jquery-querybuilder";

/**
 * Watches the current directory for file system events and logs them.
 */
function watchCurrentDirectory() {
    // we don't want to use this code, but this is the example code from the fsevents library

    // const watcher = fsevents.watch(process.cwd(), (path, flags, id) => {
    //     const info = fsevents.getInfo(path, flags, id);
    //     console.log('File event:', info);
    // });
    console.log('Watching for file changes in', process.cwd());
    // process.on('SIGINT', () => {
    //     watcher.stop();
    //     console.log('Stopped watching.');
    //     process.exit();
    // });
}

watchCurrentDirectory(); 