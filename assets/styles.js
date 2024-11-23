
const styles = new Map([
    ['nostrLink', 'text-sky-600 break-all hover:bg-sky-600 hover:text-white dark:text-amber-200 dark:hover:bg-amber-200 dark:hover:text-zinc-800 rounded-md'],
    ['linkPrimary', 'text-sky-600 hover:bg-sky-600 hover:text-white py-1 px-2 rounded-md dark:text-amber-200 dark:hover:bg-amber-200 dark:hover:text-zinc-800'],
    ['linkInText', 'underline text-sky-600 underline-sky-600 dark:text-amber-200 dark:underline-amber-200 '],
    ['titleOne', 'text-2xl font-bold text-zinc-700 mt-6 dark:text-zinc-200']
]);

function addClass(className, contents) {
    const elements = document.getElementsByClassName(className);

    Array.from(elements).forEach(element => {
        element.className = contents;
    })
}

document.addEventListener('DOMContentLoaded', () => {
    for (let [className, classContents] of styles) {
        addClass(className, classContents);
    }
});
