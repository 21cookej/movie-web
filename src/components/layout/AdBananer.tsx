import { useEffect, useRef } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
  className?: string;
};

function AdBanner({ dataAdSlot, dataAdFormat, dataFullWidthResponsive, className = "" }: AdBannerTypes) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.getAttribute("data-loading-flag")) {
      try {
        adRef.current.setAttribute("data-loading-flag", "true");
        // 尝试加载广告
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }, []);

  return (
    <div ref={adRef}>
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: "block" }}
        data-ad-client="ca-pub-5901616898778649"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}></ins>
      <iframe id="e4eb41aa660ade0953666d8a6fc6ec88" width={300} height={200}></iframe>
    </div>
  );
}

export { AdBanner };
