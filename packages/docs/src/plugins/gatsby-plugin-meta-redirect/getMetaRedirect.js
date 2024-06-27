module.exports = function getMetaRedirect(toPath) {
  let url = toPath.trim();

  const hasProtocol = url.includes('://');
  if (!hasProtocol) {
    const hasLeadingSlash = url.startsWith('/');
    if (!hasLeadingSlash) {
      url = `/${url}`;
    }

    const resemblesFile = url.includes('.');
    if (!resemblesFile) {
      url = `${url}/`.replace(/\/\/+/g, '/');
    }
  }

  return `<!DOCTYPE html>
<html>
  <head>
    <title>https://coreui.io${url}</title>
    <link rel="canonical" href="https://coreui.io${url}"/>
    <meta name="robots" content="noindex">
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=https://coreui.io${url}" />
  </head>
</html>`;
};
