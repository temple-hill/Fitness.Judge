import * as React from 'react';

interface Props {
  text?: string | null;
}

const Nl2br: React.FC<Props> = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <React.Fragment>
      {text.split('\n').map((str: string, i) => (
        <React.Fragment key={i}>
          {str}
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Nl2br;
