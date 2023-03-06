import React, { useState } from 'react';
import { NodeProps } from '../Node';

interface CounterProps {
  defaultValue: number; // 숫자의 초기 값
}

const withUtil = <N extends NodeProps>(
  WrappedComponent: React.ComponentType<N>,
): React.FC<CounterProps & Omit<N, keyof NodeProps>> => {
  const CounterComponent = ({ defaultValue, ...props }: CounterProps) => {
    const [value, setValue] = useState(defaultValue);
    const [colorOption, setColorOption] = useState(true); // true : black, false: green

    const onClick = () => {
      setColorOption(!colorOption);
    };

    const increment = () => {
      setValue(value + 1);
    };

    const decrement = () => {
      setValue(value - 1);
    };

    return (
      <div>
        <WrappedComponent {...(props as N)} value={value} isBlack={colorOption} onClick={onClick} />
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
    );
  };
  return CounterComponent;
};

export { withUtil };
