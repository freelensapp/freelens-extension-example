import { Renderer } from "@freelensapp/extensions";
import { observer } from "mobx-react";
import { ExamplePreferencesStore } from "../../common/store";

const {
  Component: { Checkbox },
} = Renderer;

const preferences = ExamplePreferencesStore.getInstanceOrCreate();

export const ExamplePreferenceInput = observer(() => {
  return (
    <Checkbox
      label="Example checkbox"
      value={preferences.enabled.get()}
      onChange={(v) => {
        console.log(`[EXAMPLE-PREFERENCES-STORE] onChange ${v}`);
        preferences.enabled.set(v);
      }}
    />
  );
});

export const ExamplePreferenceHint = () => <span>This is an example of an preference for extensions.</span>;
