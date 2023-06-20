import { extend, override } from "flarum/common/extend";
import app from "flarum/forum/app";
import DiscussionListPane from "flarum/forum/components/DiscussionListPane";
import DiscussionPage from "flarum/forum/components/DiscussionPage";

app.initializers.add("nearata-remove-pane", () => {
  extend(DiscussionPage.prototype, "oninit", () => app.pane?.disable());

  override(DiscussionListPane.prototype, "view", () => {});
});
