import * as React from 'react';
import { BaseContext, FormErrors } from '../../lib/contexts/base';
import { FlashMessageInterface } from '../../lib/interface/responses';

interface Props {
  flashMessage?: FlashMessageInterface | undefined;
}

const Base: React.FC<Props> = ({ flashMessage, children }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [info, setInfo] = React.useState<string>('');
  const [errors, setErrors] = React.useState<string[]>([]);
  const [formErrors, setFormErrors] = React.useState<FormErrors>();
  const [timerId, setTimerId] = React.useState<NodeJS.Timeout | undefined>(undefined);

  const axiosWithHandleErrors = React.useCallback(async (axiosFunc) => {
    try {
      const res = await axiosFunc;
      return res.data;
    } catch (_e) {
      alert('データの取得に失敗しました。');
    }
  }, []);

  const clearInfoAndErrors = React.useCallback(() => {
    setInfo('');
    setErrors([]);
    setFormErrors(undefined);
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    if (info === '') {
      return;
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    const nextTimerId = setTimeout(() => {
      setInfo('');
    }, 3000);
    setTimerId(nextTimerId);
  }, [info]);

  React.useEffect(() => {
    if (flashMessage) {
      if (flashMessage?.type === 'success') {
        setInfo(flashMessage.message);
      }

      if (flashMessage?.type === 'danger') {
        setErrors([flashMessage.message]);
      }
    }
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <BaseContext.Provider
      value={{
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        info: info,
        setInfo: setInfo,
        formErrors: formErrors,
        setFormErrors: setFormErrors,
        errors: errors,
        setErrors,
        axiosWithHandleErrors: axiosWithHandleErrors,
        clearInfoAndErrors: clearInfoAndErrors,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default Base;
