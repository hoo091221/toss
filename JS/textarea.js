const DEFAULT_HEIGHT = 0;

const $textarea = document.querySelector('#content');

$textarea.oninput = (event) => {
    const $target = event.target;
    if ($target.style.height = DEFAULT_HEIGHT + $target.scrollHeight < screen.availHeight - 500) {
        $target.rows = 0;
        $target.style.height = 0;
        $target.style.height = DEFAULT_HEIGHT + $target.scrollHeight + 'px';
        $target.style.overflow = 'hidden';
    } else {
        $target.style.overflow = 'visible';
    }
};