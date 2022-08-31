import {useMemo} from 'react';
import {INPUT_ICON_PARAMS} from '../../constants';

export const useInputRowRightIcon = (isValueValid?: boolean) => {
  return useMemo(() => {
    switch (isValueValid) {
      case false:
        return INPUT_ICON_PARAMS.NOT_VALID_VALUE_ICON;
      case true:
        return INPUT_ICON_PARAMS.VALID_VALUE_ICON;

      default:
        return undefined;
    }
  }, [isValueValid]);
};
