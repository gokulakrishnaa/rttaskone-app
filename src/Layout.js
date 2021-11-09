import React from "react";
import "./Layout.css";
import Button from "@mui/material/Button";

export default function Layout() {
  const details = [
    {
      title: "FREE",
      price: 0,
      user: { value: "Single User", icon: true },
      storage: { value: "5GB Storage", icon: true },
      public: { value: "Unlimited Public Projects", icon: true },
      access: { value: "Community Access", icon: true },
      private: { value: "Unlimited Private Projects", icon: false },
      support: { value: "Dedicated Phone Support", icon: false },
      domain: { value: "Free Subdomain", icon: false },
      report: { value: "Monthly Status Report", icon: false },
    },
    {
      title: "PLUS",
      price: 9,
      user: { value: "5 Users", icon: true },
      storage: { value: "50GB Storage", icon: true },
      public: { value: "Unlimited Public Projects", icon: true },
      access: { value: "Community Access", icon: true },
      private: { value: "Unlimited Private Projects", icon: true },
      support: { value: "Dedicated Phone Support", icon: true },
      domain: { value: "Free Subdomain", icon: true },
      report: { value: "Monthly Status Report", icon: false },
    },
    {
      title: "PRO",
      price: 49,
      user: { value: "Unlimited User", icon: true },
      storage: { value: "150GB Storage", icon: true },
      public: { value: "Unlimited Public Projects", icon: true },
      access: { value: "Community Access", icon: true },
      private: { value: "Unlimited Private Projects", icon: true },
      support: { value: "Dedicated Phone Support", icon: true },
      domain: { value: "Unlimited Free Subdomain", icon: true },
      report: { value: "Monthly Status Report", icon: true },
    },
  ];
  return (
    <div className="container">
      {details.map((data) => (
        <Display
          title={data.title}
          price={data.price}
          user={data.user.value}
          storage={data.storage.value}
          publicpro={data.public.value}
          access={data.access.value}
          privatepro={data.private.value}
          support={data.support.value}
          domain={data.domain.value}
          report={data.report.value}
        />
      ))}
    </div>
  );
}

function Display({
  title,
  price,
  user,
  storage,
  publicpro,
  privatepro,
  access,
  support,
  domain,
  report,
}) {
  return (
    <div className="boxLayout">
      <div className="header">
        <small className="title">{title}</small>
        <p className="price">
          ${price}
          <small className="subText">/month</small>
        </p>
      </div>
      <div className="list">
        <ul>
          <li>{user}</li>
          <li>{storage}</li>
          <li>{publicpro} </li>
          <li>{access}</li>
          <li>{privatepro}</li>
          <li>{support}</li>
          <li>{domain}</li>
          <li className="listItem">{report}</li>
        </ul>
      </div>
      <Button className="submitButton" variant="contained">
        BUTTON
      </Button>
    </div>
  );
}
