import app from 'flarum/app';
import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

app.initializers.add('nearata-remove-pane', () => {
    extend(DiscussionPage.prototype, 'oninit', () => app.pane.disable());

    extend(DiscussionPage.prototype, 'oncreate', function () {
        for (const i of this.element.children) {
            if (i.className === 'DiscussionPage-list') {
                i.remove();
            }
        }
    });
});
