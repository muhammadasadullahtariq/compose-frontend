"use client";

const ExpediaWidget = () => {
  return (
    <div
      class="eg-widget eg-search-widget"
      data-widget="search"
      data-program="us-expedia"
      data-lobs="stays,flights"
      data-network="pz"
      data-camref="1100lGndQ"
      data-instance="llvzwvhobwyw0s59fv8"
    >
      <iframe
        class="eg-widget-frame eg-search-widget-frame"
        src="https://affiliates.expediagroup.com/products/widgets/search-widget?program=us-expedia&amp;lobs=stays%2Cflights&amp;network=pz&amp;camref=1100lGndQ&amp;instance=llvzwvhobwyw0s59fv8"
        style={{
          width: "100%",
          height: "300px",
          margin: "auto",
          border: "none",
          marginBottom: "20px",
        }}
        //style="width: 100%; height: 296px; margin: auto; border: none;"
      ></iframe>
    </div>
  );
};

export default ExpediaWidget;
