import { useCallback, useState } from "react";
import Toggle from "../modules/Toggle";

const useToggle = () => {
  const [state, setState] = useState(true);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  const changeInitial = useCallback((initial) => {
    setState(initial);
  }, []);

  return {
    Toggle: ({ className, on, off, onClickFunc }) => (
      <Toggle
        className={className}
        onClickFunc={onClickFunc}
        state={state}
        toggle={toggle}
        on={on}
        off={off}
      ></Toggle>
    ),
    state,
    toggle,
    changeInitial,
  };
};

export default useToggle;
