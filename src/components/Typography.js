import classNames from 'classnames';
import React from 'react';
import PropTypes from 'utils/propTypes';

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  lead: 'p',
  blockquote: 'blockquote',
};

const types = Object.keys(tagMap);

const Typography = ({ tag: Tag, className, type, ...restProps }) => {
  const classes = classNames({ [type]: !!type }, className);
  let TypoComp;

  if (Tag) {
    TypoComp = Tag;
  } else if (!Tag && tagMap[type]) {
    TypoComp = tagMap[type];
  } else {
    TypoComp = 'p';
  }

  return <TypoComp {...restProps} className={classes} />;
};

Typography.propTypes = {
  tag: PropTypes.component,
  className: PropTypes.string,
  type: PropTypes.oneOf(types),
};

Typography.defaultProps = {
  type: 'p',
};

export default Typography;
