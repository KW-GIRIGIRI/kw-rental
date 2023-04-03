import { useCallback, useState } from "react";
import Toggle from "../modules/Toggle";

const useToggle = () => {
  const [state, setState] = useState(false);
  const toggle = useCallback(() => setState((state) => !state), []);

  return {
    Toggle: ({ on, off }) => (
      <Toggle state={state} toggle={toggle} on={on} off={off}></Toggle>
    ),
    state,
    toggle,
  };
};

export default useToggle;
