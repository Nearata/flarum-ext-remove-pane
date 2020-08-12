import app from 'flarum/app';
import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

app.initializers.add('nearata/flarum-ext-remove-pane', () => {
    extend(DiscussionPage.prototype, 'init', () => app.pane.disable());

    extend(DiscussionPage.prototype, 'view', vnode => {
        for (const [i, v] of vnode.children.entries()) {
            if (v.attrs && v.attrs.className === 'DiscussionPage-list') {
                vnode.children.splice(i, 1, '');
            }
        }
    });
});
