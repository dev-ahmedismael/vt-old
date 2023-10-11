import Script from "next/script";
import { useEffect } from "react";

export default function PaymentForm() {
  useEffect(() => {
    const moyasar = window?.Moyasar;
    console.log(moyasar);
  }, []);
  return (
    <>
      <Script
        src="https://cdn.moyasar.com/mpf/1.10.0/moyasar.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdn.moyasar.com/mpf/1.7.3/moyasar.css"
      />
      <div className="mysr-form"></div>
    </>
  );
}
