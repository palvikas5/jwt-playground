const useRouter = jest.spyOn(require('next/router'), 'useRouter');

function mockUseRouter(props: {
  route?: string;
  pathname?: string;
  query?: string;
  asPath?: string;
  push?: (path: string) => void;
}) {
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
    push: props.push,
  }));
}

export { mockUseRouter };
