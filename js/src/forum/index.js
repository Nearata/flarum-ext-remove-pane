import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';

app.initializers.add('nearata-remove-pane', app => {
    extend(DiscussionPage.prototype, 'oninit', () => app.pane.disable());

    extend(DiscussionPage.prototype, 'oncreate', function () {
        for (const i of this.element.children) {
            if (i.className === 'DiscussionPage-list') {
                i.remove();
            }
        }
    });
});
