// @flow
import React from "react";
import { Tabs } from "flowbite-react";

const OffersSamsung = (props) => {
  return (
    <section>
      <Tabs.Group aria-label="Full width tabs" className="w-full">
        <Tabs.Item title="Profile">Profile content</Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Invoice">Invoice content</Tabs.Item>
      </Tabs.Group>
    </section>
  );
};
export default OffersSamsung;
