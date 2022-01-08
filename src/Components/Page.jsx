import React from 'react';

let headFunc = (page) => {
  if (page.head === 'h1') {
    return <h1 style={{ color: page.color }}>{page.text}</h1>;
  } else if (page.head === 'h2') {
    return <h2 style={{ color: page.color }}>{page.text}</h2>;
  } else if (page.head === 'h3') {
    return <h3 style={{ color: page.color }}>{page.text}</h3>;
  } else if (page.head === 'h4') {
    return <h4 style={{ color: page.color }}>{page.text}</h4>;
  } else if (page.head === 'h5') {
    return <h5 style={{ color: page.color }}>{page.text}</h5>;
  } else {
    return <h6 style={{ color: page.color }}>{page.text}</h6>;
  }
};
export default function Page({ pages }) {
  return (
    <div className="page">
      <h2 className="page-title">Your Page</h2>
      <div className="page-block">
        {pages.map((page, index) => {
          return (
            <div key={index}>
              {page.type === 'heading' ? (
                <div className="heading-block">{headFunc(page)}</div>
              ) : (
                <div className="paragraph-block">
                  <p style={{ color: page.color, fontSize: `${page.font}px` }}>
                    {page.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
