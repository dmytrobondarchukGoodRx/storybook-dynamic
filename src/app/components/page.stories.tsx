import type { Meta, StoryObj } from "@storybook/react";

import { Suspense } from "react";
import { Loader } from "./Loader/Loader";
import { Page } from "./page";

const FallBack = () => {
  return <Loader />;
};

const meta: Meta<typeof Page> = {
  title: "NextJs dynamic issue",
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Page>;
export const NotDynamic: Story = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Page type={"static"} />
    </Suspense>
  );
};

NotDynamic.beforeEach = () => {
  global.document.cookie = "user_id=1;";
};

export const Dynamic: Story = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Page type={"dynamic"} />
    </Suspense>
  );
};

Dynamic.beforeEach = () => {
  global.document.cookie = "user_id=3;";
};

export const DynamicChildNonAsync: Story = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Page type={"dynamic-child-non-async"} />
    </Suspense>
  );
};

DynamicChildNonAsync.beforeEach = () => {
  global.document.cookie = "user_id=3;";
};

export const DynamicAllNonAsync: Story = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Page type={"dynamic-all-non-async"} />
    </Suspense>
  );
};

DynamicAllNonAsync.beforeEach = () => {
  global.document.cookie = "user_id=3;";
};
