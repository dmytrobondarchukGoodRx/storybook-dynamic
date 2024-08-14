# Storybook next-dynamic issue

This is a reproduction of the issue with storybook and `next-dynamic` of not resolving suspense

## Steps to reproduce

1. Clone the repo
2. Run `yarn`
3. Run `yarn storybook`
   or `yarn build-storybook && npx http-server ./storybook-static`
4. Open the provided storybook url and open **NextJs dynamic issue** story folder

There are four stories here:

One is using the default `CheckUserSession` component (**Not dynamic** story) and others use the `next-dynamic` wrapper of that component called `CheckUserSessionDynamic`:

1. **Dynamic** - parent and child components use `fetch` to get data
2. **Dynamic Child Non Async** - child components don't make async calls (mock data)
3. **Dynamic All Aon Async** - child and parent components don't make async calls (mock data)

During each story open the _Network_ tab in browser tools

You will get two behaviors:

### Not dynamic behavior

The page will show one main spinner from the _Story_'s suspense and then shortly a lot of spinners for each post after resolving `/posts` route and will execute each HTTP request once and will show the content in a few seconds

### Dynamic behavior

The page will show only the main spinner from _Story_'s suspense and will keep spaming HTTP calls to `/posts` route from the `<Posts />` component (except **Dynamic All Aon Async** story)

The same behavior was confirmed on prod environment with infinite calls to HTTP endpoint (which was added to check if re-render _(?)_ was happening)
