import * as React from 'react';

const NoMatch: React.FC = () => {

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="text-center">
        <h1>ページが見つかりません</h1>
        <p className="m-0">404 not found</p>
      </div>
    </div>
  );
};

export default NoMatch;
