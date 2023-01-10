import React from 'react'
import { LinkProps, useMatch, useResolvedPath, Link } from 'react-router-dom';

const PageLink = ({to, children, ...props} : LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link className={!!match ? 'active': ''} to={to}>{children}</Link>
  )
}

export default PageLink