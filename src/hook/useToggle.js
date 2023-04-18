import { useCallback, useState } from "react";
import Toggle from "../modules/Toggle";

const useToggle = () => {
  const [state, setState] = useState(false);
  const toggle = useCallback(() => setState((state) => !state), []);

  return {
    Toggle: ({ className, on, off }) => (
      <Toggle
        className={className}
        state={state}
        toggle={toggle}
        on={on}
        off={off}
      ></Toggle>
    ),
    state,
    toggle,
  };
};

export default useToggle;
